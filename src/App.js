import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { retrieveLandingPage } from "./actions/landingpages";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import VersionA from './layouts/VersionA';
import VersionB from './layouts/VersionB';
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {

  let { path } = useParams();
  const landingPageData = useSelector((state) => state.landingpages);
  const [title, setTitle] = useState(document.title);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveLandingPage(path));
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
          <title>{title}</title>
      </Helmet>
      <div className="">
        {
          landingPageData?.template?.name === 'VersionA' &&
          <VersionA pageData={landingPageData} landingPageName={path} />
        }

        {
          landingPageData?.template?.name === 'VersionB' &&
          <VersionB pageData={landingPageData} landingPageName={path} />
        }
      </div>
    </HelmetProvider>
  )
}

export default App;
