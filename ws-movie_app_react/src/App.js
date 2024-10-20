import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Detail from "./routes/Detail";
import About from "./routes/About";
import Home from "./routes/Home";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
