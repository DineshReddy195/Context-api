import './App.css';
import A from './Components/A';
import Parent from './Components2/Parent';

function App() {
  return (
    <div className="App">
      <div className='parent-child'>
      <A/>
      <Parent/>
      </div>
    </div>
  );
}

export default App;
