import { Route, Switch } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import Gradient from "./components/Gradient/Gradient";
import Header from "./components/Header/Header";
import Navbox from './components/Navbox/Navbox';
import Balance from './components/Balance/Balance';
import Bottombar from './components/Bottombar/Bottombar';

function App() {
  return (
    <div className="App">
      <Topbar />

      <Switch>
        <Route path='/' exact>
          <Gradient />
          <Header />
          <Navbox />
          <Balance />
        </Route>
      </Switch>

      <Bottombar />
    </div>
  );
}

export default App;