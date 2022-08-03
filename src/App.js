import './App.css';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from "@mui/material/Button";
import Header from './Components/Header/header';
import Movies from './Components/Movies/Movies';
import Loader from './Components/Loader/Loader';
import { AppContext } from './Context/SearchContext';

function App() {
  const [movies,setMovies]=React.useState(['Squid Game']);
  const [isLoading,setIsLoading]=React.useState(false);

// React.useEffect(()=>{
//     setTimeout(() => {
//       setMovies(['superman']);
//     }, 3000);
// },[])

  return (
    <AppContext.Provider value = {{
      state: movies,
      setState: setMovies,
      isLoading: isLoading,
      setIsLoading: setIsLoading
    }}>
      <div className="App"> 
    {/* <Button variant="contained" >Add to Cart</Button> */}
    <Header/>
    {isLoading && <Loader/>}
    <Movies/>
    {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
    </div>

    </AppContext.Provider>

  );
}

export default App;
