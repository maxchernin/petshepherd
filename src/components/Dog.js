import React, { Component } from 'react';
import { Tab, Card, Icon, Image, Table } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class Dog extends Component {
    constructor(props) {
      super(props);
      this.ownerToDog = [
        {
          "ownerId": 29,
          "dogId": 420,
          "address": "643 Columbia Place, Muir, New York, 5076",
          "phone": "+1 (833) 519-2542"
        },
        {
          "ownerId": 14,
          "dogId": 72,
          "address": "789 Fulton Street, Hayes, Montana, 1331",
          "phone": "+1 (872) 438-2380"
        },
        {
          "ownerId": 91,
          "dogId": 27,
          "address": "722 Strong Place, Toftrees, Utah, 3746",
          "phone": "+1 (893) 541-3618"
        },
        {
          "ownerId": 26,
          "dogId": 11,
          "address": "440 Falmouth Street, Harviell, Pennsylvania, 8116",
          "phone": "+1 (854) 587-3854"
        },
        {
          "ownerId": 31,
          "dogId": 53,
          "address": "686 Saratoga Avenue, Westphalia, Palau, 3477",
          "phone": "+1 (852) 500-2770"
        }
      ];
      // this.dogToMedTreat = 
      let stateObj = {};

        if(props.location.state){
            stateObj = props.location.state.data;
          }
        stateObj.ownerInfo = {
          address: '',
          phone: ''
        };
        stateObj.activeIndex = 1;
        // stateObj.name = ''; //todo is needed ?
          
      this.state = stateObj;
    }

    componentDidMount() {
        // console.log(this.props.match.params.chipId)

        //get ownertodo info
        let ownerTodogMatch = this.ownerToDog.find(owner => owner.dogId === parseInt(this.props.match.params.chipId, 10) );
        // console.log(ownerTodogMatch);
        if(this.props.location.state && this.props.location.state.data){
            // continue with data render
        }  else {
            //get from server
        }
        this.setState({ownerInfo: ownerTodogMatch || {}})
    }

    // handleTabChange = e => {this.setState({activeIndex: e.target.value})};
    handleTabChange = (e, { activeIndex }) => this.setState({ activeIndex })
  
    render() {
    const { activeIndex, name, picture, breed, dateOfBirth, sex, color, bloodType, weight, numOfVaccines, registered} = this.state;
    const {address, phone} = this.state.ownerInfo;
    const panes = [
      { menuItem: {key: 'details', icon: 'info circle', content: name + "'s Details"}, render: () => {
        return (<Tab.Pane loading={!this.state.name}>
            <Card fluid>
              <h1>{name}</h1>
              <h4>{breed}</h4>
            <Image size="medium" centered src={picture} />
            <Card.Content>
              <Card.Meta>
                <span>Date of birth: {dateOfBirth} {/* parse with moment*/}</span>
              </Card.Meta>
              <Card.Description>
                <p>Registered: {registered}</p>
                <span>Sex: {sex}<Icon size="big" name={sex === 'M' ? 'man' : 'woman'}/></span>
                <p>Fur color: {color}</p>
                <p>Weight: {weight} kg</p>
                <p>Blood Type: {bloodType}</p>
                <p>Vaccines recieved: {numOfVaccines}</p>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <p>{address}</p>
              <p>{phone}</p>
              </Card.Content>
            </Card>
        </Tab.Pane>) }
      },
      {
        menuItem: {key: 'records', icon: 'medkit', content: "Medical records"},
        render: () => {
          return (<div>
            <Tab.Pane>
              <h1>{name}</h1>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell rowSpan='2'>Known Allergies and Symptoms</Table.HeaderCell>
                    {/* <Table.HeaderCell rowSpan='2'>Handling Vet</Table.HeaderCell> */}
                    {/* <Table.HeaderCell colSpan='2'>Vaccines</Table.HeaderCell> */}
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                      <Table.Cell>Allergy A</Table.Cell>
                    </Table.Row>
                  <Table.Row>
                    <Table.Cell>Allergy B</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
          
              <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell rowSpan="1" colSpan="5">
                  Treatments
                  </Table.HeaderCell>
                </Table.Row>
      <Table.Row>
        <Table.HeaderCell rowSpan='2'>Date</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Handling Vet</Table.HeaderCell>
        {/* <Table.HeaderCell rowSpan='2'>Vaccines</Table.HeaderCell> */}
        <Table.HeaderCell colSpan='2'>Vaccines</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Description</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Rabies</Table.HeaderCell>
        <Table.HeaderCell>Park Worm</Table.HeaderCell>
        {/* <Table.HeaderCell>Python</Table.HeaderCell> */}
        {/* <Table.HeaderCell>Python</Table.HeaderCell> */}
      </Table.Row>
    </Table.Header>
     <Table.Body>
     <Table.Row>
        <Table.Cell>20/4/2018</Table.Cell>
        <Table.Cell>DR. Jhon Wick</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
        desc
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>20/4/2017</Table.Cell>
        <Table.Cell>DR. Jhon Wick</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell textAlign='center'>
          {/* <Icon color='green' name='checkmark' size='large' /> */}
        </Table.Cell>
        <Table.Cell textAlign='center'>
        desc
        </Table.Cell>
      </Table.Row>
    </Table.Body>
              </Table>
          </Tab.Pane>
          </div>)
          }
    }
    ]  
    console.log(this.state);
      return ( 
        <div >
          {/* <Link to="/"><Icon name="reply"/>Back to search</Link> */}
          <Tab 
          activeIndex={activeIndex} 
          menu={{color: 'olive', inverted: true, secondary: true, pointing: true}} 
          panes={panes}
          onTabChange={this.handleTabChange}
          />
          <Link to="/"><Icon name="reply"/>Back to search</Link>
        </div>
      )
    }
  }

  export default Dog;