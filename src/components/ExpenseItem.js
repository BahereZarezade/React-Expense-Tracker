import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

export default function ExpenseItem(props) {

  return (
    <Card className="expense-item" >
      <ExpenseDate date={props.date} />
      <div className="expense-item__description" >
        <h3>{props.title}</h3>
        <div className="expense-item__price" > {props.amount} $ </div>
      </div>
    </Card>
  );
}

// export default ExpenseItem;