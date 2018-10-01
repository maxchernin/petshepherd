import React, { Component } from 'react';
import { Input, Card, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class SearchPage extends Component {
    constructor(props){ 
        super(props);
        this.dogDB = [
          {
            "_chipId": "5bafde56b55be3796eb835b5",
            "chipId": '420',
            "type": "Dog",
            "name": 'Alaska Chipopo Fluffskin',
            "picture": "https://images.dog.ceo/breeds/husky/n02110185_4522.jpg",
            "breed": "Siberian Husky" ,
            "sex": "F",
            "color": "white",
            "dateOfBirth": "2016-02-06",
            "bloodType": "DEA",
            "weight": 30,
            "numOfVaccines": "",
            "lastChange": "",
            "owner": "0x23054",
            "contactNumber": "+1 (915) 518-3554",
            "address": "200 Eaton Court, Riegelwood, Palau, 3093",
            "registered": "2017-07-25",
            "ownerId": 1
          },
          {
            "_chipId": "5bb1e46d0b1b4f970b13b99f",
            "chipId": 30,
            "type": "dog",
            "name": "Francine",
            "picture": "https://images.dog.ceo/breeds/malinois/n02105162_575.jpg",
            "breed": "Malinois",
            "sex": "M",
            "color": "gray",
            "dateOfBirth": "2016-02-28",
            "bloodType": "DEA",
            "weight": 60,
            "numOfVaccines": "",
            "lastChange": "2018-02-22",
            "owner": "0x43808",
            "contactNumber": "+1 (823) 470-3060",
            "address": "981 Radde Place, Madaket, Hawaii, 6875",
            "registered": "2017-11-14",
            "ownerId": 2
          },
          {
            "_chipId": "5bb1e46d58bd5beabcb5ddfd",
            "chipId": 73,
            "type": "dog",
            "name": "Geraldine",
            "picture": "https://images.dog.ceo/breeds/malinois/n02105162_6106.jpg",
            "breed": "Malinois",
            "sex": "M",
            "color": "gray",
            "dateOfBirth": "2016-01-07",
            "bloodType": "DEA+",
            "weight": 42,
            "numOfVaccines": "",
            "lastChange": "2018-09-07",
            "owner": "0x51241",
            "contactNumber": "+1 (999) 589-3522",
            "address": "668 Pierrepont Street, Esmont, Maine, 2289",
            "registered": "2018-01-20",
            "ownerId": 3
          },
          {
            "_chipId": "5bb1e46de30482f3952a6559",
            "chipId": 11,
            "type": "dog",
            "name": "Stuart",
            "picture": "https://images.dog.ceo/breeds/doberman/n02107142_3236.jpg",
            "breed": "Doberman",
            "sex": "F",
            "color": "black",
            "dateOfBirth": "2016-02-11",
            "bloodType": "DEA+",
            "weight": 50,
            "numOfVaccines": "",
            "lastChange": "2018-08-24",
            "owner": "0x92939",
            "contactNumber": "+1 (904) 477-3197",
            "address": "412 Losee Terrace, Omar, Nevada, 4675",
            "registered": "2018-03-11",
            "ownerId": 4
          },
          {
            "_chipId": "5bb1e46d252d47147a36fff8",
            "chipId": 53,
            "type": "dog",
            "name": "Marsha",
            "picture": "https://images.dog.ceo/breeds/malinois/n02105162_6501.jpg",
            "breed": "Malinois",
            "sex": "M",
            "color": "white",
            "dateOfBirth": "2016-02-24",
            "bloodType": "DEA+",
            "weight": 38,
            "numOfVaccines": "",
            "lastChange": "2018-06-05",
            "owner": "0x35242",
            "contactNumber": "+1 (902) 509-2962",
            "address": "324 Bancroft Place, Cumminsville, Virgin Islands, 7274",
            "registered": "2016-10-05",
            "ownerId": 5
          },
          {
            "_chipId": "5bb1e46d0aa776fb4a5b21c7",
            "chipId": 51,
            "type": "dog",
            "name": "Allison",
            "picture": "https://images.dog.ceo/breeds/doberman/n02107142_3575.jpg",
            "breed": "Doberman",
            "sex": "M",
            "color": "brown",
            "dateOfBirth": "2016-02-29",
            "bloodType": "DEA+",
            "weight": 10,
            "numOfVaccines": "",
            "lastChange": "2018-09-08",
            "owner": "0x113450",
            "contactNumber": "+1 (821) 498-2171",
            "address": "693 Blake Avenue, Savage, Alaska, 606",
            "registered": "2018-04-05",
            "ownerId": 6
          },
          {
            "_chipId": "5bb1e46d43a16d3a7d5d96b8",
            "chipId": 27,
            "type": "dog",
            "name": "Lauri",
            "picture": "https://images.dog.ceo/breeds/malinois/n02105162_1757.jpg",
            "breed": "Malinois",
            "sex": "M",
            "color": "brown",
            "dateOfBirth": "2016-02-03",
            "bloodType": "DEA",
            "weight": 11,
            "numOfVaccines": "",
            "lastChange": "2018-06-23",
            "owner": "0x26036",
            "contactNumber": "+1 (954) 537-3343",
            "address": "188 Sunnyside Court, Venice, Louisiana, 4567",
            "registered": "2016-08-10",
            "ownerId": 7
          },
          {
            "_chipId": "5bb1e46dcd3d7d18551ee528",
            "chipId": 12,
            "type": "dog",
            "name": "Bush",
            "picture": "https://images.dog.ceo/breeds/malinois/n02105162_5370.jpg",
            "breed": "Malinois",
            "sex": "M",
            "color": "white",
            "dateOfBirth": "2016-02-11",
            "bloodType": "DEA+",
            "weight": 6,
            "numOfVaccines": "",
            "lastChange": "2018-07-27",
            "owner": "0x74957",
            "contactNumber": "+1 (804) 481-3165",
            "address": "298 Danforth Street, Sanders, South Dakota, 8508",
            "registered": "2018-08-05",
            "ownerId": 8
          },
          {
            "_chipId": "5bb1e46de5c665cfd009703e",
            "chipId": 75,
            "type": "dog",
            "name": "Ina",
            "picture": "https://images.dog.ceo/breeds/doberman/n02107142_14813.jpg",
            "breed": "Doberman",
            "sex": "F",
            "color": "gray",
            "dateOfBirth": "2016-02-27",
            "bloodType": "DEA+",
            "weight": 13,
            "numOfVaccines": "",
            "lastChange": "2018-02-02",
            "owner": "0x57693",
            "contactNumber": "+1 (906) 522-2382",
            "address": "116 Harman Street, Staples, New York, 6108",
            "registered": "2018-04-07",
            "ownerId": 9
          },
          {
            "_chipId": "5bb1e46d47fc236b8af27054",
            "chipId": 92,
            "type": "dog",
            "name": "Boone",
            "picture": "https://images.dog.ceo/breeds/germanshepherd/n02106662_1637.jpg",
            "breed": "German Shepherd",
            "sex": "F",
            "color": "gray",
            "dateOfBirth": "2016-01-21",
            "bloodType": "DEA",
            "weight": 27,
            "numOfVaccines": "",
            "lastChange": "2018-05-29",
            "owner": "0x54954",
            "contactNumber": "+1 (812) 534-2621",
            "address": "992 Humboldt Street, Tonopah, Florida, 1094",
            "registered": "2016-07-09",
            "ownerId": 10
          }
        ];
        let chips = [];
        let indexes = this.dogDB.map(dog => {
          chips.push(dog.chipId);
        })
        this.state = {
           inputValue : '',
          result: null
        }
      }
    
      handleInputChange = e => {
        this.setState({inputValue: e.target.value})
      }
    
      handleSearch = () => {
        //TODO get chip by id
        let apiCallbackResult = {
          "_chipId": "5bafde56b55be3796eb835b5",
          "chipId": '420',
          "type": "Dog",
          "name": 'Alaska Chipopo Fluffskin',
          "picture": "https://images.dog.ceo/breeds/husky/n02110185_4522.jpg",
          "breed": "Siberian Husky" ,
          "sex": "F",
          "color": "white",
          "dateOfBirth": "2016-02-06",
          "bloodType": "DEA",
          "weight": 30,
          "numOfVaccines": "",
          "lastChange": "",
          "owner": "0x23054",
          "contactNumber": "+1 (915) 518-3554",
          "address": "200 Eaton Court, Riegelwood, Palau, 3093",
          "registered": "2017-07-25"
        }
        let found  = this.dogDB.find(dog => dog.chipId == this.state.inputValue);
        // if(this.state.inputValue === apiCallbackResult.chipId ){
        if(found){
          // this.setState({result: apiCallbackResult });
          this.setState({result: found });
        } else{
          this.setState({result: null})
        }
      }
  
    render() {
    const {result} = this.state;
    let isLoading = false;
    let isValid = true;
  
      return ( 
        <div>
            Enter Chip id:
            <Input loading={isLoading} error={!isValid}
                    icon='search'
                    placeholder="e.g. 420051151234"
                    onChange={this.handleInputChange}
                    onKeyPress={e => {
                    if(e.key === 'Enter') {
                        this.handleSearch();
                    }
            }}/>
            { result !== null ?
            <Link to={{pathname: "/"+result.type+"/"+result.chipId, state: {data: result}}}>
            <Card
            style={{margin: '5px auto'}}
            image={result.picture}
            header={result.name}
            meta={result.breed}
            description={  <span><Icon size="big" name={result.sex === 'M' ? 'man' : 'woman'}/>{result.sex}</span>}
            extra="Owner ? todo"
            >
            </Card> 
            </Link>
            : ''
            }

          <div>
            <p>Available demo dogs</p>
            {this.dogDB.map(dog => {
              return (
                <div>
                  <Link to={{pathname: "/"+dog.type+"/"+dog.chipId, state: {data: dog}}}>
                    {dog.chipId} - {dog.name}
                  </Link>
              </div>)
          })
          }
          </div>
        </div>
      )
    }
}

  export default SearchPage;