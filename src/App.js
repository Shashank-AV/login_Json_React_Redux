import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Login from './Components/Login'
import Dashboard from './Components/Dashboard';
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
       <Router>
      <Switch>       
        <Route exact path="/" component={Login} />

       <Route exact path="/dashboard" component={Dashboard} />
       </Switch>

       </Router>
     
    </div>
  );
}

export default App;
