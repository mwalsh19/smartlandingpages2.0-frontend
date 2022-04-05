import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { retrieveLandingPage } from "./actions/landingpages";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import VersionA from './layouts/VersionA';
import VersionB from './layouts/VersionB';
import DocumentTitle from 'react-document-title';
import { useNavigate } from 'react-router-dom';
import ReactGA from 'react-ga';

function App() {

  let { path, publisher, version } = useParams();
  let navigate = useNavigate();
  const landingPageData = useSelector((state) => state.landingpages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveLandingPage(path, publisher, version));
  }, []);

  if (publisher && publisher !== landingPageData?.publisher?.publisher) {
    navigate('/404');
  }

  if (landingPageData?.landingPage?.ga_lp) {
    const TRACKING_ID = landingPageData?.landingPage?.ga_lp;
    ReactGA.initialize(TRACKING_ID);
  }

  return (
    <DocumentTitle title={landingPageData?.landingPage?.title || 'Landing Pages'}>
      <div>
        {
          (landingPageData?.template?.name === 'VersionA' ||
          landingPageData?.template?.name === 'div227' || 
          landingPageData?.template?.name === 'div273-div274' || 
          landingPageData?.template?.name === 'div290' || 
          landingPageData?.template?.name === 'div290columbus' ||
          landingPageData?.template?.name === 'div290clevelandarea' ||
          landingPageData?.template?.name === 'div290omaha' || 
          landingPageData?.template?.name === 'div290topeka' ||
          landingPageData?.template?.name === 'div290indianapolis' || 
          landingPageData?.template?.name === 'div290desmoines' ||
          landingPageData?.template?.name === 'div290kansascitymo' ||
          landingPageData?.template?.name === 'div290chicagoarea' ||
          landingPageData?.template?.name === 'div296') &&
          <VersionA pageData={landingPageData} landingPageName={path} />
        }

        {
          landingPageData?.template?.name === 'VersionB' &&
          <VersionB pageData={landingPageData} landingPageName={path} />
        }
      </div>
    </DocumentTitle>
  )
}

export default App;
