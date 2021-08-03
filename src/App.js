import './App.css';
import Dashboard from './component/dashboard/dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignIn from './component/auth/SignIn/SignIn';
import SignUp from './component/auth/SignUp/SignUp';

function IsAutherised({ children }) {
  // return <div>Loading</div>;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <IsAutherised>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/sign-in' component={SignIn} />
          <Route path='/sign-up' component={SignUp} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </IsAutherised>
    </BrowserRouter>
  );
}

export default App;
