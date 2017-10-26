

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
      console.error('something else', JSON.stringify(data.items));
    }
  });
  
  
};

window.searchYouTube = searchYouTube;

//https://www.googleapis.com/youtube/v3/search?key=AIzaSyDIjEEhf-UDXxtl18KU8h-HCggxjPWDj0Y&query=react&max=5

//https://www.googleapis.com/youtube/v3/search?key=${key}&q=${query}&maxResults=${max}
