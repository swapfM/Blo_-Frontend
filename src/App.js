
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Router>
  );
}

export default App;
