import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //wtf
  container: {
    flex:1
  },
  //logo style
  logo: {
    flex: 1,
    paddingTop:10,
    width: "100%",
    resizeMode: "contain",
    backgroundColor: '#fff'
  },
  // FlatList
  allItems: {
    backgroundColor: "#fff",
    margin: 15
  },
  singleItem: {
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 5,
    flexDirection: "row",
    borderStyle: "solid",
    // borderWidth: 1,
    // borderColor: "red",
    height: 150
  },
  left: {
    // width: "50%",
    // borderWidth: 1
  },
  right: {
    // flexDirection: "column",
    justifyContent: "flex-start",
    paddingLeft: 35,
    paddingTop: 35
  },
  name: {
    // fontFamily: 'Roboto',
    // fontWeight: "bold",
    color: '#FF7657',
    fontWeight: 'bold',
    fontSize: 25
  },
  type: {
    fontSize: 15
  },
  price: {
    paddingTop: 5,
    fontWeight: "bold",
    fontSize: 15
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
