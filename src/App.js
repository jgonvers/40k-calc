import React from 'react';
import './App.css';
import Sidebar from './features/sidebar/sidebar';
import Result from './features/result/result';
import AddAttackForm from './features/addAttackForm/addAttackForm';
import { useSelector } from 'react-redux';
import { selectFormState } from './features/addAttackForm/AttackFormSlice';
function App() {
  const formState = useSelector(selectFormState);
  const form = () => {
    if (formState) {
      return (<AddAttackForm />);
    }
  }
  return (
    <div className="App">
      <Result />
      <Sidebar />
      {form()}
    </div>
  );
}

export default App;
