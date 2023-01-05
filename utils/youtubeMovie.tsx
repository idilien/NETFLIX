
import YouTube, { YouTubeProps } from 'react-youtube';

export function YoutubeMovie(props:any) {

  const videoID = 'd9MyW72ELq0'
 const {videoId} = props
  // console.log(videoId)
  
  
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  
  const opts: YouTubeProps['opts'] = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
  return <YouTube 
          videoId={videoId}
          opts={opts} 
          onReady={onPlayerReady} 
  />;
}


