import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
// ./ means current directory
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyAEHWNruOridvYp66jkYdIajR75tOCxFEg';

// function based component version 1
// create an react element
// const App = function () {
//   return <div>Hi !</div>;
// }

//function based component version 2
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    // initialize the videos with default value
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    // const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <br/>
        <VideoDetail video={this.state.selectedVideo }/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

// render it in the browser
// App is a class &&& <App /> is a instance of class
// ReactDOM.render(App);
// passing a reference to the root node 'container' in the index.html
// no matter how many component we have, always reference to container as the sub-child of it
ReactDOM.render(<App />, document.querySelector('.container'));
