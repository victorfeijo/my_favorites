/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

var MOCKED_FAVORITES_DATA = [
  {name: 'Name', url: 'url', language: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];

class my_favorites extends Component {
  render() {
    var favorite = MOCKED_FAVORITES_DATA[0];
    return (
      <View style={styles.container}>
        <Image 
          source={{uri: favorite.language.thumbnail}}
          style={styles.thumbnail}
        /> 
        <View style={styles.rightContainer}>
          <Text style={styles.name}>{favorite.name}</Text>
          <Text style={styles.url}>{favorite.url}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center', 
  },
  url: {
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('my_favorites', () => my_favorites);
