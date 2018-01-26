/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';



export default class App extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      display: 0,
    }

  }
  onClick(){
    this.setState({

    });
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.displayContainer}>
              <Text style={styles.inputDisplayText}>{this.state.display}</Text>
          </View>
          <View style={styles.inputContainer}>
              <View style={styles.inputButton}>
                  <View style={styles.inputButtonRow}>
                      <Text style={styles.inputButtonText}>C</Text>
                  </View>
                  <View style={styles.inputButtonRow}>
                      <Text style={styles.inputButtonText}>+/-</Text>

                  </View>
                  <View style={styles.inputButtonRow}>
                      <Text style={styles.inputButtonText}>%</Text>

                  </View>
                  <View style={styles.inputButtonRowOr}>
                      <Text style={styles.inputButtonTextOr}>/</Text>

                  </View>
              </View>
              <View style={styles.inputButton}>
                  <View style={styles.inputButtonRow}>
                    <Touchable
                      <Text style={styles.inputButtonText}>7</Text>

                  </View>
                  <View style={styles.inputButtonRow}>
                      <Text style={styles.inputButtonText}>8</Text>

                  </View>
                  <View style={styles.inputButtonRow}>
                      <Text style={styles.inputButtonText}>9</Text>

                  </View>
                  <View style={styles.inputButtonRowOr}>
                      <Text style={styles.inputButtonTextOr}>X</Text>

                  </View>
              </View>
              <View style={styles.inputButton}>
                  <View style={styles.inputButtonRow}>
                      <Text style={styles.inputButtonText}>4</Text>

                  </View>
                  <View style={styles.inputButtonRow}>
                      <Text style={styles.inputButtonText}>5</Text>

                  </View>
                  <View style={styles.inputButtonRow}>
                      <Text style={styles.inputButtonText}>6</Text>

                  </View>
                  <View style={styles.inputButtonRowOr}>
                      <Text style={styles.inputButtonTextOr}>-</Text>

                  </View>
              </View>
              <View style={styles.inputButton}>
                  <View style={styles.inputButtonRow}>
                      <Text style={styles.inputButtonText}>1</Text>

                  </View>
                  <View style={styles.inputButtonRow}>
                      <Text style={styles.inputButtonText}>2</Text>

                  </View>
                  <View style={styles.inputButtonRow}>
                      <Text style={styles.inputButtonText}>3</Text>

                  </View>
                  <View style={styles.inputButtonRowOr}>
                      <Text style={styles.inputButtonTextOr}>+</Text>

                  </View>
              </View>
              <View style={styles.inputButton}>
                  <View style={{flex:5,borderWidth:1,borderColor:'black'}}>
                        <Text style={styles.inputButtonText}>0</Text>
                  </View>

                  <View style={styles.inputButtonRow}>
                      <Text style={styles.inputButtonText}>.</Text>

                  </View>
                  <View style={styles.inputButtonRowOr}>
                      <Text style={styles.inputButtonTextOr}>=</Text>

                  </View>
              </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
    displayContainer:{
        backgroundColor:'black',
        flex: 2,
    },
    inputContainer:{
        flex: 8,
        backgroundColor:'#cccccc'
    },
    inputButton:{
        flex: 2,
        flexDirection:'row'
    },
    inputButtonRow:{
        flex:2.5,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#7f7f7f',
    },
    inputButtonText:{
        fontSize: 40,
        fontWeight: '400',
        color: 'black',
        textAlign:'center',

    },
    inputButtonTextOr:{
        fontSize: 40,
        fontWeight: '400',
        color: 'white',
        textAlign:'center',

    },
    inputButtonRowOr:{
        flex:2.5,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#7f7f7f',
        backgroundColor:'#f77c09',

    },
    inputDisplayText:{
        fontSize: 40,
        fontWeight: '400',
        color: 'white',
        textAlign:'right',
    }

});
