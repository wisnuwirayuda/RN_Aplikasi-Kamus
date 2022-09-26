/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          judul: 'Apel',
          deskripsi: 'Apel adalah sebuah buah',
        },
        {id: 2, judul: 'Jeruk', deskripsi: 'Jeruk adalah sebuah buah'},
        {id: 3, judul: 'Mangga', deskripsi: 'Mangga adalah sebuah buah'},
        {id: 4, judul: 'Alpukat', deskripsi: 'Alpukat adalah sebuah buah'},
        {id: 5, judul: 'Nanas', deskripsi: 'Nanas adalah sebuah buah'},
        {id: 6, judul: 'Anggur', deskripsi: 'Anggur adalah sebuah buah'},
        {id: 7, judul: 'Sirsak', deskripsi: 'Sirsak adalah sebuah buah'},
        {id: 8, judul: 'Durian', deskripsi: 'Durian adalah sebuah buah'},
        {
          id: 9,
          judul: 'Kelengkeng',
          deskripsi: 'Kelengkeng adalah sebuah buah',
        },
        {id: 10, judul: 'Pear', deskripsi: 'Pear adalah sebuah buah'},
        {id: 11, judul: 'Semangka', deskripsi: 'Semangka adalah sebuah buah'},
      ],
      dataTampil: [
        {
          id: 1,
          judul: 'Apel',
          deskripsi: 'Apel adalah sebuah buah',
        },
        {id: 2, judul: 'Jeruk', deskripsi: 'Jeruk adalah sebuah buah'},
        {id: 3, judul: 'Mangga', deskripsi: 'Mangga adalah sebuah buah'},
        {id: 4, judul: 'Alpukat', deskripsi: 'Alpukat adalah sebuah buah'},
        {id: 5, judul: 'Nanas', deskripsi: 'Nanas adalah sebuah buah'},
        {id: 6, judul: 'Anggur', deskripsi: 'Anggur adalah sebuah buah'},
        {id: 7, judul: 'Sirsak', deskripsi: 'Sirsak adalah sebuah buah'},
        {id: 8, judul: 'Durian', deskripsi: 'Durian adalah sebuah buah'},
        {
          id: 9,
          judul: 'Kelengkeng',
          deskripsi: 'Kelengkeng adalah sebuah buah',
        },
        {id: 10, judul: 'Pear', deskripsi: 'Pear adalah sebuah buah'},
        {id: 11, judul: 'Semangka', deskripsi: 'Semangka adalah sebuah buah'},
      ],
      pencarian: '',
    };
  }

  pencarian = () => {
    let data = this.state.data;

    data = data.filter(item =>
      item.judul.toLowerCase().includes(this.state.pencarian.toLowerCase()),
    );

    this.setState({dataTampil: data});
  };

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
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Home
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('About')}>
            <Icon
              style={{marginRight: 10}}
              name="info-circle"
              size={25}
              color="#FFF"
            />
          </TouchableOpacity>
        </View>

        <TextInput
          style={{
            backgroundColor: 'white',
            margin: 20,
            borderRadius: 50,
            paddingLeft: 15,
          }}
          placeholder="Cari disini"
          value={this.state.pencarian}
          onChangeText={text =>
            this.setState({pencarian: text}, () => this.pencarian())
          }></TextInput>

        <FlatList
          data={this.state.dataTampil}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Detail', {
                  judul: item.judul,
                  deskripsi: item.deskripsi,
                })
              }
              style={{
                marginVertical: 10,
                marginHorizontal: 20,
                backgroundColor: '#2196f3',
                padding: 10,
                borderRadius: 5,
                elevation: 3,
              }}>
              <Text style={{color: 'white', fontSize: 16}}>{item.judul}</Text>
              <Text style={{color: 'white', fontSize: 14}}>
                {item.deskripsi}
              </Text>
            </TouchableOpacity>
          )}></FlatList>
      </View>
    );
  }
}

export default Home;
