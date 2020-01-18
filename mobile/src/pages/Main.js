import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';

export default function Main() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitPosition() {
      const {granted} = await requestPermissionsAsync();
      
      if(granted) {
        const location = await getCurrentPositionAsync({
          enableHighAccuracy: false,
        });

        const { latitude, longitude } = location.coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        })
      }
    }
    loadInitPosition();
  }, [])

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -23.5290261, longitude: -47.4769197 }} >
        <Image
          style={styles.avatar} 
          source={{ uri:"https://avatars1.githubusercontent.com/u/45686702?s=460&v=4" }}
        />
        <Callout>
          <View style={styles.callout}>
            <Text style={styles.devName}>lauanS</Text>
            <Text style={styles.devBio}>student</Text>
            <Text style={styles.devTechs}>ReactJS, Python</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#FFF'
  },

  callout: {
    width: 260,
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16
  },

  devBio: {
      color: '#666',
      marginTop: 5
  },

  devTechs: {
      marginTop: 5
  },
})
