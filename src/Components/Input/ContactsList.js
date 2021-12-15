import React from "react";
// import PropTypes from 'prop-types';

export default function ContactsList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <li key={id}>
          <div>
            <p>{`${name}:${phone}`}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

// ContactsList.propTypes = {

// }
