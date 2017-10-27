

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: initDataArr,
      select: initData,
      inputValue: ''
    };
  }
  
  onVideoClick(video) {
    this.setState({
      select: video
    });
  }
  
  search() {
    this.props.searchYouTube({
      query: this.state.inputValue,
      max: 5,
      key: YOUTUBE_API_KEY
    }, results =>
      this.setState({
        videos: results,
        select: results[0]
      })
    );
  }
  
  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
    this.search();
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search updateInputValue={this.updateInputValue.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.select} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} onVideoClick={this.onVideoClick.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
  
  componentDidMount(props) {
    this.props.searchYouTube({
      query: 'corgi',
      max: 5,
      key: YOUTUBE_API_KEY
    }, data =>
      this.setState({
        videos: data,
        select: data[0]
      })
    );
    this.props.searchYouTube.flush();
  }
  
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

const initData = {
  kind: 'youtube#searchResult',
  etag: '',
  id: {
    kind: 'youtube#video',
    videoId: ''
  },
  snippet: {
    publishedAt: '',
    channelId: '',
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
        width: 120,
        height: 90
      }
    },
    channelTitle: '',
    liveBroadcastContent: ''
  }
};

const initDataArr = Array(5).fill(initData);



