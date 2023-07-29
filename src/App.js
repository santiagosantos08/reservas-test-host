import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <AuthDetails />
    </div>
  );
}

export default App;