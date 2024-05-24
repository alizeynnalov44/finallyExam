import {  Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductAdd from "./Pages/ProductAdd";
import Notfound from "./Pages/NotFound";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import {Helmet} from "react-helmet";
function App() {
 
  return (
    <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://http://localhost:8080/" />
            </Helmet>
<Header/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ProductAdd" element={<ProductAdd />} />
          <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
