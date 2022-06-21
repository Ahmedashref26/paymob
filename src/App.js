import './App.css';
import Login from './components/Login';

function App() {
  const onSubmitHandler = (username, password) => {
    console.log(username, password);
  };
  return (
    <div className='App'>
      <Login onSubmit={onSubmitHandler} />
    </div>
  );
}

export default App;
