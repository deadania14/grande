import React from 'react';
import HeadPage from './modules/headPage'; 
import Logo from './modules/logo.png'

class About extends React.Component{
    // Lifting the State Up of title and short description 
    state = {
        title : "About",
        sdesc : "This is my frist blog"
    }
    render(){
        return(
            <div className="jumbotron text-center">
                <img src={Logo} alt= "temporary logo" class="img-thumbnail"></img>
                <HeadPage titlePage = {this.state.title} shortDesc = {this.state.sdesc} />
            </div>
        )
    }
} 
    
export default About;