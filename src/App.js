import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
// import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;