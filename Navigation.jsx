import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
         <BrowserRouter>
<Routes>
<Route index element={<Home />} />
          <Route path="Oct" element={<Oct />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="home" element={<Home />} />
</Routes>
</BrowserRouter>
       </div>
    );
}
 
export default Navigation;