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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Detail extends Component {
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
            Detail
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://id.wikipedia.org/wiki/' + this.props.route.params.judul,
            )
          }
          style={{
            marginTop: 30,
            alignItems: 'center',
            elevation: 3,
          }}>
          <Image
            style={{width: 200, height: 200, borderRadius: 3}}
            source={this.props.route.params.gambar}></Image>
        </TouchableOpacity>

        <Text
          style={{
            textAlign: 'center',
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 25,
            marginBottom: 10,
          }}>
          {this.props.route.params.judul}
        </Text>
        <Text
          style={{
            textAlign: 'justify',
            color: 'white',
            fontSize: 14,
            paddingHorizontal: 20,
          }}>
          {this.props.route.params.deskripsi}
        </Text>
      </View>
    );
  }
}

export default Detail;
