import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import SearchedItemCard from "../Components/SearchedItemCard";
const FetchData = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(1);
  useEffect(() => {
    setNextPageToken(searchResults.nextPageToken);
    if (searchResults.items && searchResults.items.length > 0) {
      let fetchedList = searchResults.items.map((item) => {
        return {
          videoId: pageCurrent + item.id.videoId,
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          channelTitle: item.snippet.channelTitle,
        };
      });
      let newList = [...searchList].concat(fetchedList);
      setSearchList(newList);
    }
  }, [nextPageToken]);
  useEffect(() => {
    setIsLoading(true);
    if (props.searchText) {
      const xhr = new XMLHttpRequest();
      if (pageCurrent == 1) {
        xhr.open(
          "GET",
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&q=${props.searchText}&key=AIzaSyCmDr_MiF9h8e4e6H-Qv2dOipnqIbZf3Kw`,
          true
        );
        xhr.onload = function () {
          if (this.status === 200) {
            let result = JSON.parse(this.response);
            setSearchResults(result);
            setNextPageToken(result.nextPageToken);
          } else {
            console.log("Error");
          }
          setIsLoading(false);
        };
        xhr.send();
      } else if (typeof nextPageToken != "undefined" && nextPageToken != "") {
        xhr.open(
          "GET",
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&pageToken=${nextPageToken}&q=${props.searchText}&key=AIzaSyCmDr_MiF9h8e4e6H-Qv2dOipnqIbZf3Kw`,
          true
        );
        xhr.onload = function () {
          if (this.status === 200) {
            let result = JSON.parse(this.response);
            setSearchResults(result);
            setNextPageToken(result.nextPageToken);
          } else {
            console.log("Error");
          }
          setIsLoading(false);
        };
        xhr.send();
      }
    }
  }, [props.title, pageCurrent]);

  RenderFooter = () => {
    return isLoading ? (
      <View>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };
  handleLoadMore = () => {
    setPageCurrent(pageCurrent + 1);
    setIsLoading(true);
  };
  return (
    <View style={styles.top}>
      <Text style={styles.title}>The search results are:</Text>
      {searchList.length > 0 && (
        <FlatList
          data={searchList}
          keyExtractor={(item) => item.videoId}
          ListFooterComponent={this.RenderFooter}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0}
          renderItem={({ item }) => <SearchedItemCard values={item} />}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  top: {
    padding: 16,
    alignContent: "center",
    paddingBottom: 200,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default FetchData;
