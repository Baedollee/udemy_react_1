import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm expenses={props.expenses} setExpenses={props.setExpenses} />
    </div>
  );
};

export default NewExpense;
