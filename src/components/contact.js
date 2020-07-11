import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddMessage from './modules/addMessage';

function Msg(props){
    return(
        <div className="col-md" key={props.id}>
            <h3 className="display-4">{props.name}</h3>
            <h6 strong>({props.email})</h6>
            <p>{props.message}</p>
        </div>
    )
}
class Contact extends Component{
    render(){
        console.log(this.props)
        const {messages} = this.props

        // if there is any message, show the message, else say that no message yet
        const msgList = messages.length ? (
            messages.map (message =>{
                return(
                    <>
                    {React.createElement(Msg, {
                        id: message.id,
                        name: message.name,
                        email: message.email,
                        message:message.message
                    })}
                    </>
                )
            })
        ) : (
            <div className="col-md"><p>No message yet</p></div>
        )
        return (
            <>
            <div className="jumbotron">
                <h1 className="display-2">Contact</h1>
                <p className="lead">Leave a message here.</p>
                {/* extracting AddMessage component */}
                <AddMessage/>
            </div>
            <div className="text-center">
                <h4>MESSAGE LIST</h4>
            </div>
            <div className="row">
                {msgList}
            </div>
            </>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        messages: state.messages
    }
}
export default connect(mapStateToProps)(Contact);
