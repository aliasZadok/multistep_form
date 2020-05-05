import React from 'react';

const Step1 = ({ setForm, formData, navigation }) => {
  const { name } = formData;

  const { next } = navigation;

  return (
    <div className="container">
      <form>
        <fieldset>
        <legend>Step 1</legend>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={setForm} />
        </fieldset>
        <button onClick={next}>Next</button>
      </form>
    </div>
  );

};

export default Step1;
