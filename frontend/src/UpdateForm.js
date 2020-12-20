
import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios'


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      Type:0

    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  mySubmitHandler = (event)=>{
      var axios = require('axios');
      var qs = require('qs');
      var data = qs.stringify({
        'id': this.state.id,
        'Type': this.state.Type
      });
      var config = {
        method: 'put',
        url: 'http://localhost:4000/update',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }


  render() {
    return (

            <div className="customerdetails">
              <Panel bsStyle="info" className="centeralign">
                <Panel.Heading>
                  <Panel.Title componentClass="h3">Update Document</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <form onSubmit={this.mySubmitHandler}>
                  <div className="col-md-4">
                    <p>
                    <input
                      type='text'
                      name='id'
                      onChange={this.myChangeHandler}
                      placeholder="Enter Id"
                    />
                    </p>
                   </div>
                   <div className="col-md-4">
                    <p>
                    <input
                      type='number'
                      name='Type'
                      onChange={this.myChangeHandler}
                      placeholder="Enter Type to Update"
                    />
                    </p>
                    </div>
                   <div className="col-md-4">
                    <p>
                    <input type='submit' />
                    </p>
                   </div>
                  </form>
                </Panel.Body>
              </Panel>
            </div>
    );
  }
}
