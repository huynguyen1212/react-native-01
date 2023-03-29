/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import LineItem from './src/components/LineItem';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}>
        <View style={styles.wrapHeader}>
          <Image
            style={styles.iconArrow}
            source={require('./src/images/arrow_left.png')}
          />
          <Text style={styles.title}>My Profile</Text>
          <Image
            style={styles.icon}
            source={require('./src/images/icon_setting.png')}
          />
        </View>

        <View style={styles.wrapAvatar}>
          <View>
            <Image
              style={styles.avatar}
              source={require('./src/images/avatar.jpeg')}
            />
            <View style={styles.wrapIconCamera}>
              <Image
                style={styles.iconCamera}
                source={require('./src/images/camera.png')}
              />
            </View>
          </View>
          <View style={styles.wrapInfo}>
            <Text style={styles.name}>Lò Thị Chang</Text>
            <Text style={styles.mail}>tranglt@gmail.com</Text>
            <Pressable
              style={styles.button}
              onPress={() => {
                Alert.alert('á');
              }}>
              <Text style={styles.text}>Edit Profile</Text>
            </Pressable>
          </View>
        </View>

        <View>
          <View style={styles.wrapItem}>
            <LineItem
              url={require('./src/images/icon_heart.png')}
              title="Favourites"
            />
            <LineItem
              url={require('./src/images/icon_heart.png')}
              title="Favourites"
            />
          </View>
          <View style={styles.wrapItem}>
            <LineItem
              url={require('./src/images/icon_heart.png')}
              title="Favourites"
            />
            <LineItem
              url={require('./src/images/icon_heart.png')}
              title="Favourites"
            />
            <LineItem
              url={require('./src/images/icon_heart.png')}
              title="Favourites"
            />
            <LineItem
              url={require('./src/images/icon_heart.png')}
              title="Favourites"
            />
            <LineItem
              url={require('./src/images/icon_heart.png')}
              title="Favourites"
            />
          </View>
          <View>
            <LineItem
              url={require('./src/images/icon_heart.png')}
              title="Favourites"
            />
            <LineItem
              url={require('./src/images/icon_heart.png')}
              title="Favourites"
            />
            <LineItem
              url={require('./src/images/icon_heart.png')}
              title="Favourites"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  wrapHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  iconArrow: {
    width: 15,
    height: 15,
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },

  wrapAvatar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    // justifyContent: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 30,
  },
  wrapIconCamera: {
    position: 'absolute',
    bottom: 0,
    right: 35,
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 50,
  },
  iconCamera: {
    width: 15,
    height: 15,
  },
  wrapInfo: {
    marginTop: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  mail: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 15,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
  },
  text: {
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },

  wrapItem: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    marginBottom: 20,
  },
});

export default App;
