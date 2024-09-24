import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const smartPhoneImage = require('./assets/vs_blue.png');

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.containerSmartPhone}>
        <Image source={smartPhoneImage} style={styles.imageStyle} />
      </View>
      <View style={{flex: 1, alignItems: 'center',}}>
        <Text style={{fontWeight: 'bold'}}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View style = {{flexDirection: 'row'}}>
          <Text style={{color: '#888'}}>(Xem 828 đánh giá)</Text>
        </View>
        <View style = {{flexDirection: 'row'}}>
          <Text style={styles.currentPrice}>1.790.000 đ</Text>
          <Text style={styles.originalPrice}>1.790.000 đ</Text>
        </View>

        <Text style={{color: 'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
      </View>
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity style={styles.selectButton}>
          <Text>4 MÀU-CHỌN MÀU</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex:1, alignItems: 'center'}}>
        <TouchableOpacity style={styles.buttonEnd}>
          <Text style={styles.buttonEndText}>Chọn mua</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerSmartPhone: {
    flex: 2,
    alignItems: 'center',
  },
  imageStyle: {
    height: '100%',
    resizeMode: 'contain',
  },
  currentPrice: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    marginRight: 4,
  },
  originalPrice: {
    color: '#888',
    textDecorationLine: 'line-through',
  },
  selectButton: {
    width: '90%',
    padding: 10,
    backgroundColor: '#090',
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonEnd: {
    width: '90%',
    padding: 12,
    backgroundColor: 'red',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonEndText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
