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
            date:'11-11-1111',
            gender:'dsa',
            marital:'dsa',
            religion:'dsa',
            work:'dsa',
            education:'asd',
            salary:'123',
            username: '',
            password: '',
            confPassword: '',
            email: '',
            phone: '',
            ktp: '',
            address: '',
            ktpAddress: '',
            province: '',
            city: '',
            village: '',
            district: '',
            postalCode: '',
            placeOfBirth: ''
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
    handlePassword = (text) => {
        this.setState({ password: text })
    }

    handleConfPassword = (text) => {
        this.setState({ confPassword: text })
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    handlePhone = (text) => {
        this.setState({ phone: text })
    }

    handleKTP = (text) => {
        this.setState({ ktp: text })
    }

    handleAddress = (text) => {
        this.setState({ address: text })
    }

    handleKTPAddress = (text) => {
        this.setState({ ktpAddress: text })
    }

    handleProvince = (text) => {
        this.setState({ province: text })
    }

    handleCity = (text) => {
        this.setState({ city: text })
    }

    handleVillage = (text) => {
        this.setState({ village: text })
    }

    handleDistrict = (text) => {
        this.setState({ district: text })
    }

    handlePostalCode = (text) => {
        this.setState({ postalCode: text })
    }

    handlePlaceOfBirth = (text) => {
        this.setState({ placeOfBirth: text })
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
                                <Input
                                    onChangeText={this.handlePassword}
                                    secureTextEntry={true}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Confirm Password</Label>
                                <Input
                                    onChangeText={this.handleConfPassword}
                                    secureTextEntry={true}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    onChangeText={this.handleEmail}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Phone Number</Label>
                                <Input
                                    onChangeText={this.handlePhone}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>KTP Number</Label>
                                <Input
                                    onChangeText={this.handleKTP}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Address</Label>
                                <Input
                                    onChangeText={this.handleAddress}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>KTP Address</Label>
                                <Input
                                    onChangeText={this.handleKTPAddress}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Province</Label>
                                <Input
                                    onChangeText={this.handleProvince}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>City</Label>
                                <Input
                                    onChangeText={this.handleCity}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Village</Label>
                                <Input
                                    onChangeText={this.handleVillage}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>District</Label>
                                <Input
                                    onChangeText={this.handleDistrict}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Postal Code</Label>
                                <Input
                                    onChangeText={this.handlePostalCode}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Place of Birth</Label>
                                <Input
                                    onChangeText={this.handlePlaceOfBirth}
                                />
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