import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';

function App() {
  return (
    <div className="App">
      <First name="React"/>
      <Second name="Angular"/>
      <Third/>
    </div>
  );
}

export default App;
