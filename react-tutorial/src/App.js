import logo from './logo.svg';
import './App.css';
import First from './Components/First';
import Second from './Components/Second';
import Third from './Components/Third';
import EventBind from './Components/EventBind';
import Parent from './Components/Parent';

function App() {
  return (
    <div className="App">
   {/*   <First name="React"/>
      <Second name="Angular"/>
  <Third/>*/}
      <EventBind/>
      <Parent/>
    </div>
  );
}

export default App;
