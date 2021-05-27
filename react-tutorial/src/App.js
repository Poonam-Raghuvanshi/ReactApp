import logo from './logo.svg';
import './App.css';
import ExpenseItem from './Components/ExpenseItem';

function App() {
  const expense = [
    {
      id: "1",
      date: new Date(),
      title: "Car Insurance",
      amount: "294.67"
    }, {
      id: "2",
      date: new Date(2021, 2, 5),
      title: "Car Insurance",
      amount: "104.37"
    }, {
      id: "3",
      date: new Date(2021, 2, 4),
      title: "Car Insurance",
      amount: "204.22"
    }, {
      id: "4",
      date: new Date(2021, 1, 15),
      title: "Car Insurance",
      amount: "694.67"
    }]
  return (
    <div>
      <ExpenseItem date={expense[0].date} title={expense[0].title} amount={expense[0].amount}></ExpenseItem>
      <ExpenseItem date={expense[1].date} title={expense[1].title} amount={expense[1].amount}></ExpenseItem>
      <ExpenseItem date={expense[2].date} title={expense[2].title} amount={expense[2].amount}></ExpenseItem>
      <ExpenseItem date={expense[3].date} title={expense[3].title} amount={expense[3].amount}></ExpenseItem>
    </div>
  );
}

export default App;
