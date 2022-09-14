
import {Button,Container, Typography} from '@mui/material';
import {useEffect } from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import AppBar from './components/appbar';
import Banner from './components/banner';
import Promotions from './components/promotions';
import Products from './components/products';


function App() {
  useEffect(() => {
    document.title="material ui --Home"
  
   
  }, [])
  
  return (
    <ThemeProvider theme = {theme}>
 <Container maxWidth="xl" sx={{backgroundColor:"#fff"}}>
      
      <AppBar></AppBar>
      <Banner></Banner>
      <Promotions></Promotions>
      <div>
        <Typography variant="h4" padding={"4px"} display="flex" alignItems="center" justifyContent={"center"}> Our Products</Typography>
      </div>
      <Products></Products>
      {/*
 appbar 
  promotions
  tittle
  products
  searchbox
  appdrawer*/}
    
    </Container>

    </ThemeProvider>
   
 
  );
}

export default App;
