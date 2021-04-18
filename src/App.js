
import './App.css';
import NavBar from './NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import MyProject from './components/MyProject'
import Footer from './Footer';
import DemoCarousel from './components/DemoCarousel';



function App() {
  return (
 <> 
  <Router>
  
    <NavBar />
  <DemoCarousel/>
     <Switch>
    
          <Route exact path="/" component={AboutMe}>
            <AboutMe />
          </Route>
          <Route path="/AboutMe" component={AboutMe}>
            <AboutMe />
          </Route>
          <Route path="/ContactMe" component={ContactMe}>
            <ContactMe />
          </Route>
          <Route path="/MyProject" component={MyProject}>
            <MyProject />
          </Route>
        </Switch>
        

    <Footer/>
    </Router>
    
</>
  );
}

export default App;
