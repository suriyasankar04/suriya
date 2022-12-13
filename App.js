import React from "react";
import './App.css';
import Aboutus from "./octane96/jsx/aboutus.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./octane96/jsx/home.jsx";
import Oct from "./octane96/jsx/Inventory.jsx";
import Slide, { SliderData } from "./octane96/jsx/SliderData.jsx";
import ImageSlider from "./octane96/jsx/imageSlider.jsx";
import Backend from "./octane96/jsx/Backend";
import BMW from "./octane96/jsx/BMW";
import Gallery from "./octane96/jsx/gallery";
import Jagu from "./octane96/jsx/jaguar";
import Lexus from "./octane96/jsx/lexus";
import Mercedes from "./octane96/jsx/mercedes";
import BMW3 from "./octane96/jsx/ld";
import Mini from "./octane96/jsx/jcw";
import Volvo from "./octane96/jsx/volvo";
function App()
{
    return(
<div className="App">
<BrowserRouter>
<Routes>
<Route index element={<Home />} />
          <Route path="Oct" element={<Oct />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="home" element={<Home />} />
          <Route path="backend" element={<Backend />}/>
          <Route path="BMW" element={<BMW />}/>
          <Route path="gallery" element={<Gallery />}/>
          <Route path="jagu" element={<Jagu />}/>
          <Route path="lexus" element={<Lexus />}/>
          <Route path="mercedes" element={<Mercedes />}/>
          <Route path="bmw3" element={<BMW3 />}/>
          <Route path="mini" element={<Mini />}/>
          <Route path="volvo" element={<Volvo />}/>

</Routes>
</BrowserRouter>
</div>
    )
}
export default App;