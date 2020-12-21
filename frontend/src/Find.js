import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import CustomerDetails from './CustomerDetails'
import axios from 'axios'

export default class Customers extends Component {


    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    mySubmitHandler = (event) => {
        var axios = require('axios');
        var qs = require('qs');
        var data = qs.stringify({
            'id': 'B1_109'
        });
        var config = {
            method: 'get',
            url: 'http://localhost:4000/find',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            alert("You are submitting " +response.data);
        })
        .catch(function (error) {
            console.log(error);
        });



    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name, and submit:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        <br/>
        <br/>
        <input
          type='submit'
        />
        </form>
      );
    }






}
