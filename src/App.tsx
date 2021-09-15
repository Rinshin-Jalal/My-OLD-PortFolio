import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Navbar from "./comps/Navbar/Navbar";
import NotFound from "./pages/NotFound/NotFound";
import FadeIn from "./comps/Fadein/FadeIn";

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact>
            <Home />
            <div id="about" className="line red-pink"></div>
            <FadeIn>
              <About />
            </FadeIn>
            <div id="skills" className="line blue-green"></div>
            <FadeIn>
              <Skills />
            </FadeIn>
            <div id="contact" className="line red-pink"></div>
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
