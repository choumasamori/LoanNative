import React, { Component } from 'react';
import { Container, Item, Content, Form, Input, Button, Label, Card, CardItem, Body, Text, Picker, Icon, Left, Right} from 'native-base';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import { tryRegisterImage } from "../../store/actions";

import { tryRegisterData } from "../../store/actions";

import { Spinner } from './../../components/common/index';


import { connect } from 'react-redux';

var options = {
    title: 'Pick an Image'
};
export class Register extends Component {
    static navigatorStyle = {
        navBarHidden: true,
    }

    constructor(props){
        super(props);
        this.state={
            genderOptions:null,
            maritalOptions:null,
            religionOptions:null,
            workOptions:null,
            educationOptions:null,
            salaryRangeOptions:null,
            fullname: 'asw',
            date:'',
            gender:'Pria',
            marital:'Belum Menikah',
            religion:'Islam',
            work:'PNS',
            education:'SD',
            salary:'< Rp 3.000.000',
            username: 'asw',
            password: 'asw',
            confPassword: 'asw',
            email: 'asw@m.com',
            phone: '321123',
            ktpNumber: '32112',
            address: 'dsadsa',
            ktpAddress: 'dsaeq',
            province: 'dsadqwe',
            city: 'dsaq',
            village: 'dsae',
            district: 'dsae',
            postalCode: '123',
            placeOfBirth: 'dsad',
            workArea: 'adsa',
            coupleName: 'dsas',
            numDependts: '12',
            npwpNumber: '12321',

            imageFilenameSalary: '',
            imageTypeSalary: '',
            imageUriSalary: '',

            imageFilenameKtp: '',
            imageTypeKtp: '',
            imageUriKtp: '',

            imageFilenameNpwp: '',
            imageTypeNpwp: '',
            imageUriNpwp: '',

            imageFilenamePic: '',
            imageTypePic: '',
            imageUriPic: '',

            isLoad: false
        }
        this.pickImageHandler = this.pickImageHandler.bind(this);
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

    RegisterImage = () => {
        const authData1 = {
            imageFilenameSalary: this.state.imageFilenameSalary,
            imageTypeSalary: this.state.imageTypeSalary,
            imageUriSalary: this.state.imageUriSalary
        };
        const authData2 = {
            imageFilenameKtp: this.state.imageFilenameKtp,
            imageTypeKtp: this.state.imageTypeKtp,
            imageUriKtp: this.state.imageUriKtp
        };
        const authData3 = {
            imageFilenameNpwp: this.state.imageFilenameNpwp,
            imageTypeNpwp: this.state.imageTypeNpwp,
            imageUriNpwp: this.state.imageUriNpwp
        };
        const authData4 = {
            imageFilenamePic: this.state.imageFilenamePic,
            imageTypePic: this.state.imageTypePic,
            imageUriPic: this.state.imageUriPic
        };
        this.props.onTryRegisterImage(authData1, authData2, authData3, authData4);
    }

    registerDataSubmit = () => {
        const authData = {
            fullname: this.state.fullname,
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone,
            ktpNumber: this.state.email,
            address: this.state.address,
            ktpAddress: this.state.ktpAddress,
            province: this.state.province,
            city: this.state.city,
            village: this.state.village,
            district: this.state.district,
            workArea: this.state.workArea,
            coupleName: this.state.coupleName,
            numDependts: this.state.numDependts,
            npwpNumber: this.state.npwpNumber,
            postalCode: this.state.postalCode,
            placeOfBirth: this.state.placeOfBirth,
            date: this.state.date,
            gender: this.state.gender,
            marital: this.state.marital,
            religion: this.state.religion,
            work: this.state.work,
            education: this.state.education,
            salary: this.state.salary,
        };
        this.props.onTryRegisterData(authData);
    }


    pickImageHandler = (image) => {
        if(image === 1) {

            ImagePicker.showImagePicker(options, (response) => {
                if(response.didCancel){
                    console.log("User cancelled");
                }
                else if(response.error){
                    console.log("Error", response.error);
                }
                else{
                    console.log(response);
                    let data = response.data;
                    let filename = response.fileName;
                    let type = response.type;
                    let uri = response.uri;

                    this.setState({
                        imageFilenameSalary: filename,
                        imageTypeSalary: type,
                        imageUriSalary: uri,
                        isLoad: true
                    });

                    console.log("imageData salary : "+data);
                }
                // if(response.data !== null) {
                //     this.setState({ isLoad: false })
                // }
            });
        } else if (image === 2) {

            ImagePicker.showImagePicker(options, (response) => {
                if(response.didCancel){
                    console.log("User cancelled");
                }
                else if(response.error){
                    console.log("Error", response.error);
                }
                else{
                    let data = response.data;
                    let filename = response.fileName;
                    let type = response.type;
                    let uri = response.uri;

                    this.setState({
                        imageFilenameKtp: filename,
                        imageTypeKtp: type,
                        imageUriKtp: uri,
                    });
                    console.log("imageData ktp : "+data);
                }
            });
        } else if (image === 3) {

            ImagePicker.showImagePicker(options, (response) => {
                if(response.didCancel){
                    console.log("User cancelled");
                }
                else if(response.error){
                    console.log("Error", response.error);
                }
                else{
                    let data = response.data;
                    let filename = response.fileName;
                    let type = response.type;
                    let uri = response.uri;

                    this.setState({
                        imageFilenameNpwp: filename,
                        imageTypeNpwp: type,
                        imageUriNpwp: uri,
                    });
                    console.log("imageData npwp : "+data);
                }
            });
        } else if (image === 4) {

            ImagePicker.showImagePicker(options, (response) => {
                if(response.didCancel){
                    console.log("User cancelled");
                }
                else if(response.error){
                    console.log("Error", response.error);
                }
                else{
                    let data = response.data;
                    let filename = response.fileName;
                    let type = response.type;
                    let uri = response.uri;

                    this.setState({
                        imageFilenamePic: filename,
                        imageTypePic: type,
                        imageUriPic: uri,
                    });
                    console.log("imageData pic : "+data);
                }
            });
        }
    }

    sentAllData = () => {
        this.RegisterImage();
        this.registerDataSubmit();
    }


    render() {
        let RegisterButton = (
            <Button  onPress={ this.sentAllData }>
                <Text>REGISTER</Text>
            </Button>
        );

        let sentAllImage = (
            <Button  onPress={ this.RegisterImage }>
                <Text>Sent All Image</Text>
            </Button>
        );

        let sentAllData = (
            <Button  onPress={ this.registerDataSubmit }>
                <Text>Sent All Data</Text>
            </Button>
        );

        let salaryButton = (
            <Button title = "Pick Image Salary" onPress={()=>this.pickImageHandler(1)}>
                <Text> Salary </Text>
            </Button>
        );

        if(this.state.isLoad === false) {
            { salaryButton }
        } else if(this.state.isLoad === true){
            <Text>Salary pic done</Text>
        }

        if(this.props.isLoadingImage) {
            sentAllImage = <Spinner />
        } else if (this.props.isLoadingData) {
            sentAllData = <Spinner />
        } else if (this.props.isLoadingRegister){
            //RegisterButton = <Spinner />
        }

        return (
            <Container>
                <Content scrollEnabled contentContainerStyle={{justifyContent: 'center',alignItems: 'center', marginTop:'10%', marginBottom:'10%'}}>
                    <Card style={{width:'80%',height:'auto',paddingTop:'5%',paddingBottom:'10%'}}>
                        <Form>
                            <Item floatingLabel>
                                <Label>Full Name</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({fullname: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({username: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({password: text})}
                                    secureTextEntry={true}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Confirm Password</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({confPassword: text})}
                                    secureTextEntry={true}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({email: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Phone Number</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({phone: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>KTP Number</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({ktpNumber: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Address</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({address: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>KTP Address</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({ktpAddress: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Province</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({province: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>City</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({city: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Village</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({village: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>District</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({district: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Work Area</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({workArea: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Couple Name</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({coupleName: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Num Dependts</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({numDependts: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>NPWP Number</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({npwpNumber: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Postal Code</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({ postalCode: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Place of Birth</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({placeOfBirth: text})}
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

                            {salaryButton}

                            <Button title = "Pick Image Ktp" onPress = {() =>this.pickImageHandler(2)}>
                                <Text> ktpScan </Text>
                            </Button>

                            <Button title = "Pick Image Npwp" onPress = {()=>this.pickImageHandler(3)}>
                                <Text> npwpScan </Text>
                            </Button>

                            <Button title = "Pick Image Picture"onPress={()=>this.pickImageHandler(4)}>
                                <Text> picture </Text>
                            </Button>

                            {sentAllImage}
                            {sentAllData}
                            {RegisterButton}

                        </Form>
                    </Card>
                </Content>
            </Container>
        );
    }
}


const mapStateToProps = state => {
    return {
        isLoadingImage: state.ui.isLoadingImage,
        isLoadingData: state.ui.isLoadingData,
        isLoadingRegister: state.ui.isLoadingData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryRegisterImage: (authData1, authData2, authData3, authData4) => dispatch(tryRegisterImage(authData1, authData2, authData3, authData4)),
        onTryRegisterData: (authData) => dispatch(tryRegisterData(authData))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Register);