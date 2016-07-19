import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        onVideoSelect = { props.onVideoSelect }
        key = {video.etag}
        video = {video} />
    )
  });

  return (
    // use className in JSX instead of class because of conflicts with class keyword in JS
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  )
};

export default VideoList;
