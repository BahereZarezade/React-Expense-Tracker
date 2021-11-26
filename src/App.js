// import logo from './logo.svg';
import './components/App.css';
import Expenses from './components/Expenses';


function App() {
  //const for ExpenseItem component
  const expenses = [
    { id: "e1", title: "بیمه ماشین", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: "e2", title: "دستمال", amount: 300.210, date: new Date(2021, 3, 28) },
    { id: "e3", title: "میز چوبی", amount: 400.254, date: new Date(2021, 4, 28) },
    { id: "e4", title: "صندلی", amount: 500.635, date: new Date(2021, 5, 28) },
  ];
  return (
    <div>
      <h1 className="Title">React Expense Tracker</h1>
      <div className="container main">
        <Expenses items={expenses} />
      </div>
    </div>
  );
}

export default App;

