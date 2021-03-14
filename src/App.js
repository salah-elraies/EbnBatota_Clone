import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";

import SingleTrip from "./pages/SingleTrip";
import Trips from "./pages/trips";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Terms from "./pages/terms";
import Register from "./pages/register";
import SignIn from "./components/SignIn";

function App() {
  const [appformShow, setAppFormShow] = useState(false);

  return (
    <Router>
      
        <Navbar appformShow={appformShow} setAppFormShow={setAppFormShow} />
        <SignIn appformShow={appformShow} setAppFormShow={setAppFormShow}/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/trips">
          <Trips />
        </Route>
        <Route path="/trips/:id">
          <SingleTrip />
        </Route>
        <Route path="/trips/:id">
          <Error />
        </Route>
        
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/terms">
          <Terms />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
