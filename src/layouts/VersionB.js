 import React from 'react';
import './VersionB.css';
import anniversaryIcon from '../images/50th-logo-icon.png';
import FormComponent from '../components/FormComponent';

function VersionB(props) {
  return (
    <div className="versionB">
	  <div className="main systrans-landing-page-1">
	    <div className="main-wrap">
	      <div className="">
	        <div id="sub-heading" className="sub-heading">
	          <div className="sub-heading-wrap clearfix">
	            <div className="logo">
	            	<img src={`https://smartlandingpages.lacedagency.com/uploads/logos/${props.pageData.client.logo}`} alt="logo" />
	          	</div>
	          <div className="sub-heading-phone">
	            <span>Call now to speak with a recruiter</span>
	            <h1 style={{color: props.pageData.client.color_scheme_headline}}>{props.pageData.landingPage.phone}</h1>
	          </div>
	        </div>
	      </div>
	      <div className="btnGroup-mobile clearfix">
	      	<img src={anniversaryIcon} alt="annivesary" />
	        <div className="grouBtn-wrap">
	          <a href={'tel:' + props.pageData.landingPage.phone} id="callBtn" className="form-control-btn btn">Call {props.pageData.landingPage.phone}</a>
	          <a href="#quickForm" id="quickFormBtn" className="form-control-btn btn">Quick Apply</a>
	        </div> 
	      </div>
	      <div className="top-container">
	        <div className="top-container-wrap">
	          <div className="landscape-container" style={{background: `url(https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.background})`}}>
	            <img className="landscape-image-mobile" src={`https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.background}`} alt="Background" />
	            <FormComponent landingPageName={props.landingPageName} referralCode={props.pageData.landingPage.referral_code} styleColors={props.pageData.client} version={props.pageData.template.name} />
	            <div className="landscape-wrap">
	              <div id="main-description" className="main-description">
	                <div className="primary-description">
	                  <h3 dangerouslySetInnerHTML={{__html: props.pageData.landingPage.main_title}}></h3>
	                </div>
	                <div className="secondary-description desktop-only" dangerouslySetInnerHTML={{__html: props.pageData.landingPage.main_description}}>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	      <div className="icon-section">
	    <div className="grid-container">
	      <div>
	        <h2>EXCELLENT BENEFITS</h2>
	      </div>
	      <div className="icons col-3 item1 inline-block center">
	        <div className="inline-block">
	          <img src={`https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.benef1_figure}`} alt={props.pageData.landingPage.benef1_caption_title} />
	        </div>
	        <div className="inline-block section-text">
	          <h3>
	            {props.pageData.landingPage.benef1_caption_title}
	          </h3>
	          <p>
	            {props.pageData.landingPage.benef1_caption}
	          </p>
	        </div>
	      </div>
	      <div className="icons col-3 item2 inline-block center">
	        <div className="inline-block">
	          <img src={`https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.benef2_figure}`} alt={props.pageData.landingPage.benef2_caption_title} />
	        </div>
	        <div className="inline-block section-text">
	          <h3>
	            {props.pageData.landingPage.benef2_caption_title}
	          </h3>
	          <p>
	            {props.pageData.landingPage.benef2_caption}
	          </p>
	        </div>
	      </div>
	      <div className="icons col-3 item3 inline-block center">
	        <div className="inline-block">
	          <img src={`https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.benef3_figure}`} alt={props.pageData.landingPage.benef3_caption_title} />
	        </div>
	        <div className="inline-block section-text">
	          <h3>
	            {props.pageData.landingPage.benef3_caption_title}
	          </h3>
	          <p>
	            {props.pageData.landingPage.benef3_caption}
	          </p>
	        </div>
	      </div>
	      <div className="icons col-3 item4 inline-block center">
	        <div className="inline-block">
	          <img src={`https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.benef4_figure}`} alt={props.pageData.landingPage.benef4_caption_title} />
	        </div>
	        <div className="inline-block section-text">
	          <h3>
	            {props.pageData.landingPage.benef4_caption_title}
	          </h3>
	          <p>
	            {props.pageData.landingPage.benef4_caption}
	          </p>
	        </div>
	      </div>
	      <div className="icons col-3 item5 inline-block center">
	        <div className="inline-block">
	          <img src={`https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.benef5_figure}`} alt={props.pageData.landingPage.benef5_caption_title} />
	        </div>
	        <div className="inline-block section-text">
	          <h3>
	            {props.pageData.landingPage.benef5_caption_title}
	          </h3>
	          <p>
	            {props.pageData.landingPage.benef5_caption}
	          </p>
	        </div>
	      </div>
	      <div className="icons col-3 item6 inline-block center">
	        <div className="inline-block">
	          <img src={`https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.benef6_figure}`} alt={props.pageData.landingPage.benef6_caption_title} />
	        </div>
	        <div className="inline-block section-text">
	          <h3>
	            {props.pageData.landingPage.benef6_caption_title}
	          </h3>
	          <p>
	            {props.pageData.landingPage.benef6_caption}
	          </p>
	        </div>
	      </div>
	    </div>
	  </div>

	      <div className="middle-container relative">
	        <div className="row middle-container-wrap clearfix">
	          <div className="col-2 col first">
	            <div className="text">
	              <div className="middle-copy flex-center">
	                <div className="copy" dangerouslySetInnerHTML={{__html: props.pageData.landingPage.body_copy}}>
	                </div>
	              </div>
	            </div>
	          </div>
	          <div className="col-2 col background-middle second" style={{backgroundImage: `url(https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.body_image_2})`}}>
	        </div>
	      </div>
	    </div>
	    <div className="map-section">
	    <div className="grid-container">
	      <div>
	        <h2 style={{color: props.pageData.client.color_scheme_headline}}>{props.pageData.landingPage.body_image_4_title}</h2>
	      </div>
	      <div className="center">
	        <img src={`https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.body_image_4}`} alt={props.pageData.landingPage.body_image_4_title} />
	      </div>
	    </div>
	  </div>
	    <div className="open-road" style={{backgroundImage: `url(https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.region_graphic})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
	    <div className="">
	      <h3>{props.pageData.landingPage.sub_title}</h3>
	    </div>
	  </div>
	  
	  
	  <div id="apply-form-overlay"></div>
	  <div className="footer-container">
	    <div className="footer-wrap">
	      <div className="phone-number-footer">
	        <h4>Call now to speak with a recruiter.</h4>
	        <h3 style={{color: props.pageData.client.color_scheme_headline}}>
	        {props.pageData.landingPage.phone}
	        </h3>
	      </div>
	      <div className="terms">
	        <p>
	          *BY COMPLETING THIS FORM, I AGREE TO RECEIVE CORRESPONDENCE FROM {props.pageData.client.name}. THIS INCLUDES RECEIVING TELEPHONE CALLS, PRERECORDED MESSAGES, TEXT MESSAGES AND EMAILS ABOUT TRUCKING JOB OPPORTUNITIES AT THE CONTACT NUMBER AND ADDRESS I HAVE PROVIDED ABOVE. I UNDERSTAND THAT I AM NOT REQUIRED TO PROVIDE MY CONSENT AS A CONDITION OF SUBMITTING MY APPLICATION.
	        </p>
	        <ul>
	          <li><a href="/" target="_blank">Privacy Policy</a><span>|</span></li>
	          <li><a rel="noreferrer" target="blank" href={props.pageData.client.website}>{props.pageData.client.name}</a><span>|</span></li>
	          <li><a href="https://intelliapp2.driverapponline.com/c/<?php echo $intellaappPath; ?>?r=<?php echo $data->intelliapp_referral_code ?>" target="_blank" rel="noreferrer">Online Application</a></li>
	        </ul>
	      </div>
	    </div>
	  </div>
	</div>
	</div>
	</div>
	</div>
  );
}

export default VersionB;
