import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/style";

interface ShortInfoProps {
  name: string;
  price: string;
  brand: string;
  type: string
}

const ShortInfo = (props: ShortInfoProps) => {
  const {name, price, brand, type} = props;
  return (
    <>
      <View>
        <Text style={styles.name}>
          {name}
        </Text>
      </View>
      <View>
        <Text style={styles.priceSmall}>
          Our price:
          <Text style={styles.price}>
            {price}{"\n"}
          </Text>
          <Text style={styles.price}>
            {brand}{"\n"}
            {type}
          </Text>
        </Text>
      </View>
    </>
  );
};

export const MemoizedShortInfo = React.memo(ShortInfo);