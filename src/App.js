import React from 'react';
import {Link, Route,BrowserRouter,Switch} from 'react-router-dom'
import Hills from './components/Hills'
import King from './components/King'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <p>Click the links for fun facts about Cincinnati</p>
     <Link to='/king'>King of Cincinnati</Link>
     <br/>
     <Link to ='/Hills'>City of Hills</Link>
     <Switch>
       <Route path ='/King' component={King}/>
       <Route path ='/Hills' component={Hills}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
