import React from 'react';

const Step3 = ({ setForm, formData, navigation }) => {
  const { password } = formData;

  const { previous } = navigation;

  const handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      email,
    } = formData;
    alert(`Your Account Details: \n
          Name: ${name}\n
          Email: ${email}\n
          Password: ${password}`);
  }

  return (
    <div className="container">
      <form>
        <fieldset>
        <legend>Step 3</legend>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={setForm} />
        </fieldset>
        <button onClick={previous}>Previous</button> &nbsp;
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );

};

export default Step3;
