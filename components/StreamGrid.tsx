import React from 'react';
import { View, FlatList, Image, TouchableOpacity, Alert, StyleSheet, Linking } from 'react-native';

type StreamItem = {
  id: string;
  name: string;
  logo: string;
  url: string;
};

type StreamGridProps = {
  streams: StreamItem[];
  brandLogo: string;
  backgroundColor: string;
};

const openLinkInBrowser = (url: string) => {
  Linking.openURL(url).catch(err => Alert.alert('Failed to open URL', err.message));
};

const StreamGrid = ({ streams, brandLogo, backgroundColor }: StreamGridProps) => {
  const renderItem = ({ item }: { item: StreamItem }) => (
    <TouchableOpacity
      style={styles.item}
      focusable={true}
    >
      <Image source={{ uri: item.logo }} style={styles.logo} />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: brandLogo }} style={styles.brandLogo} />
      </View>
      <FlatList
        data={streams}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        focusable={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  logoContainer: {
    alignItems: 'center',
  },
  grid: {
    padding: 5,
  },
  item: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    marginBottom: 40,
    height: 60,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  brandLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default StreamGrid;
