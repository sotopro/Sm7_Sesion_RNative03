import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

const Location = () => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [coordinates, setCoordinates] = useState(null);
  const mapRef = useRef(null);
  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        console.warn(position);
        setRegion({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => {
        console.warn(error);
        throw error;
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
        forceREquestLocation: true,
        showLocationDialog: true,
      },
    );
  }, []);

  const onRegionChange = value => {
    setRegion(value);
  };
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        // ref={mapRef}
        onRegionChange={value => onRegionChange(value)}
        onRegionChangeComplete={(region) => onRegionChange(region)}
        showsUserLocation={true}
        showsMyLocationButton={true}
        // onPress={e => {
        //   setCoordinates(e.nativeEvent.coordinate);
        // }}
        initialRegion={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.latitudeDelta,
        }}
        // region={region}
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
          onPress={e => {
            setCoordinates(e.nativeEvent.coordinates);
          }}
        />
      </MapView>
    </View>
  );
};

export default Location;
