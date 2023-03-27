// import {FlatList, View} from "react-native";
// import axios from "axios";
// import {useEffect, useState} from "react";
//
// import {response} from "../../../data";
//
// export default ({ cafeteriaName }) => {
//   const [isReady, setIsReady] = useState(false);
//   const [menuList, setMenuList] = useState([]);
//
//   const MQTT_CONFIG = {
//     host: 'example.com',
//     port: 1883,
//     username: 'username',
//     password: 'password',
//   };
//
//   useEffect(() => {
//     setMenuList(response);
//   }, []);
//
//   const sendMessage = async (message) => {
//     try {
//       const response = await axios.post(`${API_URL}/messages`, {
//         message,
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const receiveMessage = () => {
//
//     const client = mqtt.connect(MQTT_CONFIG);
//
//     client.on('connect', () => {
//       client.subscribe('topic');
//     });
//     client.on('message', (topic, message) => {
//       console.log(message.toString());
//     });
//
//   };
//
//   return (
//     <View>
//       <FlatList
//         data={menuList}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View>
//             <Text>{item.cafeteriaName}</Text>
//           </View>
//         )}
//       />
//     </View>
//   )
// }
