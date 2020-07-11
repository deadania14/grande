import React from 'react';
import {connect} from 'react-redux';
import swal from 'sweetalert';
class AddMessage extends React.Component{
    nameRef  = React.createRef();
    emailRef  = React.createRef();
    messageRef  = React.createRef();
    onSubmit = (e) =>{
        let newMsg = {
                id: Math.round(Math.random() * 100) ,
                name : this.nameRef.current.value,
                email : this.emailRef.current.value,
                message : this.messageRef.current.value 
        }
        this.props.AddMessage(newMsg)
        // this.setState({message:msgClone});

        e.preventDefault();
        swal(`Thanks ${this.nameRef.current.value} for the message. `);  
        this.nameRef.current.value = "";
        this.emailRef.current.value = "";
        this.messageRef.current.value = "";
      };
    render(){
        return (
            <>
            <form onSubmit = {this.onSubmit}>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    {/* <input type="email" name="email" onChange= {_HandleChange} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={inputValues.email} required/> */}
                    <input ref={this.emailRef} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Name</label>
                    {/* <input type="text" name="name" onChange= {_HandleChange} class="form-control" id="exampleFormControlInput1" placeholder="John Doe" required/> */}
                    <input ref={this.nameRef} type="text" class="form-control" id="exampleFormControlInput1" placeholder="John Doe" required/>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    {/* <textarea name="message" onChange= {_HandleChange} class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea> */}
                    <textarea ref={this.messageRef} class="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
            </form>
            </>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        AddMessage: message => dispatch({ type: 'ADD_MESSAGE', message}),
    };
  };
export default connect(null, mapDispatchToProps)(AddMessage);
