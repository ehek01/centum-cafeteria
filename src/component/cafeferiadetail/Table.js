import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default (props) => {
  const {restaurantName, date, menuData} = props.data;

  const items = menuData.split(',');
  const chunkSize = 5;
  const tableData = [];

  for (let i = 0; i < items.length; i += chunkSize) {
    tableData.push(items.slice(i, i + chunkSize).join(','));
  }

  useEffect(() => {
  }, [menuData]);

  const Header = ({ title }) => (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );

  const TableRow = ({ data }) => {
    const items = data.split(',');
    return (
      <View style={styles.row}>
        {items.map((item, index) => (
          <Text style={styles.cell} key={index}>{item}</Text>
        ))}
      </View>
    );
  };


  return (
    <View>
      {tableData.map((data, index) => (
        <TableRow data={data} key={index} />
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
