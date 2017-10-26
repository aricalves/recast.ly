var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={ (e) => { props.updateInputValue(e); }} />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

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

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
