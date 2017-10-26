

const searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      isEmbeddable: true,
      type: 'video'
    },
    contentType: 'application/json',
    success: function (data) {
      console.log('success', data.items);
      callback(data.items);
    },
    error: function (data) {
      console.error('something went wrong', JSON.stringify(data.items));
    }
  });
  
  
};

window.searchYouTube = _.debounce(searchYouTube, 500);


