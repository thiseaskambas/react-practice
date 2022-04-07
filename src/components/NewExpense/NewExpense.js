import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [clicked, setClicked] = useState(false);
  function switchClick() {
    setClicked((prevState) => {
      return prevState === false ? true : false;
    });
  }

  return (
    <div className="new-expense">
      {!clicked && <button onClick={switchClick}>Add new expense</button>}
      {clicked && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={switchClick}
        />
      )}
    </div>
  );
}

export default NewExpense;
