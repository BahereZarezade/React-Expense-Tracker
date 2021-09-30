import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate=new Date (2021,2,8);
  const expenseTitle='بیمه ماشین';
  const expenseAmount=294.67;
  return (
    <div className="container">
    <div className="expense-item">
       <div className="date"><h2>{expenseDate.toISOString()}</h2>
       <h2>{expenseTitle}</h2>
       </div>

        <div className="expense-item__description">   
        <h3>{Math.random()}</h3>
         <div className="expense-item__price">${expenseAmount}</div>
         
    </div>
    </div>
    </div>
  );
}

export default ExpenseItem;
