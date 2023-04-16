import './App.css';

function MyButton() {
  return (
    <>
      <a className='btn' href='https://react.dev' rel='noreferrer' target='_blank'>Learn More</a>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to my first <span id='react'>React</span> app</h1>
      <MyButton />
    </div>
  );
}

export default App;
