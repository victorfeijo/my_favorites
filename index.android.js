/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class my_favorites extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Meu primeiro aplicativo
        </Text>
        <Text style={styles.instructions}>
          E eu quero dizer que
        </Text>
        <Text style={styles.instructions}>
          Te amo amor
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('my_favorites', () => my_favorites);
