
import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import axios from 'axios'


export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id:'',
        URL_LENGTH:0,
        NUMBER_SPECIAL_CHARACTERS:0,
        CHARSET:0,
        SERVER:'',
        CONTENT_LENGTH:0,
        WHOIS_COUNTRY:'',
        WHOIS_STATEPRO:'',
        WHOIS_REGDATE:'',
        WHOIS_UPDATED_DATE:'',
        TCP_CONVERSATION_EXCHANGE:0,
        DIST_REMOTE_TCP_PORT:0,
        REMOTE_IPS:0,
        APP_BYTES:0,
        SOURCE_APP_PACKETS:0,
        REMOTE_APP_PACKETS:0,
        SOURCE_APP_BYTES:0,
        REMOTE_APP_BYTES:0,
        APP_PACKETS:0,
        DNS_QUERY_TIMES:0,
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
        'id':this.state.id,
        'URL_LENGTH':this.state.URL_LENGTH,
        'NUMBER_SPECIAL_CHARACTERS':this.state.NUMBER_SPECIAL_CHARACTERS,
        'CHARSET':this.state.CHARSET,
        'SERVER':this.state.SERVER,
        'CONTENT_LENGTH':this.state.CONTENT_LENGTH,
        'WHOIS_COUNTRY':this.state.WHOIS_COUNTRY,
        'WHOIS_STATEPRO':this.state.WHOIS_STATEPRO,
        'WHOIS_REGDATE':this.state.WHOIS_REGDATE,
        'WHOIS_UPDATED_DATE':this.state.WHOIS_UPDATED_DATE,
        'TCP_CONVERSATION_EXCHANGE':this.state.TCP_CONVERSATION_EXCHANGE,
        'DIST_REMOTE_TCP_PORT':this.state.DIST_REMOTE_TCP_PORT,
        'REMOTE_IPS':this.state.REMOTE_IPS,
        'APP_BYTES':this.state.APP_BYTES,
        'SOURCE_APP_PACKETS':this.state.SOURCE_APP_PACKETS,
        'REMOTE_APP_PACKETS':this.state.REMOTE_APP_PACKETS,
        'SOURCE_APP_BYTES':this.state.SOURCE_APP_BYTES,
        'REMOTE_APP_BYTES':this.state.REMOTE_APP_BYTES,
        'APP_PACKETS':this.state.APP_PACKETS,
        'DNS_QUERY_TIMES':this.state.DNS_QUERY_TIMES,
        'Type':this.state.Type

      });
    var config = {
      method: 'post',
      url: 'http://localhost:4000/insertdata',
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
                  <Panel.Title componentClass="h3">Insert New Document</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                  <form onSubmit={this.mySubmitHandler}>
                <div className="col-md-4">
                  <p>
                      <input
                      name='id'
                      type= 'text'
                      onChange={this.myChangeHandler}
                      placeholder=' id' /> </p>
                  <p>
                      <input
                      name='URL_LENGTH'
                      type= 'number'
                      onChange={this.myChangeHandler}
                      placeholder='URL_LENGTH'
                      /> </p>
                  <p>
                      <input
                      name='NUMBER_SPECIAL_CHARACTERS'
                      type= 'number'
                      onChange={this.myChangeHandler}
                      placeholder='NUMBER_SPECIAL_CHARACTERS'
                       /> </p>
                  <p>
                      <input
                      name='CHARSET'
                      type='text'
                      onChange={this.myChangeHandler}
                      placeholder='CHARSET'
                      /> </p>

                  <p>
                      <input name='SERVER'
                      type='text'
                      onChange={this.myChangeHandler}
                      placeholder='SERVER'
                       /> </p>
                  <p>
                      <input
                      name='CONTENT_LENGTH'
                      type='number'
                      onChange={this.myChangeHandler}
                      placeholder='CONTENT_LENGTH'
                      /> </p>
                  <p>
                      <input
                      name='WHOIS_COUNTRY'
                      type='text'
                      onChange={this.myChangeHandler}
                      placeholder='WHOIS_COUNTRY'
                      /> </p>
                </div>
                <div className="col-md-4">
                  <p>
                      <input
                      name='WHOIS_STATEPRO'
                      type='text'
                      onChange={this.myChangeHandler}
                      placeholder='WHOIS_STATEPRO '
                      /> </p>

                  <p>
                      <input
                      name='WHOIS_REGDATE'
                      type='text'
                      onChange={this.myChangeHandler}
                      placeholder='WHOIS_REGDATE '
                      /> </p>

                  <p>
                      <input
                      name='WHOIS_UPDATED_DATE'
                      type='text'
                      onChange={this.myChangeHandler}
                      placeholder='WHOIS_UPDATED_DATE '
                      /> </p>

                  <p>
                      <input
                      name='TCP_CONVERSATION_EXCHANGE'
                      type='number'
                      onChange={this.myChangeHandler}
                      placeholder='TCP_CONVERSATION_EXCHANGE '
                      /> </p>
                  <p>
                      <input
                      name='DIST_REMOTE_TCP_PORT'
                      type='number'
                      onChange={this.myChangeHandler}
                      placeholder='DIST_REMOTE_TCP_PORT '
                      /> </p>

                  <p>
                      <input
                      name='REMOTE_IPS'
                      type='number'
                      onChange={this.myChangeHandler}
                      placeholder='REMOTE_IPS '
                      /> </p>
                  <p>
                      <input
                      name='APP_BYTES'
                      type='number'
                      onChange={this.myChangeHandler}
                      placeholder='APP_BYTES '
                      /> </p>
                </div>
                <div className="col-md-4">
                  <p>
                      <input
                      name='SOURCE_APP_PACKETS'
                      type='number'
                      onChange={this.myChangeHandler}
                      placeholder='SOURCE_APP_PACKETS '
                      /> </p>

                  <p>
                      <input
                      name='REMOTE_APP_PACKETS'
                      type='number'
                      onChange={this.myChangeHandler}
                      placeholder='REMOTE_APP_PACKETS '
                      /> </p>
                  <p>
                      <input
                      name='SOURCE_APP_BYTES'
                      type='number'
                      onChange={this.myChangeHandler}
                      placeholder='SOURCE_APP_BYTES '
                      /> </p>
                  <p>
                      <input
                      name='REMOTE_APP_BYTES'
                      type='number'
                      onChange={this.myChangeHandler}
                      placeholder='REMOTE_APP_BYTES '
                      /> </p>
                  <p>
                      <input
                      name='APP_PACKETS'
                      type='number'
                      onChange={this.myChangeHandler}
                      placeholder='APP_PACKETS '
                      /> </p>
                  <p>
                      <input
                      name='DNS_QUERY_TIMES'
                      type='number'
                      onChange={this.myChangeHandler}
                      placeholder='DNS_QUERY_TIMES'
                      /> </p>
                   <p>
                      <input
                      name='Type'
                      type='number'
                      onChange={this.myChangeHandler}
                      placeholder='Type'
                      /> </p>
                </div>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                    <input type='submit' />
                    </p>
                  </form>
                </Panel.Body>
              </Panel>
            </div>
    );
  }
}
