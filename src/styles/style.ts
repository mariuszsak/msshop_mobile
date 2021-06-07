import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // wtf
  default: {
    flex: 1
  },
  //wtf
  container: {
    flex:1
  },
  //logo style
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain"
  },
  // FlatList
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
  //wtf
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
    fontFamily: 'Roboto',
    fontWeight: "bold",
    fontSize: 20
  },
  price: {
    fontWeight: "bold",
    fontSize: 15
  },
  priceSmall: {
    fontWeight: "bold",
    fontSize: 12
  },
  checkboxLabel: {
    fontSize: 10
  },
  mediumImage: {
    width: 150,
    height: 150
  },
  detail: {
    borderWidth: 0,
    padding: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  quantityContainer: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "flex-end"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
  },
    checkboxes: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end"
  },
  body: {
    flex: 9,
    backgroundColor: "#fff"
  },
  bor: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "black"
  },
    btn: {
    padding: 5,
    backgroundColor: "#fff"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1
  }
});

export default styles;
