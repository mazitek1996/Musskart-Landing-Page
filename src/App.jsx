import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import IndexHome from './IndexHome';
import Error404 from './Error404';
import LoadingScreen from './LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <Router> {/* Wrap the app with the Router component */}
      <Fragment>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <div>
            <Routes>
              <Route path="/" element={<IndexHome />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </div>
        )}
      </Fragment>
    </Router>
  );
}

export default App;
