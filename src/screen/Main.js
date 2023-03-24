import {Alert, StyleSheet} from "react-native";
import Title from "../component/main/Title";
import OptionBar from "../component/main/OptionBar";
import Content from "../component/main/Content";
import {useEffect, useState} from "react";
import {response} from "../../data/cafeteriaList";
import Division from "../component/common/Division";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import axios from "axios";
import restaurantApi from "../api/restaurantApi";

export default ({navigation}) => {
  const [cafeteriaList, setCafeteriaList] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  // call api
  const fetchData = () => {
    restaurantApi.getRestaurantList().then(({data}) => setCafeteriaList(data));
  }

  // event function
  const onPressBellIcon = () => {
    Alert.alert("click");
  }
  const onPressCafeBtn = (cafeteria) => {
    navigation.push('cafeteriaDetail', {cafeteria: cafeteria});
  }
  const onPressAllTableBtn = () => {
    navigation.push('allTable', {cafeteriaList: cafeteriaList});
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={styles.container}
        edges={['top', 'right', 'bottom', 'left']}
      >
        <Title />
        <Division />
        <OptionBar
          onPressBellIcon={onPressBellIcon}
        />
        <Division />
        <Content
          cafeteriaList={cafeteriaList}
          onPressCafeBtn={onPressCafeBtn}
          onPressAllTableBtn={onPressAllTableBtn}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
