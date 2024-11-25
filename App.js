import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import MyButton from './mybutton';

const App = () => (
  <View style={styles.mainBox}>
    <View>
      <Image source={require('./img.jpg')} style={styles.img} />
    </View>
    <View style={styles.contentBox}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Classic Utility Jacket</Text>
        <Text style={styles.price}>$110.00</Text>
      </View>
      <View style={styles.txtInStock}>
        <Text>In Stock</Text>
      </View>
      <View style={styles.labelsButtonsBox}>
        <MyButton buttonData={{ bgclr: 'black', clr: 'white', title: 'XS' }} />
        <MyButton buttonData={{ bgclr: 'white', clr: 'black', title: 'S' }} />
        <MyButton buttonData={{ bgclr: 'white', clr: 'black', title: 'M' }} />
        <MyButton buttonData={{ bgclr: 'white', clr: 'black', title: 'L' }} />
        <MyButton buttonData={{ bgclr: 'white', clr: 'black', title: 'XL' }} />
      </View>
      <View style={styles.line} />
      <View style={styles.btnsBox}>
        <View style={styles.buyBtns}>
          <MyButton
            buttonData={{ bgclr: 'black', clr: 'white', title: 'Buy now' }}
          />
          <MyButton
            buttonData={{ bgclr: 'white', clr: 'black', title: 'Add to Bag' }}
          />
        </View>
        <View style={styles.heartBtn}>
          <MyButton buttonData={{ bgclr: 'white', clr: 'gray', title: '♥' }} />
        </View>
      </View>
      <View style={styles.txtBox}>
        <Text>Free shipping on all contenental US orders.</Text>
      </View>
    </View>
  </View>
);

export default App;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  price: {
    fontWeight: 'bold',
    color: 'gray',
  },
  mainBox: {
    margin: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    paddingBottom: 10,
  },
  img: {
    width: '100%',
    height: 350,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  contentBox: {
    padding: 10,
  },
  txtBox: {
    padding: 10,
  },
  txtInStock: {
    padding: 10,
  },
  labelsButtonsBox: {
    padding: 5,
    flexDirection: 'row',
  },
  heartBtn: {
    height: 10,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    width: '100%',
  },
  titleBox: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buyBtns: {
    flexDirection: 'row',
  },
  btnsBox: {
    padding: 5,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
