import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  Alert,
  FlatList,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";

import SearchedItemCard from "../Components/SearchedItemCard";
const SearchResultList=props=>{
    return (
        <View>
            <FlatList data={props.result} keyExtractor={item => item.videoId} renderItem={({item})=>(
             <SearchedItemCard values={item} />
    )}/>
        </View>
    );
}
export default SearchResultList;