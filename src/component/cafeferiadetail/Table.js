import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default (props) => {
  const {cafeteriaName, date, menuNameList} = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>
          {cafeteriaName}({date})
        </Text>
      </View>
      {menuNameList?.map((rowData, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.cell}>{rowData}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "50%",
    flexDirection: 'column',
    // justifyContent: "center",
    alignItems: 'stretch',
    borderWidth: 1,
    borderColor: 'black',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
  headerCell: {
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
});
