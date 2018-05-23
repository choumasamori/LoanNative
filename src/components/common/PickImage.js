import React, { Component } from "react";
import { View, Image, Button, StyleSheet } from "react-native";
import ImagePicker from "react-native-image-picker";

class PickImage extends Component {
    state = {
        pickedImage: null
    }

    reset = () => {
        this.setState({
            pickedImage: null
        });
    }

    pickImageHandler = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if(response.didCancel){
                console.log("User cancelled");
            }
            else if(response.error){
                console.log("Error", response.error);
            }
            else{
                let data = response.data;
                let uri = response.uri;
                let path = response.path;
                let filename = response.fileName;
                let type = response.type;
                let origUrl = response.origURL;

                this.setState({
                    imageData: data,
                    imageFilename: filename,
                    imagePath: path,
                    imageType: type,
                    imageOrigUrl: origUrl,
                    imageUri: uri,
                    imageText: "Add Img Success"
                });
                console.log("imageData:"+this.state.imageData);
                console.log("imageFilename:"+this.state.imageFilename);
                console.log("imageUri:"+this.state.imageUri);
                console.log("imagePath:"+this.state.imagePath);
                console.log("imageType:"+this.state.imageType);
                console.log("imageOrigUrl:"+this.state.imageOrigUrl);
            }
        });
    }

    render() {
        return (
            <View>
                <View>
                    <Button title="Pick Image" onPress={this.pickImageHandler} />
                </View>
            </View>
        );
    }
}


export default PickImage;