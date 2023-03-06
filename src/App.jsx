import AppHeader from './components/Header/AppHeader';
import Mainpage from './pages/Mainapge/Mainpage';
import { BurgerIngredientsData } from './utils/data';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Mainpage BurgerIngredientsData={BurgerIngredientsData}/>
    </div>
  );
}

export default App;
