import './App.css'
import axios from 'axios'
import { StrictMode } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./components/home/Home.tsx";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

function App() {
    return (
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/login" element={<HomePage/>}/>
                    <Route path="/register" element={<HomePage/>}/>
                    <Route path="/profile" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </StrictMode>
    );
}

export default App;