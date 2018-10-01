import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import {Link} from 'react-router-dom';


class Dog extends Component {
    constructor(props) {
      super(props);
      let stateObj = {
          name: ''
      }
        if(props.location.state){
            stateObj = props.location.state.data;
        }
      this.state = stateObj;
    }

    componentWillMount() {
        if(this.props.location.state && this.props.location.state.data){
            // continue with data render
        }  else {
            //get from server
        }
    }
  
    render() {
    const {type, name, picture, breed, dateOfBirth, sex, color, bloodType, weight, numOfVaccines, registered, contactNumber, address} = this.state;
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
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
        </div>
      )
    }
  }

  export default Dog;