import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MovieDetails } from "./pages/MovieDetails";
import { LandingPage } from "./pages/LandingPage";

export function App() {
  return (
    <Router> 
      <header>
        <Link to="/"><h1 className="title">Movies</h1></Link>
      </header>
      <main>
      <main>
          <Switch>
            <Route exact path="/movies/:movieId"> <MovieDetails/> </Route>
            <Route path="/"> <LandingPage/> </Route>
          </Switch>
          </main>
      </main>
   </Router>
  );
}
