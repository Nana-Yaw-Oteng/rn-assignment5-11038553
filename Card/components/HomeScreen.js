import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <SafeAreaView>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/penguin.png')} style={styles.profilePic} />
        <View style={styles.headerText}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.nameText}>Nana Yaw Oteng</Text>
        </View>
        <Icon name="search" size={24} color="black" />
      </View>
      <View>
      <Image style={styles.card} source={require('../assets/Card.png')}/>
      </View>
      
        
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
            <View style={{backgroundColor:'#f2f2f2', borderRadius:40,padding:10}}>
          <Icon name="send" size={25} color="black" />
          </View>
          <Text>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
           <View style={{backgroundColor:'#f2f2f2', borderRadius:40,padding:10}}>
           <Icon  name="arrow-down" size={25} color="black" />
           </View>
          
         
          <Text>Receive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={{backgroundColor:'#f2f2f2', borderRadius:40,padding:10,width:45}}>
            <Icon style={{marginLeft:5}} name="dollar" size={25} color="black" />
            </View>
          
          <Text>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
            <View style={{backgroundColor:'#f2f2f2', borderRadius:40,padding:10}}>
          <Icon name="arrow-up" size={25} color="black" />
          </View>
          <Text>Topup</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactions}>
        <Text style={styles.transactionsTitle}>Transaction</Text>
        <TouchableOpacity>
          <Text style={styles.sellAll}>Sell All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transactionItem}>
        <View style={{backgroundColor:'#f2f2f2', borderRadius:40,padding:8}}>
        <Icon name="apple" size={28} color="black" />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionText}>Apple Store</Text>
          <Text style={styles.transactionCategory}>Entertainment</Text>
        </View>
        <Text style={styles.transactionAmount}>- $5.99</Text>
      </View>
      <View style={styles.transactionItem}>
      <View style={{backgroundColor:'#f2f2f2', borderRadius:40,padding:8}}>
      <Icon name="spotify" size={32} color="#33cc33" />
          </View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionText}>Spotify</Text>
          <Text style={styles.transactionCategory}>Music</Text>
        </View>
        <Text style={styles.transactionAmount}>- $12.99</Text>
      </View>
      <View style={styles.transactionItem}>
        <View style={{backgroundColor:'#f2f2f2', borderRadius:40,padding:8}}>
        <Icon  name="money" size={28} color="black" />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionText}>Money Transfer</Text>
          <Text style={styles.transactionCategory}>Transaction</Text>
        </View>
        <Text style={{fontSize: 16,fontWeight: 'bold',color:'#4d79ff'}}>$300</Text>
      </View>
      <View style={styles.transactionItem}>
        <View style={{backgroundColor:'#f2f2f2', borderRadius:40,padding:8}}>
        <Icon name="shopping-cart" size={28} color="#ff4d4d" />
        </View>
        <View style={styles.transactionDetails}>
          <Text style={styles.transactionText}>Grocery</Text>
          <Text style={styles.transactionCategory}>Transaction</Text>
        </View>
        <Text style={styles.transactionAmount}>- $88</Text>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  headerText: {
    flex: 1,
    marginLeft: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: 'gray',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    borderRadius:10,
    marginVertical:20,
     marginHorizontal:20,
   
    
  },
  
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    alignItems: 'center',
    marginBottom:20,
    
  },
  transactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  transactionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sellAll: {
    color: '#4d79ff',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginVertical:5
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10,
  },
  transactionText: {
    fontSize: 16,
  },
  transactionCategory: {
    color: 'gray',
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});