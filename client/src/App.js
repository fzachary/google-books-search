import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Container } from "./components/Grid";
import "./App.css"
import Search from "./pages/Search/index";
import Saved from "./pages/Saved/index";
import Footer from "./components/Footer";

function App() {
  return (
    
      <div className="App">
        <header className="App-header"></header>
          <Navbar />
          <Container>
            <Router>
              <Switch>
                <Route exact path="/" component={Search} />
                <Route exact path="/books" component={Saved} />
                <Route exact path="/books/:id" component={null} />
              </Switch>
            </Router>
          </Container>
        <Footer />
      </div>    
  );
}

export default App;
