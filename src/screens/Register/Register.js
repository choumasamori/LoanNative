import React, { Component } from 'react';
import { Container, Item, Content, Form, Input, Button, Label, Card, CardItem, Body, Text, Picker, Icon, Left, Right} from 'native-base';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';

export class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      date:'',
      gender: [],
      marital:'',
      religion:'',
      work:'',
      education:'',
      salary:'',
    }
  }

  onValueChange1(value) {
    this.setState({
      gender: value
    });
  }
  onValueChange2(value) {
    this.setState({
      marital: value
    });
  }
  onValueChange3(value) {
    this.setState({
      religion: value
    });
  }
  onValueChange4(value) {
    this.setState({
      work: value
    });
  }
  onValueChange5(value) {
    this.setState({
      education: value
    });
  }
  onValueChange6(value) {
    this.setState({
      salary: value
    });
  }

    async getOptions() {
        axios.get('http://wf.dev.neo-fusion.com/tdfp2p/ws/sys/options')
            .then(response => response.json())
            .then(data => {
                let options = data.map((item) => {
                    console.log(item.genderOptions);
                })
            })
    }

    componentWillMount() {
      this.getOptions();
    }




    render() {
      return (
          <Container>
            <Content scrollEnabled contentContainerStyle={{justifyContent: 'center',alignItems: 'center', marginTop:'10%', marginBottom:'10%'}}>
              <Card style={{width:'80%',height:'auto',paddingTop:'5%',paddingBottom:'10%'}}>
                <Form>
                  <Item floatingLabel>
                    <Label>{this.state.gender}</Label>
                     <Input />
                  </Item>

                  <Item floatingLabel>
                    <Label>Password</Label>
                      <Input secureTextEntry={true} />
                  </Item>

                  <Item floatingLabel>
                    <Label>Confirm Password</Label>
                      <Input secureTextEntry={true} />
                  </Item>

                  <Item floatingLabel>
                    <Label>Email</Label>
                     <Input />
                  </Item>

                  <Item floatingLabel>
                    <Label>Phone Number</Label>
                     <Input />
                  </Item>

                  <Item floatingLabel>
                    <Label>KTP Number</Label>
                     <Input />
                  </Item>

                  <Item floatingLabel>
                    <Label>Address</Label>
                     <Input />
                  </Item>

                  <Item floatingLabel>
                    <Label>KTP Address</Label>
                     <Input />
                  </Item>

                  <Item floatingLabel>
                    <Label>Province</Label>
                     <Input />
                  </Item>

                  <Item floatingLabel>
                    <Label>City</Label>
                     <Input />
                  </Item>

                  <Item floatingLabel>
                    <Label>Village</Label>
                     <Input />
                  </Item>

                  <Item floatingLabel>
                    <Label>District</Label>
                     <Input />
                  </Item>

                  <Item floatingLabel>
                    <Label>Postal Code</Label>
                     <Input />
                  </Item>

                  <Item floatingLabel>
                    <Label>Place of Birth</Label>
                     <Input />
                  </Item>

                  <Item>
                    <Left>
                      <Label>Date of Birth</Label>
                    </Left>
                      <DatePicker
                          style={{width: 200}}
                          date={this.state.date}
                          mode="date"
                          placeholder="Select Date"
                          format="YYYY-MM-DD"
                          minDate="1960-01-01"
                          maxDate="2018-12-31"
                          confirmBtnText="Confirm"
                          cancelBtnText="Cancel"
                          customStyles={{
                            dateIcon: {
                              position: 'absolute',
                              left: 0,
                              top: 4,
                              marginLeft: 0
                            },
                            dateInput: {
                              marginLeft: 36
                            }
                          }}
                          onDateChange={(date) => {this.setState({date: date})}}
                        />
                  </Item>

                  <CardItem>
                    <Left>
                      <Label>Gender</Label>
                    </Left>
                      <Picker
                        mode="dropdown"
                        iosHeader="Gender"
                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                        style={{ width: undefined }}
                        selectedValue={this.state.gender}
                        onValueChange={this.onValueChange1.bind(this)}
                      >
                      <Picker.Item label="Male" value="male" />
                      <Picker.Item label="Female" value="female" />
                      </Picker>
                  </CardItem>

            <CardItem>
                <Left>
                  <Label>Marital Status</Label>
                </Left>
                <Picker
                    mode="dropdown"
                    iosHeader="Marital Status"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.marital}
                    onValueChange={this.onValueChange2.bind(this)}
                >
                <Picker.Item label="Married" value="married" />
                <Picker.Item label="Not Married" value="notMarried" />
                <Picker.Item label="Divorced" value="divorced" />
                </Picker>
            </CardItem>

            <CardItem>
                  <Left>
                    <Label>Religion</Label>
                  </Left>
            <Picker
                    mode="dropdown"
                    iosHeader="Religion"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.religion}
                    onValueChange={this.onValueChange3.bind(this)}
                  >
              <Picker.Item label="Christianity" value="christianity" />
              <Picker.Item label="Buddhist" value="buddhist" />
              <Picker.Item label="Islamic" value="islamic" />
              <Picker.Item label="Catholic" value="catholic" />
              <Picker.Item label="Konghucu" value="konghucu" />
            </Picker>
            </CardItem>

            <CardItem>
                  <Left>
                    <Label>Work</Label>
                  </Left>
            <Picker
                    mode="dropdown"
                    iosHeader="Work"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.work}
                    onValueChange={this.onValueChange4.bind(this)}
                  >
              <Picker.Item label="PNS" value="pns" />
              <Picker.Item label="BUMN" value="bumn" />
              <Picker.Item label="Swasta" value="swasta" />
              <Picker.Item label="Wiraswasta" value="wiraswasta" />
              <Picker.Item label="Lain-lain" value="lainlain" />
            </Picker>
            </CardItem>

            <CardItem>
                  <Left>
                    <Label>Education</Label>
                  </Left>
            <Picker
                    mode="dropdown"
                    iosHeader="education"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.education}
                    onValueChange={this.onValueChange5.bind(this)}
                  >
              <Picker.Item label="SD" value="sd" />
              <Picker.Item label="SMP" value="smp" />
              <Picker.Item label="SMA" value="sma" />
              <Picker.Item label="Diploma" value="diploma" />
              <Picker.Item label="Sarjana" value="sarjana" />
              <Picker.Item label="Master" value="master" />
              <Picker.Item label="Doctoral" value="doctoral" />
            </Picker>
            </CardItem>

            <CardItem>
                  <Left>
                    <Label>Salary</Label>
                  </Left>
            <Picker
                    mode="dropdown"
                    iosHeader="salary"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.salary}
                    onValueChange={this.onValueChange6.bind(this)}
                  >
              <Picker.Item label="< Rp.3.000.000" value="<3000000" />
              <Picker.Item label="Rp 3.000.000 - Rp 5.000.000" value="3000000-5000000" />
              <Picker.Item label="Rp 5.000.000 - Rp 10.000.000" value="5000000-10000000" />
              <Picker.Item label="> Rp 10.000.000" value=">10000000" />
            </Picker>
            </CardItem>
                </Form>
              </Card>
            </Content>
          </Container>
      );
    }
  }
  export default Register;