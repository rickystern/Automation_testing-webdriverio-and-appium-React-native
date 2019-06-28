
import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import { Image, Text, View, StyleSheet, ScrollView, Button, TouchableOpacity,Alert } from 'react-native';
import BestBuyservice from './services/bestbuyservice';
//import { Icon } from 'react-native-vector-icons/Ionicons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import ProductDetails from './services/ProductDetails';
import Icon from '@expo/vector-icons/FontAwesome'

class AppContainer extends React.Component {

  constructor(props) {
    super(props)
    // this.products = [];
    this.state = { products: [] };
  }

  componentDidMount() {
    this.getProducts();

  }

  onPress(navigate){

    console.log(navigate);
    navigate('ProductDetails', null)
  //  Alert.alert("you touched the button")
  }



  getProducts() { //expot because i want the other page to have acees to these variables 
    const bestBuyService = new BestBuyservice();
    bestBuyService.getProducts().then((response) => {

      const products = response.data.products;
      const mappedProducts = products.map(product => {
        return {
          name: product.name,
          image: product.image,
          avail: product.inStoreAvailability,
          price: product.regularPrice,
          description: product.shortDescription,
          manufacturer:product.manufacturer,
          id:product.sku
          
        }
      })
      console.log("bestBuyService")
      this.setState({
        products: mappedProducts
      })

    })

  }
  render() {

    const {navigate} = this.props.navigation;

    return (

      <ScrollView>
        <View style={styles.container}>

          {this.state.products.map(product => {
            return (


              <View key={product.id} style={styles.listView}>

                <TouchableOpacity
                 onPress={() => navigate('ProductDetails', null)}>

                  <View style={styles.padding} >
                    <Image style={styles.image} source={{ uri: product.image }} />
                  </View>

                  <View style={styles.border}>


                    <View style={styles.text}>

                      <Text style={styles.descriptions}>


                        {product.name.substring(0, 50) + "..."}
                      </Text>

                      <Text style={styles.descriptions}>
                        {"$ " + product.price}
                      </Text>

                    </View>




                  </View>
                  <Image styles={styles.imageLeft} source={require('./assets/images/chevron-right.png')} />


                </TouchableOpacity>
              </View>
            )
          }

          )}

        </View>
      </ScrollView>
    )
  }


}

// class details extends React.getProducts{

//   render(){
//     return(
//       <Text> is</Text>
//     )

//   }
// }


const AppStack = createStackNavigator({

  Home: {
    screen: AppContainer,

    navigationOptions: () => ({

      title: `DuckBuy`,
      headerTitleStyle: {
        textAlign: "center",
        flex: 1,

      },
      headerLeft: (

        <Image
          style={styles.imageheader}
          source={require('./assets/images/YRDduck.png')}
        />

      ),
      headerRight: (
        <Icon
          name="user-circle"
          size={30}
          paddingRight={10}
          justifyContent="center"
        />
      ),

    }),
  },

  ProductDetails: { screen: ProductDetails
  }

});



export const Main = createBottomTabNavigator({


  Home: {
    screen: AppStack,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="home"
          color={tintColor}
          size={30}
        />
      )
    })

  },

  voice: {
    screen: AppStack,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <Icon
          name="microphone" ///doesnt seem to allow the outlineof icons
          color={tintColor}
          size={30}
        />
      )
    })
  },


  cart: {
    screen: AppStack,
    navigationOptions: () => ({


      tabBarIcon: ({ tintColor }) => (


        <Icon
          name="shopping-cart"
          color={tintColor}
          size={30}
        />

      )
    })

  },


}
);

// const MainNavigator = createStackNavigator({
//   Home: {screen: Main}
//   //Profile: {screen: ProductDetails},
// });

const MainAgain = createAppContainer(Main);

export default class App extends React.Component {
  render() {
    return <MainAgain />;
  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingBottom: 0,
    padding: 40
  },

  listView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 10,
    shadowOffset: { width: 10, height: 10, },
    shadowColor: 'black',
    shadowOpacity: 1.0,
    elevation: 10,
    padding: 20
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#34495e',

  },
  descriptions: {
    fontSize: 16,
    textAlign: 'left',
    color: '#34495e',


  },
  image: {
    alignItems: 'center',
    // justifyContent: "space-around",
    padding: 30,
    width: 120,
    height: 80,
    marginLeft: 150,
  },

  border: {
    borderLeftWidth: 3,
    borderLeftColor: '#d3d3d3'

  },


  imageheader: {
    width: 40,
    height: 40,
    marginLeft: 10


  },

  padding: {
    paddingRight: 15
  },


  text: {
    padding: 20,
    // marginLeft: 5,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold'
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  }

});


