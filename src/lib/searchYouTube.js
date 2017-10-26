

const searchYouTube = ({key, query, max}, callback) => {

  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?key=${key}&q=${query}&maxResults=${max}`,
    type: 'GET',
    dataType: 'application/json',
    contentType: 'application/json',
    success: function (data) {
      callback(data);
      console.log('success', JSON.stringify(data));
    },
    error: function (data) {
      callback(data);
      console.error('something else', JSON.stringify(data));
    }
  });
  
  
};

window.searchYouTube = searchYouTube;

//https://www.googleapis.com/youtube/v3/search?key=AIzaSyDIjEEhf-UDXxtl18KU8h-HCggxjPWDj0Y&query=react&max=5

//https://www.googleapis.com/youtube/v3/search?key=${key}&q=${query}&maxResults=${max}
