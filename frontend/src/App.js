import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Sidebar from './components/sidebar/Sidebar'
import Landing from './components/Landing'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/landing'>
          <Landing />
        </Route>
        <Route path='/'>
          <div className="app">
            <Sidebar />
            <Dashboard />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
