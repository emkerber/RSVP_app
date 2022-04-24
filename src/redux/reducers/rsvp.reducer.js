// store values as they're entered on the rsvp form
import { combineReducers } from 'redux';

// YAY, TBD, NAY
const attendingCode = (state = '', action) => {
  switch (action.type) {
    case 'SET_RSVP_ATTENDING_CODE':
      return action.payload;
    case 'UNSET_RSVP_ATTENDING_CODE':
      return '';
    default:
      return state;
  }
}

// multiline input, NA
const attendingDeets = (state = '', action) => {
  switch (action.type) {
    case 'SET_RSVP_ATTENDING_DEETS':
      return action.payload;
    case 'UNSET_RSVP_ATTENDING_DEETS':
      return '';
    default:
      return state;
  }
};

// input, NA
const dietRestrictions = (state = '', action) => {
  switch (action.type) {
    case 'SET_RSVP_DIET_RESTRICTIONS':
      return action.payload;
    case 'UNSET_RSVP_DIET_RESTRICTIONS':
      return '';
    default:
      return state;
  }
}

// input, NA
const additionalGuests = (state = '', action) => {
  switch (action.type) {
    case 'SET_RSVP_ADDITIONAL_GUESTS':
      return action.payload;
    case 'UNSET_RSVP_ADDITIONAL_GUESTS':
      return '';
    default:
      return state;
  }
}

// during, overnight, NA
const parking = (state = '', action) => {
  switch (action.type) {
    case 'SET_RSVP_PARKING':
      return action.payload;
    case 'UNSET_RSVP_PARKING':
      return '';
    default:
      return state;
  }
}

// true if its box is checked, else false
const setupDuty = (state = false, action) => {
  switch (action.type) {
    case 'SET_RSVP_SETUP_DUTY':
      return action.payload;
    case 'UNSET_RSVP_SETUP_DUTY':
      return false;
    default:
      return state;
  }
}

// true if its box is checked, else false
const cleanupDuty = (state = false, action) => {
  switch (action.type) {
    case 'SET_RSVP_CLEANUP_DUTY':
      return action.payload;
    case 'UNSET_RSVP_CLEANUP_DUTY':
      return false;
    default:
      return state;
  }
}

// true if its box is checked, else false
const waterDuty = (state = false, action) => {
  switch (action.type) {
    case 'SET_RSVP_HYDRATION_DUTY':
      return action.payload;
    case 'UNSET_RSVP_HYDRATION_DUTY':
      return false;
    default:
      return state;
  }
}

// true if its box is checked, else false
const photoDuty = (state = false, action) => {
  switch (action.type) {
    case 'SET_RSVP_PHOTO_DUTY':
      return action.payload;
    case 'UNSET_RSVP_PHOTO_DUTY':
      return false;
    default:
      return state;
  }
}

// true if its box is checked, else false
const noDuty = (state = false, action) => {
  switch (action.type) {
    case 'SET_RSVP_NO_DUTY':
      return action.payload;
    case 'UNSET_RSVP_NO_DUTY':
      return false;
    default:
      return state;
  }
}

const questionsComments = (state = '', action) => {
  switch (action.type) {
    case 'SET_RSVP_QUESTIONS_COMMENTS':
      return action.payload;
    case 'UNSET_RSVP_QUESTIONS_COMMENTS':
      return '';
    default:
      return state;
  }
}

export default combineReducers({
  attendingCode,
  attendingDeets,
  dietRestrictions,
  additionalGuests,
  parking,
  setupDuty,
  cleanupDuty,
  waterDuty,
  photoDuty,
  noDuty,
  questionsComments,
});