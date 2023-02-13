import './App.css';
import youtube from './api/youtube';
import { Grid } from '@mui/material';
import Searchbar from './components/Searchbar' ;
import VideoList from './components/VideoList';
import { useState } from 'react';
import VideoDetails from './components/VideoDetails';

function App() {

  const [videos, setVideos] = useState([]) ; 
  const [videoSelected, setVideoSelected] = useState( {}) ;

  const handleSearch = async (searchTerm)=>{
    const response = await youtube.get('search',{
      params:{
        part:"snippet",
        maxResults:50 , 
        key : 'AIzaSyDp35NLPiAzGkHEj_Vn3t-ZqQkZdz7Kgng',
        q:searchTerm
    }
    })  ; 
    setVideos(response.data.items);
    setVideoSelected(response.data.items[3])
  }
 
const onVideoSelect = (video)=>{
  setVideoSelected(video);
}

  return (
    <Grid container justifyContent="center" spacing={2} >
      <Grid item  xs={12} >
        <Grid container >
          <Grid item xs={12} >
            <Searchbar  OnFormSubmit={handleSearch}/>
           </Grid>
        </Grid>
      </Grid>
      <Grid 
      item xs={7} >
         <VideoDetails video={videoSelected} />
      </Grid>
      <Grid item xs={5} className='vidlist'>
         <VideoList videos={videos}  onVideoSelect={onVideoSelect} />
      </Grid>

    </Grid>
  );
}

export default App;


// xs it's used to define number of columns