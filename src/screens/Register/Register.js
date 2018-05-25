import React, { Component } from 'react';
import { Container, Item, Content, Form, Input, Button, Label, Card, CardItem, Body, Text, Picker, Icon, Left, Right} from 'native-base';
import DatePicker from 'react-native-datepicker';
import ImagePicker from 'react-native-image-picker';
import { tryRegisterImage, tryRegisterData, tryResetData } from "../../store/actions";
import { Image, ScrollView } from 'react-native';


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
            fullname: '',
            date:'',
            gender:'Pria',
            marital:'Belum Menikah',
            religion:'Islam',
            work:'PNS',
            education:'SD',
            salary:'< Rp 3.000.000',
            username: '',
            password: '',
            confPassword: '',
            email: '',
            phone: '',
            ktpNumber: '',
            address: '',
            ktpAddress: '',
            province: '',
            city: '',
            village: '',
            district: '',
            postalCode: '',
            placeOfBirth: '',
            workArea: '',
            coupleName: '',
            numDependts: '',
            npwpNumber: '',

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

            isLoadSalary: false,
            isLoadKtp: false,
            isLoadNpwp: false,
            isLoadPic: false,
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
                        isLoadSalary: true,
                    });

                    console.log("imageData salary : "+data);
                }
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
                        isLoadKtp: true,
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
                        isLoadNpwp: true,
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
                        isLoadPic: true,
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

    resetAll = () => {
        const authData = {
            isLoadSalary: false,
            isLoadKtp: false,
            isLoadNpwp: false,
            isLoadPic: false,

            fullname: '',
            username: '',
            password: '',
            confPassword: '',
            email: '',
            phone: '',
            ktpNumber: '',
            address: '',
            ktpAddress: '',
            province: '',
            city: '',
            village: '',
            district: '',
            workArea: '',
            coupleName: '',
            numDependts: '',
            npwpNumber: '',
            postalCode: '',
            placeOfBirth: '',
            date: '',
            gender: '',
            marital: '',
            religion: '',
            work: '',
            education: '',
            salary: '',
        };
        this.props.onTryResetData(authData);
    }



    render() {
        let RegisterButton = (
            <Button style={styles.button} onPress={ this.sentAllData }>
                <Text style={styles.buttonText}>REGISTER</Text>
            </Button>
        );

        let sentAllImage = (
            <Button style={styles.button} onPress={ this.RegisterImage }>
                <Text style={styles.buttonText}>Sent All Image</Text>
            </Button>
        );

        let sentAllData = (
            <Button style={styles.button} onPress={ this.registerDataSubmit }>
                <Text style={styles.buttonText}>Sent All Data</Text>
            </Button>
        );

        let salaryButton = (
            <Button
                style={styles.button} onPress={()=>this.pickImageHandler(1)}>
                <Text style={styles.buttonText}> Salary </Text>
            </Button>
        );

        let ktpButton = (
            <Button style={styles.button} onPress = {() =>this.pickImageHandler(2)}>
                <Text style={styles.buttonText}> ktpScan </Text>
            </Button>
        );

        let npwpButton = (
            <Button style={styles.button} onPress = {()=>this.pickImageHandler(3)}>
                <Text style={styles.buttonText}> npwpScan </Text>
            </Button>
        );

        let picButton = (
            <Button style={styles.button} onPress={()=>this.pickImageHandler(4)}>
                <Text style={styles.buttonText}> picture </Text>
            </Button>
        );

        if(this.state.isLoadSalary === false) {
            { salaryButton }
        } else if(this.state.isLoadSalary === true){
            salaryButton = <Text style={styles.textDone}>Salary Done</Text>
        }

        if(this.state.isLoadKtp === false) {
            {ktpButton}
        } else if(this.state.isLoadKtp === true) {
            ktpButton = <Text style={styles.textDone}>Ktp Done</Text>
        }

        if (this.state.isLoadNpwp === false) {
            {npwpButton}
        } else if (this.state.isLoadNpwp === true) {
            npwpButton = <Text style={styles.textDone}>Npwp Done</Text>
        }

        if(this.state.isLoadPic === false) {
            {picButton}
        } else if(this.state.isLoadPic === true) {
            picButton = <Text style={styles.textDone}>Pic Done</Text>
        }

        if(this.props.isLoadingImage) {
            sentAllImage = <Spinner />
        } else if (this.props.isLoadingData) {
            sentAllData = <Spinner />
        } else if (this.props.isLoadingRegister){
            //RegisterButton = <Spinner />
        }

        return (
            <ScrollView
                overScrollMode="always"
                keyboardShouldPersistTaps="always"
                style={styles.scrollView}
            >
                <Image source={require('../../img/bg.jpg')} style={styles.bgImg}/>
                    <Card style={styles.cardStyle}>
                            <Item stackedLabel >
                                <Label style={styles.labelStyle}>FullName</Label>
                                <Input autoCapitalize="words"
                                    onChangeText={(text)=>this.setState({fullname: text})}
                                    value={this.state.fullname}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>Username</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({username: text})}
                                    value={this.state.username}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>Password</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({password: text})}
                                    secureTextEntry={true}
                                    value={this.state.password}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>Confirm Password</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({confPassword: text})}
                                    secureTextEntry={true}
                                    value={this.state.confPassword}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>Email</Label>
                                <Input keyboardType="email-address"
                                    onChangeText={(text)=>this.setState({email: text})}
                                    value={this.state.email}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>Phone Number</Label>
                                <Input keyboardType="phone-pad"
                                    onChangeText={(text)=>this.setState({phone: text})}
                                    value={this.state.phone}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>KTP Number</Label>
                                <Input keyboardType="numeric"
                                    onChangeText={(text)=>this.setState({ktpNumber: text})}
                                    value={this.state.ktpNumber}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>Address</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({address: text})}
                                    value={this.state.address}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>KTP Address</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({ktpAddress: text})}
                                    value={this.state.ktpAddress}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>Province</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({province: text})}
                                    value={this.state.province}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>City</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({city: text})}
                                    value={this.state.city}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>Village</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({village: text})}
                                    value={this.state.village}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>District</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({district: text})}
                                    value={this.state.district}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>Work Area</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({workArea: text})}
                                    value={this.state.workArea}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>Couple Name</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({coupleName: text})}
                                    value={this.state.coupleName}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>Num Dependts</Label>
                                <Input keyboardType="numeric"
                                    onChangeText={(text)=>this.setState({numDependts: text})}
                                    value={this.state.numDependts}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>NPWP Number</Label>
                                <Input keyboardType="numeric"
                                    onChangeText={(text)=>this.setState({npwpNumber: text})}
                                    value={this.state.npwpNumber}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>Postal Code</Label>
                                <Input keyboardType="numeric"
                                    onChangeText={(text)=>this.setState({ postalCode: text})}
                                    value={this.state.postalCode}
                                />
                            </Item>

                            <Item stackedLabel>
                                <Label style={styles.labelStyle}>Place of Birth</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({placeOfBirth: text})}
                                    value={this.state.placeOfBirth}
                                />
                            </Item>

                            <Item>
                                <Left>
                                    <Label style={styles.labelStyle}>Date of Birth</Label>
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
                                    placeHolder="choose one"
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

                            {ktpButton}

                            {npwpButton}

                            {picButton}

                            {/*<Button onPress={this.resetAll}>*/}
                            {/*<Text> reset all </Text>*/}
                            {/*</Button>*/}

                            {sentAllImage}
                            {sentAllData}
                            {RegisterButton}
                    </Card>
            </ScrollView>
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
        onTryRegisterData: (authData) => dispatch(tryRegisterData(authData)),
        onTryResetData: (authData) => dispatch(tryResetData(authData)),
    };
};

const styles = {
    cardStyle: {
        width:'100%',
        height:'auto',
        paddingTop:'5%',
        paddingBottom:'10%',
        flex: 1,
    },
    labelStyle: {
        marginLeft: '2%',
    },
    scrollView: {
        flex: 1
    },
    bgImg: {
        width:'100%',
        height:'100%',
        position:'absolute',
        resizeMode:'cover'
    },
    button: {
        marginLeft: '10%',
        marginTop: '5%',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        marginTop: 25,
    },
    textDone: {
        textAlign: 'center',
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);