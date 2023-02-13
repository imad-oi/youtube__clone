import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import ReactPlayer from 'react-player'

const VideoDetails = ({video}) => {
    console.log(video)
    if (!video?.id?.videoId) 
    {
     return <div> loading...</div>
    }    
    const vdSrc = `https://www.youtube.com/watch?v=${video?.id?.videoId}`
  return (
    <div>
        <Grid container sx={{margin:"5px"}}>
            <Grid item >
                <Paper elevation={5}>
                <ReactPlayer 
                url={vdSrc}
                />
                </Paper> 
                <Paper elevation={5}>
                    <Typography variant='h5'>
                    {video?.snippet?.title}
                    </Typography>
                    <Typography variant='subtitle1'>
                        {video?.snippet?.channelTitle}
                    </Typography>
                    <Typography variant='subtitle2'>
                   { video?.snippet?.description}
                    </Typography>

                </Paper>
            </Grid>
        </Grid>
    </div>
  )
}

export default VideoDetails