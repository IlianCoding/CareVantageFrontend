import { StrictMode } from 'react'
import axios from 'axios'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/home/Home.tsx";
import Header from "./components/general/Header.tsx";
import Footer from "./components/general/Footer.tsx";
import './App.css'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL

function App() {
  return (
      <StrictMode>
          <BrowserRouter>
                  <div className="flex flex-col">
                      <Header />
                      <main className="flex-grow">
                          <Routes>
                              <Route>
                                  <Route path="/" element={<HomePage/>}/>
                                  <Route path="/login" element={<HomePage/>}/>
                                  <Route path="/register" element={<HomePage/>}/>
                                  <Route path="/profile" element={<HomePage/>}/>
                                  <Route path="/" element={<HomePage/>}/>
                                  <Route path="/" element={<HomePage/>}/>
                              </Route>
                          </Routes>
                      </main>
                      <Footer />
                  </div>
          </BrowserRouter>
      </StrictMode>
  );
}

export default App
