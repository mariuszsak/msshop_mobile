import * as React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

export function ItemList(props: any) {
  // console.log(props.data);
  console.log("ok");

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        contentContainerStyle={styles.allItems}
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.singleItem}>
            <View style={styles.left}>
              <Image
                resizeMode="center"
                source={{ uri: `http://192.168.0.2:3000/img/${item.id}.jpg` }}
                style={{ width: 190, height: 190 }}
              />
            </View>
            <View style={styles.right}>
              <View>
                <Text style={styles.name}>{item.brand.name}</Text>
              </View>
              <View>
                <Text style={styles.priceSmall}>Our price:
                  <Text style={styles.price}> {item.price}</Text></Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  allItems: {
    backgroundColor: "#fff",
    margin: 5
  },
  singleItem: {
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    flexDirection: "row",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "red",
    height: 200
  },
  img: {
    resizeMode: "stretch",
    width: "100%"
  },
  left: {
    width: "50%",
    borderWidth: 1
  },
  right: {
    flexDirection: "column",
    padding: 5
  },
  name: {
    fontWeight: "bold",
    fontSize: 20
  },
  price: {
    fontWeight: "bold",
    fontSize: 30
  },
  priceSmall: {
    fontWeight: "bold",
    fontSize: 20
  }

});
