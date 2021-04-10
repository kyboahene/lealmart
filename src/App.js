import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Dashboard from '../../reactlealmart/src/pages/Dashboard'
import EditUser from '../../reactlealmart/src/pages/EditUser'
import Login from '../../reactlealmart/src/pages/Login'
import Register from '../../reactlealmart/src/pages/Register'
import CreateUser from './pages/CreateUser'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/create" component={CreateUser} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
