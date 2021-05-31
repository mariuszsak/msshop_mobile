import { View, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import Logo from '../components/logo';
import MapView, { Marker } from "react-native-maps";

export default function Info() {
    return (
        <View style={styles.container}>
            <View>
                <Logo />
            </View>
            <View style={styles.body}>
              <View style={styles.container}>
                <MapView style={styles.map}  initialRegion={{
                  latitude: 52.229676,
                  longitude: 21.012229,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.1,
                }}>
                <Marker coordinate={{
                  latitude: 52.229676,
                  longitude: 21.012229
                }}
                title={'GlassShop'}
                description={'00-001 Warszawa, ul. Okularowa 1'}/>
                </MapView>
              </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        backgroundColor: 'pink'
    },
    body: {
        flex: 9
    },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
