import _ from 'lodash';
// React used to create and manage components
import React, {Component} from 'react';
// ReactDOM used to interact/render our component on to the DOM
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyC7i4GPHgGhZLR9SojWPg1slIWJRZtWtqU';

// Create a new component.  This component should produce some kind of HTML.
// CREATE
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');

  }

  videoSearch(user_search_term) {
    // 'key' and 'term' are properties of YTSearch
    YTSearch({key: API_KEY, term: user_search_term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }) // In ES6, you can use a single variable name when the key AND value share the same name.  This resolves to "this.setState({ videos: videos })"
    });
  }

  render() {
    const videoSearch = _.debounce((search_term) => { this.videoSearch(search_term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch }/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    ); // passed data is called props
  }
}

// OLD METHOD - Creating a function-based component instead of a class-based one
// "const" - declaring a constant variable (ES6)
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   ); // JSX gets transpiled to vanilla JS
// } // () => (fat arrow) is ES6 to declare a function

// Take this component's generated HTML and put it on the page (in the DOM).
// SHOW
ReactDOM.render(<App />, document.querySelector('.container'));
