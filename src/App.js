import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../../reactlealmart/src/pages/Dashboard'
import EditUser from '../../reactlealmart/src/pages/EditUser'
import Login from '../../reactlealmart/src/pages/Login'
import Register from '../../reactlealmart/src/pages/Register'
import CreateUser from './pages/CreateUser'
import AuthRoute from './Route/AuthRoute'
import PrivateRoute from './Route/PrivateRoute'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/register" component={Register} />
        <Route exact path="/" component={Dashboard} />
        <Route path="/edit/:id" component={EditUser} />
        <Route path="/create" component={CreateUser} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
