import {Image, View, StyleSheet, Text, TouchableOpacity} from "react-native";

const CafeteriaComp = ({cafeteria, onPressCafeBtn}) => {
  const {restaurantName} = cafeteria;
  return (
    <TouchableOpacity onPress={() => {onPressCafeBtn(cafeteria)}} style={styles.buttonContainer}>
      <Image source={require('../../../image/goldButton.png')} style={styles.image} />
      <Text style={styles.text}>{restaurantName}</Text>
    </TouchableOpacity>
  )
}

export default (props) => {
  const {cafeteriaList, onPressCafeBtn,onPressAllTableBtn } = props;

  return (
    <View style={styles.container}>
      {cafeteriaList.map((item, index) => (
        <CafeteriaComp
          key={index}
          onPressCafeBtn={onPressCafeBtn}
          cafeteria={item}
        />
      ))}
      <TouchableOpacity onPress={onPressAllTableBtn} style={styles.buttonContainer}>
        <Image source={require('../../../image/goldButton.png')} style={styles.image} />
        <Text style={styles.text}>한눈에 비교하기</Text>
      </TouchableOpacity>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "blue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    // backgroundColor: "red",
    width: "50%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  image: {
    // backgroundColor: "blue",
    width: "100%",
    flex: 1,
  },
  text: {
    // backgroundColor: "blue",
    position: "absolute",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  }
})
