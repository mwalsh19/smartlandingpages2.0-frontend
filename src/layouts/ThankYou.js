import React from 'react';
import './Thankyou.css';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import DocumentTitle from 'react-document-title';
import fbIconST from '../images/fb-icon-st.png';
import fbIconJJW from '../images/fb-icon-jjw.png';
import fbIconTWT from '../images/fb-icon-twt.png';
import igIconST from '../images/ig-icon-st.png';
import igIconJJW from '../images/ig-icon-jjw.png';
import igIconTWT from '../images/ig-icon-twt.png';
import ReactPixel from 'react-facebook-pixel';
// import ReactGA from 'react-ga';
import ReactGA from "react-ga4";
import { useParams } from "react-router-dom";

const ThankYou = () => {
	const location = useLocation();
	const landingPageData = useSelector((state) => state.landingpages);
	let { publisher } = useParams();
	// get the param to see if this is a preview
  const queryParams = new URLSearchParams(window.location.search);
	const preview = queryParams.get('preview') ? queryParams.get('preview') : false;
	//console.log(landingPageData);
	window.scrollTo(0,0);

	useEffect(() => {
		if (!preview) {
      // thank you page generic tracker
			if (landingPageData?.landingPage?.ga_tp) {
				ReactGA.ga('thankyouTracker.send', 'pageview', {'page': window.location.pathname + window.location.search });
			}

			if (landingPageData?.publisher?.publisher_thank_you_tracking_code) {
				ReactGA.ga('publisherThankyouTracker.send', 'pageview', {'page': window.location.pathname + window.location.search });
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
			// google conversion
			if (publisher && publisher === 'google') {
				const scriptTag = document.createElement('script');

				scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=AW-1069865639";
				scriptTag.async = true;

				document.body.appendChild(scriptTag);

				const scriptDataTag = document.createElement('script');

				scriptDataTag.innerHTML = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-1069865639');";
				scriptDataTag.async = true;

				document.body.appendChild(scriptDataTag);

				const scriptInitTag = document.createElement('script');

				scriptInitTag.innerHTML = "gtag('event', 'conversion', {'send_to': 'AW-1069865639/qZTACO7TuqkBEKe1k_4D'});";
				scriptInitTag.async = true;

				document.body.appendChild(scriptInitTag);

				return () => {
					document.body.removeChild(scriptTag);
					document.body.removeChild(scriptInitTag);
					document.body.removeChild(scriptDataTag);
				}
			}

			// <!-- hiremaster conversion script -->
			if (publisher && publisher === 'hiremaster') {
				const scriptTag = document.createElement('script');
			
				scriptTag.src = "https://www.googletagmanager.com/gtag/js?id=AW-318679524";
				scriptTag.async = true;
			
				document.body.appendChild(scriptTag);
				const scriptDataTag = document.createElement('script');
			
				scriptDataTag.innerHTML = "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'AW-318679524');";
				scriptDataTag.async = true;
			
				document.body.appendChild(scriptDataTag);

				const scriptInitTag = document.createElement('script');

				scriptInitTag.innerHTML = "gtag('event', 'conversion', {'send_to': 'AW-318679524/KbRyCO2_nvYCEOTT-pcB'});";
				scriptInitTag.async = true;

				document.body.appendChild(scriptInitTag);

			
				return () => {
					document.body.removeChild(scriptTag);
					document.body.removeChild(scriptDataTag);
					document.body.removeChild(scriptDataTag);
				}
			}
		}

  }, [location]);

	if (!preview) {
		// facebook pixel
		ReactPixel.init('824397174323085');
		ReactPixel.pageView(); // For tracking page view
	}

	// apply now tracking click event
	const handleApplyNowEvent = () => {
		// ReactGA.initialize(landingPageData?.landingPage?.ga_tp, {debug: true});
		ReactGA.initialize(landingPageData?.landingPage?.ga_tp);
		ReactGA.event({
			category: 'ThankYouPage',
			action: 'Click',
			label: 'ApplyNow',
			value: 1
		},/* ['thankyouTracker']*/);
	}

	const clientNameMap = {
		'SYSTEMTRANS.COM': 'System Transport',
		'JJWILLIAMS.COM': 'James J. Williams',
		'TWTRANS.COM': 'TW Transport',
	};

	const displayName = clientNameMap[landingPageData?.client?.name] || null;

	const classACDL = location.state.cdl;
	const withinRadiusArea = location.state.withinRadiusArea;
	// console.log('classACDL', classACDL);
	// console.log('withinRadiusArea', withinRadiusArea);
	

  return (
  	<DocumentTitle title={'Thank You'}>
	    <div className="thank-you">
		      <div className="main-wrap">
			    <div id="sub-heading" className="sub-heading">
			            <div className="sub-heading-wrap clearfix">
			                <div className="logo" style={{ backgroundImage: `url(https://smartlandingpages.lacedagency.com/uploads/logos/${landingPageData.client.logo})` }}></div>
			                <div className="sub-heading-phone">
			                    <span>Call now to speak with a recruiter</span>
			                    <h1 style={{color: landingPageData?.client.color_scheme_accent}}>{landingPageData?.landingPage?.phone}</h1>
			                </div>
			            </div>
			    </div>
				{
					landingPageData.publisher.pixel &&
					<img className="pixel" src={landingPageData.publisher.pixel} width="1" height="1" alt="pixel" />
				}
			    <div className="header">
			      <div className="header-wrap">
			        <div className="checked-icon"></div>
			        <div className="header-copy">
						<h1>Thanks {location.state.first_name}!</h1>

						{displayName === 'System Transport' && (
							classACDL === '0' ? (
								<div className='no-cdl-verbiage'>
								<p>
									We received your quick application, but it looks like you don’t have a Class A CDL license.<br />
									All our drivers are required to have a valid Class A CDL to be eligible for employment.
								</p>

								<p>
									If this was an error, contact your recruiter at:<br /> 
									<span className='no-cdl-sub-heading'>{landingPageData?.landingPage?.phone}</span>
								</p>

								<p>
									To obtain your Class A CDL, search online for “
									<a rel="noreferrer" target="_blank" href="https://www.google.com/search?q=CDL+Driving+Schools+near+me">
									CDL Driving Schools Near Me
									</a>.”<br />
									We will reimburse up to $5,000 of your driving school tuition to help you get your CDL and drive with us.*
								</p>

								<p>
									<span className='no-cdl-sub-heading2'>BOOKMARK OUR JOBS FEED</span><br />
									<a rel="noreferrer" target="_blank" href="https://cdljobs.systemtrans.com">https://cdljobs.systemtrans.com</a>
								</p>

								<p className='disclaimer'>
									*CDL Schools’ inclusion in your search results do not constitute an endorsement by System Transport nor our parent company Trans-System, Inc. 
									Tuition reimbursement is paid out over the course of your first year of employment with us. Contact your recruiter for more information.
								</p>
								</div>
							) : !withinRadiusArea ? (
								<div className='out-of-area-verbiage'>
								  <p>
								  	We received your quick application - unfortunately, we are not hiring in your area at this time.
								  </p>

								  <p>
								  	But we’re growing and our needs are always changing. Check our jobs feed regularly for openings in the future.<br /> 
									We’re excited for you to join the System Transport family!
								  </p>

								  <p>
									<span className='out-of-area-sub-heading2'>BOOKMARK OUR JOBS FEED</span><br />
									<a rel="noreferrer" target="_blank" href="https://cdljobs.systemtrans.com">https://cdljobs.systemtrans.com</a>
								  </p>
								</div>
							) : (
								<div>
								<p>
									A recruiter will be contacting you soon.<br />
									In a hurry? Speed up the process by completing your full application online now!
								</p>
								<a
									target="_blank"
									rel="noreferrer"
									href={
									"https://intelliapp.driverapponline.com/c/tsystem?r=" +
									landingPageData.landingPage.referral_code_intelliapp
									}
									id="applyNowBtn"
									className="form-control-btn btn"
									onClick={handleApplyNowEvent}
									style={{ backgroundColor: landingPageData?.client.color_scheme_accent }}
								>
									COMPLETE THE FULL APPLICATION NOW!
								</a>
								</div>
							)
						)}

						{
							displayName !== 'System Transport' && 
							<div>
								<p>
									A recruiter will be contacting you soon.<br />
									In a hurry? Speed up the process by completing your full application online now!
								</p>
								<a
									target="_blank"
									rel="noreferrer"
									href={
									"https://intelliapp.driverapponline.com/c/tsystem?r=" +
									landingPageData.landingPage.referral_code_intelliapp
									}
									id="applyNowBtn"
									className="form-control-btn btn"
									onClick={handleApplyNowEvent}
									style={{ backgroundColor: landingPageData?.client.color_scheme_accent }}
								>
									COMPLETE THE FULL APPLICATION NOW!
								</a>
								</div>
						}

						</div>
			      </div>
			    </div>
			    <div className="middle-container no-background-color">
				{displayName === 'System Transport' && (
					classACDL === '1' &&
					withinRadiusArea && (
						<div className="middle-wrap">
						<h4>Call now to speak to a recruiter</h4>
						<div className="sub-heading-phone center">
							<h1 style={{ color: landingPageData?.client.color_scheme_accent }}>
							{landingPageData?.landingPage?.phone}
							</h1>
						</div>
						<p>
							If you are not ready at this time, you will be receiving an email shortly <br />
							with the above information so you can apply at your convenience.
						</p>
						</div>
					)
				)}
				{displayName !== 'System Transport' && (
					<div className="middle-wrap">
					<h4>Call now to speak to a recruiter</h4>
					<div className="sub-heading-phone center">
						<h1 style={{ color: landingPageData?.client.color_scheme_accent }}>
						{landingPageData?.landingPage?.phone}
						</h1>
					</div>
					<p>
						If you are not ready at this time, you will be receiving an email shortly <br />
						with the above information so you can apply at your convenience.
					</p>
					</div>
				)}
			    </div>
			     <div className="middle-container">
			      <div className="middle-wrap">
			        <h2 className="heading">JOIN OUR COMMUNITY!</h2>
			        <p>Join our fast-growing community on your favorite social networks for news, tips, photos and a place to share your experiences.
			         Or check us out to see what it's like to be a part of the {displayName} family!</p>
			         <div className="social">
					 	{landingPageData.client.name === 'SYSTEMTRANS.COM' &&
							<div> 
								<a rel="noreferrer" href="https://www.facebook.com/SystemTransport/" target="_blank"><img src={fbIconST} alt="facebook" /></a>
			          			<a rel="noreferrer" href="https://www.instagram.com/system_transport/" target="_blank"><img src={igIconST} alt="instagram" /></a>
							</div>
						}
						{landingPageData.client.name === 'JJWILLIAMS.COM' &&
							<div> 
								<a rel="noreferrer" href="https://www.facebook.com/JamesJWilliamsTankers" target="_blank"><img src={fbIconJJW} alt="facebook" /></a>
			          			<a rel="noreferrer" href="https://www.instagram.com/james.j.williams/" target="_blank"><img src={igIconJJW} alt="instagram" /></a>
							</div>
						}
						{landingPageData.client.name === 'TWTRANS.COM' &&
							<div> 
								<a rel="noreferrer" href="https://www.facebook.com/TWTRefrigerated" target="_blank"><img src={fbIconTWT} alt="facebook" /></a>
			          			<a rel="noreferrer" href="https://www.instagram.com/twt_refrigerated/" target="_blank"><img src={igIconTWT} alt="instagram" /></a>
							</div>
						}
			          </div> 
			      </div>
			    </div>

			    <div className="footer-container">
			            <div className="footer-wrap">
			                <div className="phone-number-footer">
			                    <h4>Call now to speak with a recruiter.</h4>
			                    <h3 style={{color: landingPageData?.client.color_scheme_accent}}>{landingPageData?.landingPage?.phone}</h3>
			                </div>
			                <div className="terms">
			                    <p>
			                        *BY COMPLETING THIS FORM, I AGREE TO RECEIVE CORRESPONDENCE FROM {landingPageData.client.name}. THIS INCLUDES RECEIVING TELEPHONE CALLS, PRERECORDED MESSAGES, TEXT MESSAGES AND EMAILS ABOUT TRUCKING JOB OPPORTUNITIES AT THE CONTACT NUMBER AND ADDRESS I HAVE PROVIDED ABOVE. I UNDERSTAND THAT I AM NOT REQUIRED TO PROVIDE MY CONSENT AS A CONDITION OF SUBMITTING MY APPLICATION.
			                    </p>
			                    <ul>
			                        <li><a rel="noreferrer" href={landingPageData.client.website + 'privacy-policy'} target="_blank">Privacy Policy</a><span>|</span></li>
			                        <li><a rel="noreferrer" target="blank" href={landingPageData.client.website}>{landingPageData.client.name}</a><span>|</span></li>
			                        <li><a rel="noreferrer" href={"https://intelliapp.driverapponline.com/c/tsystem?r=" + landingPageData.landingPage.referral_code_intelliapp} target="_blank">Online Application</a></li>
			                    </ul>
			                </div>
			            </div>
			        </div>
			  </div>
	    </div>
	</DocumentTitle>
  );
}

export default ThankYou;
