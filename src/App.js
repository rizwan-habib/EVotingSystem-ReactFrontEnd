import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './welcome';
import CastVote from './castVote';
import RegisterVoter from './registerVoter';
import RegisterCandidate from './registerCandidate';

function App() {



  return (
    <div>
      <Router>
        <Switch>
          <Route path="/castVote">
            <CastVote/>
          </Route>
          <Route path="/registerVoter">
            <RegisterVoter/>
          </Route>
          <Route path="/registerCandidate">
            <RegisterCandidate/>
          </Route>
          <Route path="/">
            <WelcomePage/>
          </Route> 
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
