import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Label} from 'native-base';

const ACCESS_TOKEN = '';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            error: ""
        }
    }

    handleUsername = (text) => {
        this.setState({ username: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    async storeToken(accessToken){
        try{
            await AsyncStorage.setItem(ACCESS_TOKEN, accessToken);
        }catch(error){
            console.log("something went wrong store token login");
        }
    }

    async onLoginPressed() {
        try {
            let response = await fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'username': this.state.username,
                    'password': this.state.password,
                })
            });
            let res = await response.text();
            if(response.status >= 200 && response.status < 300) {
                this.setState({ error: "" });
                let accessToken = res;
                this.storeToken(accessToken);
                console.log("res token login: " + accessToken);
                this.props.navigation.navigate('Dashboard');
            } else {
                let error = res;
                throw error;
            }
        } catch (error) {
            this.setState({error: error});
            console.log("error " + error);
        }
    }


    render() {
      return (
        <Container style={{backgroundColor: 'white'}}>
          <Content>
          <Form>
              <Item floatingLabel>
              <Label>Username/Email/Phone Number</Label>
                <Input
                    onChangeText={ this.handleUsername}
                />
              </Item>

              <Item floatingLabel>
              <Label>Password</Label>
                <Input
                    onChangeText={ this.handlePassword}
                    secureTextEntry={true}
                />
              </Item>
          </Form>

           <Button rounded primary full onPress={ this.onLoginPressed.bind(this) }>
               <Text style={{color:'white'}}>Log In</Text>
           </Button>
              <Text> {this.state.error} </Text>
          </Content>
        </Container>
      );
    }
  }
  export default Login;