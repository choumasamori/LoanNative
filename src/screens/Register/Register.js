import React, { Component } from 'react';
import { Container, Item, Content, Form, Input, Button, Label, Card, CardItem, Body, Text, Picker, Icon, Left, Right} from 'native-base';
import DatePicker from 'react-native-datepicker';

export class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      genderOptions:null,
      maritalOptions:null,
      religionOptions:null,
      workOptions:null,
      educationOptions:null,
      salaryRangeOptions:null,
      date:'1996-10-15',
      gender:'male',
      marital:'married',
      religion:'christianity',
      work:'pns',
      education:'sd',
      salary:'<3000000',
        username: '',
    }
  }
  componentDidMount(){
    fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/sys/options', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				}
	}).then((results) => results.json()).then((data)=>{
    let options =  data.genderOptions.map((option, i)=>{
      return(
              <Picker.Item label={option} value={option} key={i}/>
      );
    });
    this.setState({
      genderOptions:options,
    });
  }).catch((error)=>{console.log(error)})

  fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/sys/options', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				}
	}).then((results) => results.json()).then((data)=>{
    let options =  data.maritalOptions.map((option, i)=>{
      return(
              <Picker.Item label={option} value={option} key={i}/>
      );
    });
    this.setState({
      maritalOptions:options,
    });
  }).catch((error)=>{console.log(error)})

  fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/sys/options', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
    }).then((results) => results.json()).then((data)=>{
    let options =  data.religionOptions.map((option, i)=>{
      return(
              <Picker.Item label={option} value={option} key={i}/>
      );
    });
    this.setState({
      religionOptions:options,
    });
    }).catch((error)=>{console.log(error)})

    fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/sys/options', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				}
	}).then((results) => results.json()).then((data)=>{
    let options =  data.workOptions.map((option,i)=>{
      return(
              <Picker.Item label={option} value={option} key={i}/>
      );
    });
    this.setState({
      workOptions:options,
    });
  }).catch((error)=>{console.log(error)})

  fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/sys/options', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				}
	}).then((results) => results.json()).then((data)=>{
    let options =  data.educationOptions.map((option,i)=>{
      return(
              <Picker.Item label={option} value={option} key={i}/>
      );
    });
    this.setState({
      educationOptions:options,
    });
  }).catch((error)=>{console.log(error)})
  fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/sys/options', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				}
	}).then((results) => results.json()).then((data)=>{
    let options =  data.salaryRangeOptions.map((option,i)=>{
      return(
              <Picker.Item label={option} value={option} key={i}/>
      );
    });
    this.setState({
      salaryRangeOptions:options,
    });
  }).catch((error)=>{console.log(error)})
  }

    handleUsername = (text) => {
        this.setState({ username: text })
    }

    render() {
      return (
          <Container>
            <Content scrollEnabled contentContainerStyle={{justifyContent: 'center',alignItems: 'center', marginTop:'10%', marginBottom:'10%'}}>
              <Card style={{width:'80%',height:'auto',paddingTop:'5%',paddingBottom:'10%'}}>
                <Form>
                  <Item floatingLabel>
                    <Label>Username</Label>
                     <Input
                         onChangeText={this.handleUsername}
                     />
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
                      maxDate="2000-12-31"
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
                    onValueChange={(value)=>this.setState({gender:value})}
                  >
              {this.state.genderOptions}
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
                    onValueChange={(value)=>this.setState({marital:value})}
                  >
              {this.state.maritalOptions}
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
                    onValueChange={(value)=>this.setState({religion:value})}
                  >
              {this.state.religionOptions}
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
                    onValueChange={(value)=>this.setState({work:value})}
                  >
              {this.state.workOptions}
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
                    onValueChange={(value)=>this.setState({education:value})}
                  >
              {this.state.educationOptions}
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
                    onValueChange={(value)=>this.setState({salary:value})}
                  >
              {this.state.salaryRangeOptions}
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