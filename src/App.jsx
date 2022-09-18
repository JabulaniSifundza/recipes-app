import {useGlobalContext} from './context';
import './App.css';
import Favourites from './components/Favourites';
import Search from './components/Search';
import Modal from './components/Modal';
import Meals from './components/Meals';

function App() {
	const {showModal, favourites} = useGlobalContext();
  return (
    <div className="App">
	<Search /> 
	{favourites.length > 0 && <Favourites /> } 
	<Meals />
	{showModal && <Modal />}
    </div>
  );
}

export default App;
