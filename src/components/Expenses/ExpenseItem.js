// import { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

function ExpenseItem(props) {
  // const [title, setTitle] = useState(props.title);

  let date = props.date;
  let amount = props.amount;

  // const clickHandler = () => {
  //   setTitle("NEW TITLE");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
