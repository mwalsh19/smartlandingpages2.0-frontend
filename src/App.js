import React, { useEffect, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(retrieveLandingPage(path, publisher, version));
    // <!-- hiremaster conversion init script -->
    if (publisher && publisher === 'hiremaster') {
      const scriptTag = document.createElement('script');

      scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=AW-318679524";
      scriptTag.async = true;

      document.body.appendChild(scriptTag);
      const scriptDataTag = document.createElement('script');

      scriptDataTag.innerHTML = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-318679524');";
      scriptDataTag.async = true;

      document.body.appendChild(scriptDataTag);

      return () => {
        document.body.removeChild(scriptTag);
        document.body.removeChild(scriptDataTag);
      }
    }

    // <!-- truckersreport script -->
		if (publisher && publisher === 'truckersreport') {
			const scriptDataTag = document.createElement('script');
	  
			scriptDataTag.innerHTML = "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WSRHSMN');";
			scriptDataTag.async = true;
	  
			document.body.appendChild(scriptDataTag);
	  
			return () => {
			  document.body.removeChild(scriptDataTag);
			}
		}
  }, []);

  useEffect(() => {
    if (landingPageData?.landingPage?.ga_lp) {
      // initialize trackers from the backend
      ReactGA.initialize( 
        [
          {
            trackingId: landingPageData?.landingPage?.ga_lp,
            gaOptions: { name: 'landingPageTracker' }
          },
          {
            trackingId: landingPageData?.landingPage?.ga_tp,
            gaOptions: { name: 'thankyouTracker' }
          }
        ],
        { debug: false, alwaysSendToDefaultTracker: false }
      );
      // landing page generic tracker
      ReactGA.pageview(window.location.pathname + window.location.search, ['landingPageTracker']);
    }
  }, [landingPageData]);

  if (publisher && publisher !== landingPageData?.publisher?.publisher) {
    navigate('/404');
  }

  //setLoading(false);

  return (
    <DocumentTitle title={landingPageData?.landingPage?.title || 'Landing Pages'}>
      <div>
        {
          isLoading &&
          <div className="loading-spinner">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        }
        <div className={isLoading ? 'hidden' : ''}>
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
      </div>
    </DocumentTitle>
  )
}

export default App;
