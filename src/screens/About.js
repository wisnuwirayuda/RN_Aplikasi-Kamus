/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  Linking,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#212121'}}>
        <StatusBar backgroundColor="#1976d2"></StatusBar>
        <View
          style={{
            backgroundColor: '#2196f3',
            paddingVertical: 20,
            elevation: 3,
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Icon
              style={{marginRight: 10}}
              name="chevron-left"
              size={25}
              color="#FFF"
            />
          </TouchableOpacity>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              textAlign: 'center',
            }}>
            About
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 20,
          }}>
          <Image
            style={{width: 150, height: 150, borderRadius: 150 / 2}}
            source={require('../assets/img/Me.jpg')}></Image>
        </View>

        <View style={{marginBottom: 15}}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Aplikasi dibuat oleh : {'\n'} Wisnu Trenggono Wirayuda {'\n'} Junior
            IT Developer
          </Text>
        </View>

        <View>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
            }}>
            For more info :
          </Text>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://www.linkedin.com/in/wisnu-trenggono-wirayuda-4591821b5/',
              )
            }>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 16,
              }}>
              LinkedIn
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.facebook.com/wirayuda.wisnu.5/')
            }>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.instagram.com/wisnu_wirayuda/')
            }>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 16,
              }}>
              Instagram
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default About;
