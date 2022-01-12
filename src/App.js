import './App.css';
import { Container } from '@material-ui/core';
import Home from './pages/Home'
import ProductDetail from './pages/Product/ProductDetail';
import Header from "./components/Header";
import theme from "./style/Theme"
import { MuiThemeProvider } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return ( 
    <MuiThemeProvider theme={theme}>
      <Router> 
      <Header />
      <Routes>
               <Route path="/" element={<Home />}/>                               
               <Route path="/detail/:id"  element={<ProductDetail />}/>
      </Routes>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
