import React from 'react';
import Home from './components/home';
import Topbar from './components/topbar';
import Footer from './components/footer';
import Contact from './components/contact';
import About from './components/about';
import Post from './components/post';
import swal from 'sweetalert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

class App extends React.Component{
  componentDidMount(){
    swal("Input your name here:", {
      content: "input",
    })
    .then((value) => {
      swal(`Hello ${value}`);
    });
  }
  render(){
    return (
    <Router>
        <Topbar />
        <Switch>
          <Route exact path = '/' component= {Home}/>
          <Route path = '/about' component= {About}/>
          <Route path = '/contact' component= {Contact}/>
          <Route path = '/:post_id' component= {Post}/>
        </Switch>
        <Footer/>
    </Router>
    );
  }
}

export default App;
