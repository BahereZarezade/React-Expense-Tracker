// import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';
import './components/App.css';

function App(){
  const expenses=[
  {id: "e1", title: "بیمه ماشین", amount: 294.67, date: new Date(2021, 2, 28)},
  {id: "e2", title: "دستمال", amount: 300.210, date: new Date(2021, 3, 28)},
  {id: "e3", title: "میز چوبی", amount: 400.254, date: new Date(2021, 4, 28)},
  {id: "e4", title: "صندلی", amount: 500.635, date: new Date(2021, 5, 28)},
];
  return(
    <div>
      <h1 className="Title">React Expense Tracker</h1>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
     <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
     <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem>
    </div>
  );
}

export default App;

