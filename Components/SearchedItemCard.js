import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  Alert,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";

const SearchedItemCard=props=>{
   return (<View style={styles.cardView}>
          <View style={styles.innerView}>
          <Image
        style={styles.image}
        source={{
          uri: props.values.thumbnail,
        }}
      />
          </View>
            <Text style={styles.title}>
                {props.values.title}
            </Text>
            <Text style={styles.channel}>
                {props.values.channelTitle}
            </Text>
        </View>);
}
const styles=StyleSheet.create({
  image:{
    height: 180,
    width:360,
    
  },
  title:{
    fontSize: 16,
  },
  channel:{
    fontSize: 14,
  },
  cardView:{
    flex:1,
    paddingTop:16,
    paddingBottom:16,
  },
  innerView:{
    flexDirection:"row",
  
  }
});
export default SearchedItemCard;