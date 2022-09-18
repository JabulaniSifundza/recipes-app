import logo from './logo.svg';
import {useGlobalContext} from './context';
import './App.css';
import Favourites from './components/Favourites';
import Search from './components/Search';
import Modal from './components/Modal';
import Meals from './components/Meals';

function App() {
	const {showModal} = useGlobalContext();
  return (
    <div className="App">
	<Search />  
	<Meals />
	{showModal && <Modal />}
    </div>
  );
}

export default App;
