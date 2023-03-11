import {Alert, Text, View} from "react-native";
import Title from "../component/main/Title";
import OptionBar from "../component/main/OptionBar";
import Content from "../component/main/Content";
import {useEffect, useState} from "react";
import {response} from "../../data/cafeteriaList";
import Division from "../component/common/Division";

export default (props) => {
  const [cafeteriaList, setCafeteriaList] = useState({})
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setCafeteriaList(response.cafeteriaList);
  }
  const onPressBellIcon = () => {
    Alert.alert("click");
  }

  const onPressCafeBtn = (cafeteria) => {
    Alert.alert(cafeteria.cafeteriaName);
  }

  return (
    <View style={{flex:1}}>
      <Title />
      <Division />
      <OptionBar
        onPressBellIcon={onPressBellIcon}
      />
      <Division />
      <Content
        cafeteriaList={cafeteriaList}
        onPressCafeBtn={onPressCafeBtn}
      />
    </View>
  );
}
