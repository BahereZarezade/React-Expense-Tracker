import './ExpenseItem.css';

function ExpenseItem(props) {
  const month = props.date.toLocaleString('en-US', {month: 'long'});
  const year = props.date.toLocaleString('en-US', {day: '2-digit'});
  const day = props.date.getFullYear();

  return (
    <div className="container">
      <div className="expense-item">
             <div>
               <div>{month}</div>
               <div>{day}</div>
               <div>{year}</div>
            </div>
            <div><h2>{props.title}</h2></div>
       <div className="expense-item__description">   
       <h3>{Math.random()}</h3>
       <div className="expense-item__price">${props.amount}</div>
    </div>
    </div>
    </div>
  );
}

export default ExpenseItem;
