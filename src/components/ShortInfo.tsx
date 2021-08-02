import React, { memo } from "react";
import { Text, View } from "react-native";
import styles from "../styles/style";

interface ShortInfoProps {
  name: string;
  price: string;
  type: string
}

export const ShortInfo = memo((props: ShortInfoProps) => {
  const {name, price, type} = props;
  return (
    <>
      <View>
        <Text style={styles.name}>
         {name}
        </Text>
      </View>
      <View>
          <Text style={styles.type}>
            {type}
          </Text>
          <Text style={styles.price}>
            {price}PLN
          </Text>
      </View>
    </>
  );
});
