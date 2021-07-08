import './App.css';
import Dashboard from './component/dashboard/dashboard';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function IsAutherised({ children }) {
  // return <div>Loading</div>;
  return children;
}

function App() {
  return (
    <BrowserRouter>
      <IsAutherised>
        <Switch>
          <Route exact path='/' component={Dashboard}/>
        </Switch>
      </IsAutherised>
    </BrowserRouter>
  );
}

export default App;
