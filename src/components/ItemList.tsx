import * as React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import ProductDetail from "../screens/productDetail";
import styles from "../styles/style";

type Props = {
  onPress(): void
}

export function ItemList(props: any) {

  function goDetail(item: Props) {
    const { navigate } = props.navigation;
    console.log(item);
    navigate("ProductDetail",
      item
    );
  }

  return (
    <View style={{ flex: 1, width: "100%" }}>
      <FlatList
        contentContainerStyle={styles.allItems}
        data={props.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.singleItem} onPress={()=>goDetail(item)}>
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
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
