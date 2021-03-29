import React, { Component } from 'react';
import './ValidationSample.css';

export default class ValidationSample extends Component {
    state = {
        password : '',
        clicked : false,
        validate : false,
    }

    handleButtonClick = () =>{
        this.setState({clicked : true, validate : this.state.password === '0000' });
        this.input.focus();
    }

    handleChange = (e) =>{
        this.setState({password : e.target.value});
    }

    render() {
        return (
            <div>
                <input type='password'
                ref={(ref)=>{this.input = ref}}
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validate ? 'success' : 'failure') : ''}></input>
            <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}
