
import { useState } from 'react';
import './App.css';
import Expense from './Components/Expenses/Expense';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: "1",
    date: new Date(2019, 4, 22),
    title: "Tv Showroom",
    amount: "294.67"
  }, {
    id: "2",
    date: new Date(2021, 2, 15),
    title: "Electricity Bill",
    amount: "104.37"
  }, {
    id: "3",
    date: new Date(2020, 2, 4),
    title: "Car Insurance",
    amount: "204.22"
  }, {
    id: "4",
    date: new Date(2021, 1, 13),
    title: "Bike Service",
    amount: "694.67"
  }]

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  
  }

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
