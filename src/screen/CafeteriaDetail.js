import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet, Image} from "react-native";
import {useEffect} from "react";
import Table from "../component/cafeferiadetail/Table";

export default ({navigation, route}) => {
  const {cafeteria} = route.params;
  console.log("cafeteria", cafeteria);
  useEffect(() => {
    navigation.setOptions({title: cafeteria.restaurantName});
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={['top', 'right', 'bottom', 'left']}>
        {
          cafeteria.menuGubun === "I" ? <Image source={{uri: cafeteria.menuData}} style={styles.img}/>
            : <Table data={cafeteria}/>
        }
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
  container: {
    // backgroundColor: "yellow",
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    paddingHorizontal: 20,
  },
  img: {
    width: 300,
    height: 400,
  },
});


