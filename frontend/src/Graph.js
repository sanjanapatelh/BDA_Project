
import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios'


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',

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
        '': ''
      });
    var config = {
      method: 'delete',
      url: 'http://localhost:4000/remove',
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
                  <Panel.Title componentClass="h3">Number of Malicious and benign urls</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <img className="img-fluid"
                       src={`${process.env.PUBLIC_URL}/images/1.jpeg`}
                       width="800"
                       height="500"
                       />

                </Panel.Body>

                <Panel.Heading>
                  <Panel.Title componentClass="h3">Country with number of malicious and benign urls</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <img className="img-fluid"
                       src={`${process.env.PUBLIC_URL}/images/2.jpeg`}
                       width="800"
                       height="500"
                       />

                </Panel.Body>

                <Panel.Heading>
                  <Panel.Title componentClass="h3">Summary of the remote ips which are connected to particular url</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <img className="img-fluid"
                       src={`${process.env.PUBLIC_URL}/images/3.jpeg`}
                       width="800"
                       height="500"
                       />

                </Panel.Body>

                <Panel.Heading>
                  <Panel.Title componentClass="h3">Scatter plot </Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <img className="img-fluid"
                       src={`${process.env.PUBLIC_URL}/images/4.jpeg`}
                       width="800"
                       height="500"
                       />

                </Panel.Body>

                <Panel.Body>
                  <img className="img-fluid"
                       src={`${process.env.PUBLIC_URL}/images/5.jpeg`}
                       width="800"
                       height="500"
                       />

                </Panel.Body>
              </Panel>
            </div>
    );
  }
}
