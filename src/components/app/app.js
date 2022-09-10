// import './App.css';
import SideBar from '../side-bar';
// import Filter from '../filter';
import Lists from '../lists';
import Search from '../search';

import './app.scss';

const App = () => {
  return (
    <div className="App">
     <SideBar />
     {/* <Filter /> */}
     {/* <Lists /> */}
     <Search />
    </div>
  );
}

export default App;
