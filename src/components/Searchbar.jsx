import { Paper, TextField } from '@mui/material';
import React, { useState } from 'react' ; 


const Searchbar = ({ OnFormSubmit}) => {
    const [searchTerm, setSearchTerm] = useState("") ; 

    const handleSubmit =(e)=>{
        e.preventDefault() ; 
        OnFormSubmit(searchTerm) ;
        setSearchTerm('') 
    }

  return (
    <Paper style={{position:'sticky'}}  elevation={4}>
        <form onSubmit={handleSubmit}  >
        <TextField  
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)} 
        fullWidth 
        id="standard-basic" 
        label="search..." 
        variant="standard" 
        sx={{ padding:"10px"}} />
        </form>
    </Paper>
    
  )
}

export default Searchbar