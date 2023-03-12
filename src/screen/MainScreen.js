import {Alert, StyleSheet} from "react-native";
import Title from "../component/main/Title";
import OptionBar from "../component/main/OptionBar";
import Content from "../component/main/Content";
import {useEffect, useState} from "react";
import {response} from "../../data/cafeteriaList";
import Division from "../component/common/Division";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default () => {
  const [cafeteriaList, setCafeteriaList] = useState([])
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
