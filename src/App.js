
// NODE_MODULES
import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useLocation,
  Redirect,
} from "react-router-dom";

// LOCAL
import Header from './components/header';
import Articles from './components/articles';
import Wrapper from 'components/wrapper';

// Routes
import RouteHome from 'routes/home';
import RouteArticles from 'routes/articles';

function App() {
  return (
    <div className="App">

      <Router>
        <Wrapper>
          <Header />
          <Switch>
            <Route path="/s/"> <RouteArticles /> </Route>
            <Route path="/"> <RouteHome /> </Route>
            <Redirect to="/" />
          </Switch>
        </Wrapper>

        {/* <Articles /> */}
      </Router>
    </div>
  );
}

export default App;
