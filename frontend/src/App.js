
// import './components./App.css';
// import './App2.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";

import App2 from "./App2"
import App3 from "./App3"
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div >
    {/* // <div className="App"> */}
      <NavBar />     
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<App2 />}/>
          <Route path = '/todo' element = {<App2 />}/>
          <Route path = '/todo2' element = {<App3 />}/>
          {/* <Route path = '/profile' element = {<Profile />}/> */}


        </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;