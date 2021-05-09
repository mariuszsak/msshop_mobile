import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/style";

interface ShortInfoProps {
  name: string;
  price: string;
}

const ShortInfo = (props: ShortInfoProps) => {
  const {name, price} = props;
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
            {" "}
            {price}
          </Text>
        </Text>
      </View>
    </>
  );
};

export const MemoizedShortInfo = React.memo(ShortInfo);