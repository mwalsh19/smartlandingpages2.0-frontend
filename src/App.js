import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { retrieveLandingPage } from "./actions/landingpages";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import VersionA from './layouts/VersionA';
import VersionB from './layouts/VersionB';
import VersionC from './layouts/VersionC';
import DocumentTitle from 'react-document-title';
import { useNavigate } from 'react-router-dom';
//import ReactGA from 'react-ga';
import ReactGA from "react-ga4";

function App() {

  let { path, publisher, version } = useParams();
  // get the param to see if this is a preview
  const queryParams = new URLSearchParams(window.location.search);
  const preview = queryParams.get('preview') ? queryParams.get('preview') : false;
  let navigate = useNavigate();
  const landingPageData = useSelector((state) => state.landingpages);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(retrieveLandingPage(path, publisher, version));
    if (!preview) {
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

      // <!-- google script -->
      if (publisher && publisher === 'google') {
        const scriptTag = document.createElement('script');

        scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=AW-1069865639";
        scriptTag.async = true;

        document.body.appendChild(scriptTag);
        const scriptDataTag = document.createElement('script');

        //scriptDataTag.innerHTML = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-1069865639');";
        scriptDataTag.innerHTML = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-1069865639/qmu7CJKE5asBEKe1k_4D', {'phone_conversion_number': '866 696-3420'});function gtag_report_conversion(url) {var callback = function () {if (typeof(url) != 'undefined') {window.location = url;}};gtag('event', 'conversion', {'send_to': 'AW-1069865639/gJfhCIW776sBEKe1k_4D','event_callback': callback});return false;}";
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
    }
  }, []);

  useEffect(() => {

    if (!preview) {
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
        //ReactGA.pageview(window.location.pathname + window.location.search, ['landingPageTracker']);
        //ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
        ReactGA.initialize(landingPageData?.landingPage?.ga_lp);
        ReactGA.send("pageview");
      }
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
            <VersionA pageData={landingPageData} landingPageName={path} isPreview={preview} />
          }

          {
            landingPageData?.template?.name === 'VersionB' &&
            <VersionB pageData={landingPageData} landingPageName={path} isPreview={preview} />
          }

          {
            landingPageData?.template?.name === 'VersionC' &&
            <VersionC pageData={landingPageData} landingPageName={path} isPreview={preview} />
          }
        </div>
      </div>
    </DocumentTitle>
  )
}

export default App;
