import "./App.css";
//Components
import Signin from "./Components/Signin/Signin"
import SignInComponent from "./Components/Signin/SigninComponent"
import Signup from "./Components/Signup/Signup";
import SignupComponent from "./Components/Signup/SignupComponent"
import Indeed from "./Components/Indeed"
import Home from "./Components/Home/Home"
import HiddenRoute from "./Components/HiddenRoute"
import LandingPage from "./Components/Landing Page/LandingPage"
import Nav from "./Components/Nav/Nav"

//State
import { AuthProvider } from "./Context/AuthContext";

//Router
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"


//Bootstrap imports
import { Container } from "react-bootstrap";

function App() {
  return (
    
       
          <Router>
            <AuthProvider>
              <Nav />
              
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/signup" component={SignupComponent} />
              <Route path="/signin" component={SignInComponent} />
              <Route path="/searchjobs" component={Indeed} />

              <HiddenRoute path="/home" component={Home} />

            </Switch>
            
            </AuthProvider>
          </Router>
          
    
      
    
  );
}

export default App;
