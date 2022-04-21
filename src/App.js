import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='device'>
        <div className='head'>
          <h1>What's The Weather</h1>
          <p>Enter the name of a city :</p>
        </div>
        <div className='body'>
          <input type='text' className='inputField'/>
          <br/>
          <button type="submit">submit</button>
        </div>
      </div>
    </div>
  );
}

export default App;
