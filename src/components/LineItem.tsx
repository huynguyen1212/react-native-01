/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View, Image, StyleSheet} from 'react-native';

function LineItem({title, url}: {title: any; url: string}): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.wrap}>
        <View style={styles.wrapLeft}>
          <Image
            style={styles.icon}
            source={url ? url : require('../images/icon_heart.png')}
          />
          <Text style={styles.title}>{title}</Text>
        </View>
        <Image
          style={styles.iconArrow}
          source={require('../images/icon_arrow_right.png')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  wrapLeft: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
  iconArrow: {
    width: 10,
    height: 10,
  },
});

export default LineItem;
