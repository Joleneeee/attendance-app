import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import IconButton from "./iconButton";
import CheckinScreen from "./CheckinScreen";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CheckinScreen />
    </QueryClientProvider>
  );
};

export default App;
