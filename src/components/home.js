import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeadPage from './modules/headPage';
import {Link} from 'react-router-dom'

function Post(props){
    return(
        <div className="col-md" key={props.id}>
            <Link to={'/'+ props.id}>
                <h5 class="display-7">{props.title}</h5>
            </Link>
                <p>{props.body}</p>
            </div>
    )
}
class Home extends Component{
    // Lifting the State Up of title and short description 
    state = {
        title : "Home",
        sdesc : "You can see posts in this page"
    }
    render(){
        console.log(this.props)
        const {posts} = this.props

        // if there is any post, show the pos, else say that no post yet
        const postLIst = posts.length ? (
            posts.map (post =>{
                return(
                    <>
                    {/* extracting the post to function Post*/}
                    {React.createElement(Post, {
                        id: post.id,
                        title: post.title,
                        body:post.body
                    })}
                    </>
                )
            })
        ) : (
            <div className="col-md"><p>No post yet</p></div>
        )
        return (
            <>
            <div className="jumbotron">
                <HeadPage titlePage = {this.state.title} shortDesc = {this.state.sdesc} />
            </div>
            <div className="row">
                {postLIst}
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home);