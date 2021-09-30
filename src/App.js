import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
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
          <Route path='/home'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
