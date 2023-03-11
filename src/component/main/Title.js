import {Image, View, StyleSheet, Text} from "react-native";

export default (props) => {
  return (
    <View style={styles.container}>
      {/*<Text>타이틀</Text>*/}
      <Image source={require('../../../image/hansin.png')} style={styles.image} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    height: "20%",
    // backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
    // backgroundColor: "red",
  },
});
