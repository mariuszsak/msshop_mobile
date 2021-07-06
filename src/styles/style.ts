import { StyleSheet } from "react-native";
import { StatusBar } from "react-native";

const bgcolor = "#fff";
const buttonColor = "";
const menucolor = "";

const styles = StyleSheet.create({
  //wtf
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  header: {
    flex: 2
  },
  body: {
    flex: 15,
    backgroundColor: bgcolor,
    paddingLeft:20,
    paddingRight:20
    // margin: 10
  },
  footer: {
    flex: 3,
    backgroundColor: bgcolor
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    backgroundColor: bgcolor
  },
  // FlatList
  allItems: {
    margin: 0,
    padding: 0
  },
  singleItem: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 30,
    height: 160
  },
  name: {
    // fontFamily: "Roboto",
    left: 10,
    fontWeight: "bold",
    color: "#FF7657",
    fontSize: 20
  },
  type: {
    left: 10,
    fontSize: 15
  },
  price: {
    left: 10,
    paddingTop: 5,
    fontWeight: "bold",
    fontSize: 15
  },
  priceDetail: {
    paddingBottom: 25,
    fontWeight: "bold",
    fontSize: 25,
    color: "#007AFF"
  },
  description: {
    paddingTop: 5,
    fontSize: 15,
    paddingBottom: 20
  },
  checkboxLabel: {
    fontSize: 10
  },
  mediumImage: {
    margin: 5,
    width: 150,
    height: 55
  },
  bigImage: {
    width: 330,
    height: 156,
    margin: 0,
    padding: 0,
    top: 0,
    left: 0
  },
  detail: {
    // borderWidth: 1,
    borderColor: "red",
    paddingBottom: 15,
    // justifyContent: "flex-start",
    // flexDirection: "column"
    flex: 2,
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
    justifyContent: "space-between"
  },
  checkboxes: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end"
  },
  bor: {
    // flex: 1,
    // borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "black"
  },
  btn: {
    backgroundColor: "#888"
    // borderWidth: 1,
    // borderRadius: 15
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1
  },
  bookmark: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    position: "absolute",
    borderRadius: 15,
    backgroundColor: "lightgray",
    bottom: -5,
    right: 0
  },
  addRemoveContainer: {
    flex: 3
    // position: "absolute",
    // bottom: 0,

  }
});

export default styles;
