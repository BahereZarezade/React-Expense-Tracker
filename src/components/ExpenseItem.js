import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className="container">
    <div className="expense-item">
      
       <div className="date"><h2 className="date">{props.date.toISOString()}</h2>
       <h2 className="tilte">{props.title}</h2>
       </div>

        <div className="expense-item__description">   
        <h3>{Math.random()}</h3>
         <div className="expense-item__price">${props.amount}</div>

    </div>
    </div>
    </div>
  );
}

export default ExpenseItem;
