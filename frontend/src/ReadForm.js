import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import Details from './Details'
import axios from 'axios'

export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: ''
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  myChangeHandler(event) {
    console.log(event)
    this.setState({i: event.target.value})
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    axios.get('assets/samplejson/customerlist.json').then(response => {
      this.setState({customerList: response})
    })
  };

  mySubmitHandler(){
      console.log(this.state.id)
  }

  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">

      <form onSubmit={this.mySubmitHandler}>
      <div className="col-md-6">
        <p>
        <input
          type='text'
          name='id'
          onChange={this.setState({selectedCustomer:id.value})}
          placeholder="Enter Id"
        />
        </p>
        </div>
        <div className="col-md-6">
        <p>
        <input type='submit' />
        </p>
        </div>
      </form>

      </div>
      <div className="col-md-6">
        <Details val={this.state.selectedCustomer}/>
      </div>
    </div>)
  }

}
