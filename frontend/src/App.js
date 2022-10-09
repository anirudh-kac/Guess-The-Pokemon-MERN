import {Route} from 'react-router-dom'

import Game from "./components/Game";
import Home from "./components/Home";
import Leaderboard from './components/Leaderboard';
import Score from './components/Score';

import "./App.css"

function App() {
  return (
    <div className="App">
      <Route path = "/" exact>
        <Home/>
      </Route>

      <Route path = "/game" exact>
        <Game/>
      </Route>

      <Route path = "/score" exact>
        <Score/>
      </Route>

      <Route path = "/leaderboard" exact>
        <Leaderboard/>
      </Route>


    </div>
  );
}

export default App;
