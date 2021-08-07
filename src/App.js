/**
 * Remove this content and start here
 */

 import React from "react";
 import { BrowserRouter as Router, Route } from "react-router-dom";
 import PropertyListing from "./Views/propertListings";
 
 function App() {
   return (
     <Router>
         <Route exact path="/" component={PropertyListing}></Route>
     </Router>
   );
 }
 
 export default App;
 
