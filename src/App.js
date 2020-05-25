import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Youtube from "../src/youtube";
import VideoList from "./videolist";
import VideoDetail from "./videodetail";

const KEY = "AIzaSyAelQhhazMo8R-PCmqV_P5LPZP-kAueocQ";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.onSearchSubmit("home diy");
  }
  onSearchSubmit = async (searchField) => {
    const response = await Youtube.get("/search", {
      params: {
        part: "snippet",
        type: "videos",
        maxResults: 5,
        key: KEY,
        q: searchField,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui segment ">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className=" five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
