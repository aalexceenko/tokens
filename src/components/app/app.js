import SideBar from '../side-bar';
import Lists from '../lists';
import Search from '../search';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './app.scss';

const App = ({tokens}) => {

  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path="/" element={<Lists tokens={tokens} />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
