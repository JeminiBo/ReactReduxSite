import React from 'react';
import { connect } from 'react-redux';
import {Button} from "react-bootstrap"
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {login} from '../../redux/registration/registrationActions.jsx'
import {bindActionCreators} from 'redux'

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
       
    }
    
    onClick() {
        if (this.refs.loginInput.value !== ''){
            var loginText = this.refs.loginInput.value;
            var passText = this.refs.passInput.value;
            this.refs.loginInput.value = '';
            this.refs.passInput.value = '';
            
            return this.props.login(loginText, passText);
        }
        
    }
   

    render() {
        return (
            <div className = "centered">
      
            
            <p>Логин</p>
            <input ref='loginInput' />
            <p>Пароль</p>
            <input ref='passInput'  />
            <br></br>   
                <Button  bsStyle="primary" bsSize="large" onClick = {this.onClick.bind(this)} >Авторизоваться</Button>
            </div>
        )
    }

}

class LoginComponent extends React.Component {

    componentDidUpdate(){
        if(this.props.currentUser)
        {
            this.props.history.push("/")
        }
    }

    render() {
        return (
            <div>
                
                <LoginForm login={this.props.login} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.registrationReducer.currentUser,
});


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        login,
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
