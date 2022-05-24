import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';


function App() {
  return (
  <BrowserRouter>
      <Header></Header>
      <div>
        <Route path='/' exact>
          <Home></Home>
        </Route>
        <Route path='/cart' exact>
          <Cart></Cart>
        </Route>
      </div>
  </BrowserRouter>
    
  );
}

export default App;
