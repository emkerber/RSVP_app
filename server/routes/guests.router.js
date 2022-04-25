// for querying the guests table

const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// search for the name entered on the Landing Page
// and if it's found then send back all of their responses
router.get('/search/:party/:firstName/:lastName', (req, res) => {
  const queryText = `
    SELECT * FROM "guests" 
    WHERE party_id = $1 
    AND first_name = $2 AND last_name = $3;
  `;

  const rp = req.params;

  pool
    .query(queryText, [rp.party, rp.firstName, rp.lastName])
    .then((result) => res.send(result.rows)) // will be one row or no rows
    .catch((err) => {
      console.log('Failed to get guest', err);
      res.sendStatus(500);
    });
});


// fetch guest's responses
router.get('/fetch-by-id/:id', rejectUnauthenticated, (req, res) => {
  const queryText = `
    SELECT * FROM "guests"
    WHERE id = $1;
  `;
  pool
    .query(queryText, [req.params.id])
    .then(result => res.send(result.rows))
    .catch(err => {
      console.log('Failed to get guest by id', err);
      res.sendStatus(500);
    });
});


// when a new user is on the Guest List, 
// after they register,
// update guests table with their user_id
router.put('/register', (req, res) => {
  const queryText = `
    UPDATE "guests" 
    SET user_id = $1 
    WHERE first_name = $2 AND last_name = $3
    AND party_id = $4;
  `;

  const rb = req.body;

  pool
    .query(queryText, [rb.id, rb.name.firstName, rb.name.lastName, rb.party])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('Error updating guests user_id', queryText, err);
      res.sendStatus(500);
    });
});


// when RSVP form is submitted and attendingResponse is YAY
router.put('/update-responses/YAY', rejectUnauthenticated, (req, res) => {
  const queryText = `
    UPDATE "guests"
    SET attending = true,
      attending_code = 'YAY',
      attending_deets = 'NA',
      dietary_restrictions = $1,
      additional_guests = $2,
      parking = $3,
      duties_indicated = $4,
      questions_comments = $5
    WHERE id = $6;
  `;

  let queryParams = [];
  const rb = req.body;
  queryParams[0] = rb.dietRestrictions;
  queryParams[1] = rb.additionalGuests;
  queryParams[2] = rb.parking;
  queryParams[3] = rb.setupDuty || rb.cleanupDuty || rb.waterDuty || rb.photoDuty || rb.noDuty;
  queryParams[4] = rb.questionsComments;
  queryParams[5] = rb.guestId;

  pool
    .query(queryText, queryParams)
    .then(() => res.sendStatus(200))
    .catch(error => {
      console.log('Error updating guest responses:', error);
      res.sendStatus(500);
    });
});


// when RSVP form is submitted and attendingResponse is TBD
router.put('/update-responses/TBD', rejectUnauthenticated, (req, res) => {
  const queryText = `
    UPDATE "guests" 
    SET attending = false, 
      attending_code = 'TBD', 
      attending_deets = $1
    WHERE id = $2;
  `;

  const rb = req.body;

  pool
    .query(queryText, [rb.attendingDeets, rb.guestId])
    .then(result => res.send(result.rows.data[0]))
    .catch(error => {
      console.log('Error updating responses - TBD:', error);
      res.sendStatus(500);
    });
});

// // GET the whole guest list
// // will likely use for signed-in guests who have provided all responses
// // and also Admin
// router.get('/all', (req, res) => {
//   const queryText = `SELECT * FROM "guests"`;
//   pool
//     .query(queryText, [])
//     .then((result) => res.send(result.rows))
//     .catch((err) => {
//       console.log('Failed to get guest list', err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;