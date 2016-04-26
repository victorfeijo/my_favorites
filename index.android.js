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

var REQUEST_URL = 'https://fathomless-lake-61988.herokuapp.com/favorites.json';

class my_favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componenetDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          favorites: responseData,
          loaded: true,
        });
      })
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    var favorite = this.state.favorites[0];
    return this.renderFavorite(favorite);
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading favorites...</Text>
      </View>
    );
  }

  renderFavorite(favorite) {
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
