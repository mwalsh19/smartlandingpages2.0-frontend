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
          landingPageData?.template?.name === 'VersionA' &&
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
