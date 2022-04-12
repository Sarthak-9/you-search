import React, { useState, useRef, useEffect, useCallback } from "react";
import _debounce from "lodash/debounce";
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import FetchData from "../Components/FetchData";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [fetchStatus, setFetchStatus] = useState(false);
  const eventRes = (inputText) => {
    setFetchStatus(false);
    setSearchText(inputText);
    setTimeout(() => {
      setFetchStatus(true);
    }, 1000);
  };
  return (
    <View style={styles.top}>
      <View>
        <Text style={styles.title}>Welcome to YouSearch</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={eventRes}
          value={searchText}
          placeholder="Enter text to search"
        />
      </View>
      {fetchStatus && <FetchData searchText={searchText} />}
    </View>
  );
};
const styles = StyleSheet.create({
  top: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 25 : 10,
    padding: 16,
    alignContent: "center",
    paddingBottom: 180,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 10,
  },
  input: {
    borderColor: "gray",
    width: "100%",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    paddingTop: 10,
  },
});

export default SearchScreen;
