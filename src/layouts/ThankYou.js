import React from 'react';
import './Thankyou.css';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';

const ThankYou = () => {
	const location = useLocation();
	const landingPageData = useSelector((state) => state.landingpages);
	//console.log(landingPageData);
	window.scrollTo(0,0);

	useEffect(() => {
       //console.log(location.state);
    }, [location]);

  return (
    <div className="App">
	      <div className="main-wrap">
		    <div id="sub-heading" className="sub-heading">
		            <div className="sub-heading-wrap clearfix">
		                <div className="logo" style={{ backgroundImage: `url(https://smartlandingpages.lacedagency.com/uploads/logos/${landingPageData.client.logo})` }}></div>
		                <div className="sub-heading-phone">
		                    <span>Call now to speak with a recruiter</span>
		                    <h1 style={{color: landingPageData?.client.color_scheme_headline}}>{landingPageData?.landingPage?.phone}</h1>
		                </div>
		            </div>
		    </div>
		    <div className="header">
		      <div className="header-wrap">
		        <div className="checked-icon"></div>
		        <div className="header-copy">
		          <h1>Thanks {location.state.first_name}!</h1>
		          <p>A recruiter will be contacting you soon.<br />
		            Click below if you would like to complete our full online application.</p>
		          <a target="_blank" rel="noreferrer" href="https://intelliapp.driverapponline.com/c/<?php echo $intellaappPath; ?>?r=<?php echo $intelliapp_referral_code; ?>" id="applyNowBtn" className="form-control-btn btn">Apply Now</a>
		        </div>
		      </div>
		    </div>
		    <div className="middle-container no-background-color">
		      <div className="middle-wrap">
		        <h4>Call now to speak to a recruiter</h4>
		        <div className="sub-heading-phone center">
		            <h1 style={{color: landingPageData?.client.color_scheme_headline}}>{landingPageData?.landingPage?.phone}</h1>
		        </div>
		        <p>If you are not ready at this time, you will be receiving an email shortly <br />
		          with the above information so you can apply at your convenience.</p>
		      </div>
		    </div>
		     <div className="middle-container">
		      <div className="middle-wrap">
		        <h2 className="heading">JOIN OUR COMMUNITY!</h2>
		        <p>Join our fast-growing community on your favorite social networks for news, tips, photos and a place to share your experiences.
		         Or check us out to see what it's like to be a part of the {landingPageData?.client.name} family!</p>
		         <div className="social">
		          <a href="<?php echo $fb_url ?>" target="_blank"><img src="https://systemtrans.com/landing-pages/vendor/systrans/systrans/images/fb-icon-st.png" alt="facebook" /></a>
		          <a href="<?php echo $ig_url ?>" target="_blank"><img src="https://systemtrans.com/landing-pages/vendor/systrans/systrans/images/ig-icon-st.png" alt="instagram" /></a>
		         </div> 
		      </div>
		    </div>

		    <div className="footer-container">
		            <div className="footer-wrap">
		                <div className="phone-number-footer">
		                    <h4>Call now to speak with a recruiter.</h4>
		                    <h3 style={{color: landingPageData?.client.color_scheme_headline}}>{landingPageData?.landingPage?.phone}</h3>
		                </div>
		                <div className="terms">
		                    <p>
		                        *BY COMPLETING THIS FORM, I AGREE TO RECEIVE CORRESPONDENCE FROM {landingPageData.client.name}. THIS INCLUDES RECEIVING TELEPHONE CALLS, PRERECORDED MESSAGES, TEXT MESSAGES AND EMAILS ABOUT TRUCKING JOB OPPORTUNITIES AT THE CONTACT NUMBER AND ADDRESS I HAVE PROVIDED ABOVE. I UNDERSTAND THAT I AM NOT REQUIRED TO PROVIDE MY CONSENT AS A CONDITION OF SUBMITTING MY APPLICATION.
		                    </p>
		                    <ul>
		                        <li><a href="<?php echo $privacy_url; ?>" target="_blank">Privacy Policy</a><span>|</span></li>
		                        <li><a rel="noreferrer" target="blank" href={landingPageData.client.website}>{landingPageData.client.name}</a><span>|</span></li>
		                        <li><a rel="noreferrer" href="https://intelliapp.driverapponline.com/c/<?php echo $intellaappPath; ?>?r=<?php echo $intelliapp_referral_code; ?>" target="_blank">Online Application</a></li>
		                    </ul>
		                </div>
		            </div>
		        </div>
		  </div>
    </div>
  );
}

export default ThankYou;
