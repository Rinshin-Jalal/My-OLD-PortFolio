import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Navbar from "./comps/Navbar/Navbar";
import NotFound from "./pages/NotFound/NotFound";
import FadeIn from "./comps/Fadein/FadeIn";

function App() {
  useEffect(() => {
    console.log(
      "%cHey you Developer!.\nNice to See you.\nCheck out my Code in Github:",
      "color:  #fff;;font-weight:bold;font-size:30px;display:block;background:black;"
    );
    console.log(
      "%chttps://github.com/Rinshin-Jalal/My-PortFolio",
      "color:blue;font-weight:bold;font-size:20px;display:block;background:black;"
    );
  }, []);
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact>
            <Home />
            <div className="line red-pink"></div>
            <FadeIn>
              <About />
            </FadeIn>
            <div className="line blue-green"></div>
            <FadeIn>
              <Skills />
            </FadeIn>
            <div className="line red-pink"></div>
            <FadeIn>
              <Contact />
            </FadeIn>
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
