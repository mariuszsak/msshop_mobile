import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  default: {
    flex: 1,
    width: "100%"
  },
  logo: {
    flex: 1,
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
    width: 190,
    height: 190
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
  }
});

export default styles;
