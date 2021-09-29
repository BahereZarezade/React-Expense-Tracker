import logo from './logo.svg';
import './App.css';

function ExpenseItem() {
  const expenseDate=new Date (2021,2,8);
  const expenseTitle='بیمه ماشین';
  const expenseAmount=294.67;
  return (
    <div className="expense-item">
       <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <h3>{Math.random()}</h3>
         <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
