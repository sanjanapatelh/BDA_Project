import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'
import InsertForm from './InsertForm';
import DeleteForm from './DeleteForm';
import Graph from './Graph';
import UpdateForm from './UpdateForm';
import ReadAllForm from './ReadAllForm';
  import {Link } from "react-router-dom";

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response})
    })
  };

  render() {
    if (!this.state.customerDetails)
      return (<p>Loading Data</p>)
    if(this.props.val==1)
      return(<InsertForm/>)
    else if (this.props.val==2)
      return(<DeleteForm/>)
    else if(this.props.val==3)
      return(<ReadAllForm/>)
    else if(this.props.val==4)
      return(<UpdateForm/>)
    else if(this.props.val==5)
      return(

          <div className="customerdetails">
            <Panel bsStyle="info" className="centeralign">
              <Panel.Heading>
                <Panel.Title componentClass="h3">Graph Analyis</Panel.Title>
              </Panel.Heading>
              <Panel.Body>
              <Link to="/graph"><button>
               Click to get graphs.......
             </button>
             </Link>
              </Panel.Body>
            </Panel>
          </div>
      )


  }
}
