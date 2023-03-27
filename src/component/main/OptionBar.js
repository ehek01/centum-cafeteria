import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FontAwesome, MaterialIcons} from "@expo/vector-icons";

export default (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPressBellIcon}>
        <FontAwesome name="bell" size={24} color="black" />
      </TouchableOpacity>
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: "5%",
    // backgroundColor: "yellow",
  }
})
