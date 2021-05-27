
import './App.css';
import Expense from './Components/Expense';

function App() {
  const expenses = [
    {
      id: "1",
      date: new Date(),
      title: "Tv Showroom",
      amount: "294.67"
    }, {
      id: "2",
      date: new Date(2021, 2, 5),
      title: "Electricity Bill",
      amount: "104.37"
    }, {
      id: "3",
      date: new Date(2021, 2, 4),
      title: "Car Insurance",
      amount: "204.22"
    }, {
      id: "4",
      date: new Date(2021, 1, 15),
      title: "Bike Service",
      amount: "694.67"
    }]
  return (
    <div>
     <Expense items={expenses}/>
    </div>
  );
}

export default App;
