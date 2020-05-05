import React from 'react';

const Step2 = ({ setForm, formData, navigation }) => {
  const { email } = formData;

  const { next, previous } = navigation;

  return (
    <div className="container">
      <form>
        <fieldset>
        <legend>Step 1</legend>
        <label htmlFor="email">Email Id:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={setForm} />
        </fieldset>
        <button onClick={previous}>Previous</button> &nbsp;
        <button onClick={next}>Next</button>
      </form>
    </div>
  );

};

export default Step2;
