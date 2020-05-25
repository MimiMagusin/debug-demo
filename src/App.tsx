import React from 'react';
import './App.css';
import Slide from './components/Slide';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Greeting: React.FC = () => <h1>Hi!</h1>
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/slides" component={Slide} />
        <Route path="/" component={Greeting} />
      </Switch>
    </Router>
  );
}

export default App;
