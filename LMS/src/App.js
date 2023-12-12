import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
// import SignUp from "./components/auth/signup"
import SignIn from "./components/auth/login"
function App() {
    // Placeholder functions - Replace with your actual authentication logic
    const handleSignIn = (userData) => {
      console.log('Sign In:', userData);
      // Implement your sign-in logic here
    };
  
    const handleSignUp = (userData) => {
      console.log('Sign Up:', userData);
      // Implement your sign-up logic here
    };
    
  return (
    <>
      <Router>
        {/* <Header />  */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
          {/* Auth  */}
          <Route exact path="/signin" render={() => <SignIn onSignIn={handleSignIn} />} />
          {/* <Route exact path="/signup" render={() => <SignUp onSignUp={handleSignUp} />} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  )
}

export default App
