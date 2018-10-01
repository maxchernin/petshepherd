import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
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
          "dogId": 30,
          "address": "789 Fulton Street, Hayes, Montana, 1331",
          "phone": "+1 (872) 438-2380"
        },
        {
          "ownerId": 91,
          "dogId": 73,
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
        },
        {
          "ownerId": 81,
          "dogId": 51,
          "address": "251 Catherine Street, Englevale, Virginia, 2927",
          "phone": "+1 (832) 542-3354"
        },
        {
          "ownerId": 96,
          "dogId": 27,
          "address": "640 Kosciusko Street, Brantleyville, Northern Mariana Islands, 4556",
          "phone": "+1 (924) 484-2785"
        },
        {
          "ownerId": 18,
          "dogId": 12,
          "address": "492 Cornelia Street, Nettie, Alaska, 9211",
          "phone": "+1 (862) 562-3230"
        },
        {
          "ownerId": 95,
          "dogId": 75,
          "address": "154 Congress Street, Kenvil, Iowa, 6403",
          "phone": "+1 (802) 531-2809"
        }
      ];
      let stateObj = {};

        if(props.location.state){
            stateObj = props.location.state.data;
          }
        stateObj.ownerInfo = {
          address: '',
          phone: ''
        };
        // stateObj.name = ''; //todo is needed ?
          
      this.state = stateObj;
    }

    componentDidMount() {
        // console.log(this.props.match.params.chipId)

        //get ownertodo info
        let ownerTodogMatch = this.ownerToDog.find(owner => owner.dogId === parseInt(this.props.match.params.chipId) );
        // console.log(ownerTodogMatch);
        if(this.props.location.state && this.props.location.state.data){
            // continue with data render
        }  else {
            //get from server
        }
        this.setState({ownerInfo: ownerTodogMatch || {}})
    }
  
    render() {
    const {type, name, picture, breed, dateOfBirth, sex, color, bloodType, weight, numOfVaccines, registered, contactNumber} = this.state;
    const {address, phone} = this.state.ownerInfo;
      console.log(this.state);
      return ( 
        <div>
          <Link to="/"><Icon name="reply"/>Back to search</Link>
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
        </div>
      )
    }
  }

  export default Dog;