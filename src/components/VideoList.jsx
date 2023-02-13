import { Paper } from '@mui/material';
import React from 'react'

const VideoList = ({videos,onVideoSelect}) => {
    console.log(videos)

    
    const listItems = videos.map((video,id) =>
    <div 
     onClick={()=>onVideoSelect(video)}
     style={{ display:"flex", padding:"5px 0px"}} key={id}>
        <Paper elevation={6} style={{ height:'70%' , width:'70%'}}>
            <img src={video?.snippet?.thumbnails?.medium?.url} alt="" />
        </Paper>
        <Paper elevation={6} style={{ padding:'15px',width:'30%'}}>
            {video?.snippet?.title}
        </Paper>
    </div>
        
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default VideoList