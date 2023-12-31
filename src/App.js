
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppMainFunct from "./todoMain"
import App3 from "./App3"
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <NavBar />     
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<AppMainFunct />}/>
          <Route path = '/todo' element = {<AppMainFunct/>}/>
          <Route path = '/todo2' element = {<App3 />}/>
          {/* <Route path = '/profile' element = {<Profile />}/> */}
        </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;