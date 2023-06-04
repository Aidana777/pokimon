import './App.css';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path='/about/:id' element={<AboutPage/>}/>
      </Routes>
    </>
  );
}

export default App;
