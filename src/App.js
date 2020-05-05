import React from 'react';
import { useForm, useStep } from "react-hooks-helper";

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

const steps = [
  { id: "name" },
  { id: "email" },
  { id: "password" },
];

const App = () => {
  const [formData, setForm] = useForm({
    name: '',
    email:  '',
    password: ''
  });
  const { step, navigation } = useStep({ initialStep: 0, steps });
  const { id } = step;

  const props = { formData, setForm, navigation };

  switch (id) {
    case "name":
      return <Step1 {...props} />;
    case "email":
      return <Step2 {...props} />;
    case "password":
      return <Step3 {...props} />;
    default:
      return null;
    }
}

export default App;
