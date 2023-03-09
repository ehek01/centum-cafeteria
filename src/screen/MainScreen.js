import {View} from "react-native";
import Title from "../component/main/Title";
import OptionBar from "../component/main/OptionBar";
import Content from "../component/main/Content";

export default (props) => {
  return (
    <View>
      <Title />
      <OptionBar />
      <Content />
    </View>
  );
}
