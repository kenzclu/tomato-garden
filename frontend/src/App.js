import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Sidebar from './components/sidebar/Sidebar'
import Landing from './components/Landing'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true}>
          <Landing />
        </Route>
        <Route path='/pomodoro' exact={true}>
          <div className="app">
            <Sidebar />
            <Dashboard />
          </div>
        </Route>
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}

export default App;
