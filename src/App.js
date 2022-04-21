import MainSection from "./components/main/mainSection";
import Navbar from "./components/Navbar/Navbar";
import {useSelector} from 'react-redux'
import SearchedResults from './components/searchMainComponent/SearchedResults'
function App() {
  const {query} = useSelector(state => state.searchedAnime)
  return (
    <div className="App">
      <Navbar/>
      {!query? <MainSection></MainSection> : <SearchedResults/>}
      
    </div>
  );
}

export default App;
