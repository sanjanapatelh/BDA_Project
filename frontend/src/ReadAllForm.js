import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import CustomerDetails from './CustomerDetails'
import axios from 'axios'

export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 1
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    axios.get('http://localhost:4000/getData').then(response => {
      this.setState({customerList: response})
    })
  };

  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)

    return (

      <div className="customerdetails">


      <div className="addmargin">
      <div className>
        {

          this.state.customerList.data.map(customer => <Panel bsStyle="info" key={customer.id} className="centeralign">
          <Panel.Heading>
            <Panel.Title componentClass="h3">{customer.id}</Panel.Title>
          </Panel.Heading>
            <Panel.Body>

            <div className="col-md-4">
            <Panel bsStyle="info" className="centeralign">
              <Panel.Body>
              <p>id                        :        {customer.id}</p>
              <p>Type                      :      {customer.Type}</p>
              <p>CHARSET                   :         {customer.CHARSET}</p>
              <p>SERVER                    :         {customer.SERVER}</p>
              <p>URL_LENGTH                :        {customer.URL_LENGTH}</p>
              <p>APP_PACKETS               :         {customer.APP_PACKETS}</p>
              <p>TCP_CONVERSATION_EXCHANGE :      {customer.TCP_CONVERSATION_EXCHANGE}</p>
              </Panel.Body>
                  </Panel>
            </div>


            <div className="col-md-4">
            <Panel bsStyle="info" className="centeralign">
              <Panel.Body>
              <p>DNS_QUERY_TIMES           :      {customer.DNS_QUERY_TIMES}</p>
              <p>CONTENT_LENGTH            :      {customer.CONTENT_LENGTH}</p>
              <p>SOURCE_APP_BYTES          :      {customer.SOURCE_APP_BYTES}</p>
              <p>REMOTE_APP_BYTES          :      {customer.REMOTE_APP_BYTES}</p>
              <p>SOURCE_APP_PACKETS        :      {customer.SOURCE_APP_PACKETS}</p>
              <p>REMOTE_APP_PACKETS        :      {customer.REMOTE_APP_PACKETS}</p>

              <p>NUMBER_SPECIAL_CHARACTERS :      {customer.NUMBER_SPECIAL_CHARACTERS}</p>

              </Panel.Body>
                  </Panel>
            </div>
            <div className="col-md-4">
            <Panel bsStyle="info" className="centeralign">
              <Panel.Body>
              <p>REMOTE_IPS                :      {customer.REMOTE_IPS}</p>
              <p>APP  BYTES                 :      {customer.APP_BYTES}</p>
              <p>WHOIS_COUNTRY             :        {customer.WHOIS_COUNTRY}</p>
              <p>WHOIS_STATEPRO           :      {customer.WHOIS_STATEPRO}</p>
              <p>DIST_REMOTE_TCP_PORT      :      {customer.DIST_REMOTE_TCP_PORT}</p>
              <p>WHOIS_UPDATED_DATE        :      {customer.WHOIS_UPDATED_DATE}</p>
              <p>WHO IS REGDATE             :      {customer.WHOIS_REGDATE}</p>


              </Panel.Body>
                  </Panel>
            </div>

            </Panel.Body>
          </Panel>)
        }
      </div>

    </div>

</div>

  )
  }

}
