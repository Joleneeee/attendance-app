// import StudentDatabase from "./StudentDatabase";
// import React, { useState, useEffect } from "react";
// import { Feather } from "@expo/vector-icons";
// import {
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   FlatList,
// } from "react-native";

// const StudentDatabase = () => {
//   const [students, setStudents] = useState([]);

//   const handleCheckIn = (studentId) => {
//     const updatedStudents = students.map((student) =>
//       student.id === studentId ? { ...student, isCheckedIn: true } : student
//     );
//     setStudents(updatedStudents);
//   };

//   const renderStudentItem = ({ item }) => (
//     <View style={{ marginBottom: 10 }}>
//       <Text>Name: {item.name}</Text>
//       <Text>Checked In: {item.isCheckedIn ? "Yes" : "No"}</Text>
//       {!item.isCheckedIn && (
//         <TouchableOpacity onPress={() => handleCheckIn(item.id)}>
//           <Text>Check In</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//   );

//   return (
//     <View>
//       <Text>Student Database</Text>
//       <FlatList
//         data={students}
//         renderItem={renderStudentItem}
//         keyExtractor={(item) => item.id.toString()}
//       />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <View>
//       <StudentDatabase />
//     </View>
//   );
// };

// export default App;
