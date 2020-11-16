// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Top_bar from "./Top_bar.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Connexion from './Connexion';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
       <Route path="/checkout">
            <Header />
            <Top_bar/>
           <Checkout/>
         </Route>
         

         <Route path="/">
           <Header/>
            <Home/>
          
         </Route>

       </Switch>
     </Router>
      
    </div>
  );
}

export default App;
