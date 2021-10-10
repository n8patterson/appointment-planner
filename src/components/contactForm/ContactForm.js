import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        placeholder='Name'
        onChange={({ target }) => setName(target.value)}
      ></input>
      <input
        type='tel'
        value={phone}
        placeholder='Phone Number ###-###-####'
        pattern='[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}'
        onChange={({ target }) => setPhone(target.value)}
      ></input>
      <input
        type='email'
        value={email}
        placeholder='Email Address'
        onChange={({ target }) => setEmail(target.value)}
      ></input>
      <button type='submit'>Submit</button>
    </form>
  );
};
