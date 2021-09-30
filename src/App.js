// import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';
import './components/App.css';

function App(){
  return(
    <div>
      <h1 className="Title">React Expense Tracker</h1>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;

