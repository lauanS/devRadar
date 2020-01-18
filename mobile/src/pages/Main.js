import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { requestPermissionsAsync, getCurrentPositionAsync} from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons'
export default function Main( { navigation }) {
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
    <>
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: -23.5290261, longitude: -47.4769197 }} >
        <Image
          style={styles.avatar} 
          source={{ uri:"https://avatars1.githubusercontent.com/u/45686702?s=460&v=4" }}
        />
        <Callout onPress={
          () => {
            navigation.navigate('Profile', { github_username: 'lauanS' })
          }
        }>
          <View style={styles.callout}>
            <Text style={styles.devName}>lauanS</Text>
            <Text style={styles.devBio}>student</Text>
            <Text style={styles.devTechs}>ReactJS, Python</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
    <View style={styles.searchForm}>
      <TextInput 
        style={styles.searchInput} 
        placeholder="Buscar devs por tech..."
        placeholderTextColor="#999"
        autoCapitalize="words"
        autoCorrect={false}
      />
      
      <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
        <MaterialIcons name="my-location" size={20} color="#FFF" />
      </TouchableOpacity>
    </View>
    </>
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

  searchForm: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8E4DFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
})
