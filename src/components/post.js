import React from 'react';
import {connect} from 'react-redux';

class Post extends React.Component {
    render() {
        console.log(this.props.post)
        const post = this.props.post ?(
            <>
            <div className="jumbotron">
                <h1 className="display-4">{this.props.post.title}</h1>
            </div>
            <div className="container">
                <div className="row">
                    <p>{this.props.post.body}</p>       
                </div>
            </div>
            </>
        ):(
            <div className="row">
                    <p>loading post ...</p>       
            </div> 
        )
      return (
        <>
        {post}
            {/* <div class="jumbotron">
                <h1 class="display-2">Details</h1>
                <p class="lead">Marketing message here.</p>
                
                <a class="btn btn-lg btn-primary" href="#" role="button">Call to Action »</a>
            </div> */}
            {/* <div class="container">
                <div class="row">
                    
                </div>
            </div> */}
            </>
    )
    }
  }

const mapStateToProps = (state, ownProps) =>{
        let id = parseInt(ownProps.match.params.post_id);
        return{
            post: state.posts.find(post => post.id === id)
        }
}
export default connect(mapStateToProps)(Post);