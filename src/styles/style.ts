import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  logo: {
    flex:1,
    width: "100%",
    resizeMode: "contain"
  },
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


export default styles;