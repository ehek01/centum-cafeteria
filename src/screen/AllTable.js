import {View} from "react-native";
import Table from "../component/cafeferiadetail/Table";

export default (props) => {
  const {cafeteriaList} = props.route.params;

  const splitData = (data) => {
    const split = [];
    for (let i = 0; i < data.length; i += 2) {
      const row = [];
      if (i < data.length) {
        row.push(data[i]);
      }
      if (i + 1 < data.length) {
        row.push(data[i + 1]);
      }
      split.push(row);
    }
    return split;
  };

  const splitDataArray = splitData(cafeteriaList);

  return (
    <View>
      {splitDataArray.map((row, rowIndex) => (
        <View key={rowIndex} style={{ flexDirection: 'row' }}>
          {row?.map((cafeteria,index) => <Table key={index} data={cafeteria} />)}
        </View>
      ))}
   </View>
  )
}
