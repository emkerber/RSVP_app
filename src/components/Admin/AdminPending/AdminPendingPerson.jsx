import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';

function AdminPendingPerson({ person }) {
  const dispatch = useDispatch();

  const [message, setMessage] = useState('');

  const handleDenyClick = () => {
    // update row in pendings table
    dispatch({ 
      type: 'PENDING_DENIED',
      payload: {...person, message}
    });
  }

  const handleApproveClick = () => {
    // insert into guests then delete from pendings
    dispatch({
      type: 'PENDING_APPROVED',
      payload: {...person, message}
    });
  }

  return (
    <div className="person-container">
      
      {/* First and last name */}
      <p className="person-p">
        {person.first_name} {person.last_name}
      </p>

      {/* Welcome or denial message */}
      <TextField
        placeholder="Welcome/denial message"
        multiline
        rows={2}
        className="input"
        value={message}
        onChange={event => setMessage(event.target.value)}
      />

      <br />

      {/* Deny button */}
      <Button
        variant="contained"
        onClick={handleDenyClick}
      >
        Deny
      </Button>

      {/* Approve button */}
      <Button
        variant="contained"
        onClick={handleApproveClick}
      >
        Approve
      </Button>

    </div>
  );
}

export default AdminPendingPerson;