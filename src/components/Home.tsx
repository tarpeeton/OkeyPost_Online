import { FC } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar/Navbar"
import Sections from "./pages/sections/sections"

const Home: FC = (): JSX.Element =>  {
    return(
        <>
        <Routes>
            <Route path="/" element={
                <div>
                      <Navbar/>
                      <Sections/>
                </div>

            }/>
        </Routes>
        </>
    )
}




export default Home;