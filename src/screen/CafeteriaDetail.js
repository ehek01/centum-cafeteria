import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {StyleSheet} from "react-native";
import {useEffect} from "react";
import Table from "../component/cafeferiadetail/Table";

export default ({navigation, route}) => {
  const {cafeteria} = route.params;

  useEffect(() => {
    navigation.setOptions({title:cafeteria.cafeteriaName});
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={['top', 'right', 'bottom', 'left']}>
        <Table data={cafeteria} />
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
});
