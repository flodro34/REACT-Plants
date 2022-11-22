import logo from '../ptePlante.png';
import '../App.css';
import Banner from './Banner';
import Cart from './Cart';
import Shoppinglist from './ShoppingList';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" /> 
      <header className="App-header">              
        <Banner />       
        <Shoppinglist />
        {/* <Cart />         */}
      </header>
    </div>
  );
}

export default App;
