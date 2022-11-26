import React from 'react';
import './VersionC.css';
import FormComponent from '../components/FormComponent';

const toTopScroll = () => {
	window.scrollTo(0,0);
}

const backgroundColorCalc = (color) => {
	return window.innerWidth < 762 ? color : color + 'bf';
}

function VersionC(props) {

	// build out sections based on object data
	let sections = [];
	let landingPageData = props.pageData.landingPage;
	if (landingPageData.extra_section_1_title) {
		sections.push({
			title: landingPageData.extra_section_1_title,
			text: landingPageData.extra_section_1_caption,
			video: landingPageData.extra_section_1_video_link,
			image: landingPageData.extra_section_1_image,
		});
	}
	if (landingPageData.extra_section_2_title) {
		sections.push({
			title: landingPageData.extra_section_2_title,
			text: landingPageData.extra_section_2_caption,
			video: landingPageData.extra_section_2_video_link,
			image: landingPageData.extra_section_2_image,
		});
	}
	if (landingPageData.extra_section_3_title) {
		sections.push({
			title: landingPageData.extra_section_3_title,
			text: landingPageData.extra_section_3_caption,
			video: landingPageData.extra_section_3_video_link,
			image: landingPageData.extra_section_3_image,
		});
	}
	if (landingPageData.extra_section_4_title) {
		sections.push({
			title: landingPageData.extra_section_4_title,
			text: landingPageData.extra_section_4_caption,
			video: landingPageData.extra_section_4_video_link,
			image: landingPageData.extra_section_4_image,
		});
	}
	if (landingPageData.extra_section_5_title) {
		sections.push({
			title: landingPageData.extra_section_5_title,
			text: landingPageData.extra_section_5_caption,
			video: landingPageData.extra_section_5_video_link,
			image: landingPageData.extra_section_5_image,
		});
	}
	if (landingPageData.extra_section_6_title) {
		sections.push({
			title: landingPageData.extra_section_6_title,
			text: landingPageData.extra_section_6_caption,
			video: landingPageData.extra_section_6_video_link,
			image: landingPageData.extra_section_6_image,
		});
	}
	
  return (
	<div className="versionC">
	  <div className="main systrans-landing-page-1">
	    <div className="main-wrap">
	      <div className="">
	        <div id="sub-heading" className="sub-heading" style={{backgroundColor:backgroundColorCalc(props.pageData.client.color_scheme_sub_headline) }}>
	          <div className="sub-heading-wrap clearfix">
	            <div className={props.pageData.client.name === 'SYSTEMTRANS.COM' ? 'logo padding-17' : 'logo'}>
	            	<img src={`https://smartlandingpages.lacedagency.com/uploads/logos/${props.pageData.client.logo}`} alt="logo" />
	          	</div>
							<div className="sub-heading-phone">
	            	<span>Call now to speak with a recruiter</span>
	            	<h1>{props.pageData.landingPage.phone}</h1>
	          	</div>
	          </div>
	        </div>
	      <div className="btnGroup-mobile clearfix">
	        <div className="grouBtn-wrap">
	          <a style={{backgroundColor: props.pageData.client.color_scheme_accent}} href={'tel:' + props.pageData.landingPage.phone} id="callBtn" className="form-control-btn btn">Click to Call</a>
	          <a style={{backgroundColor: props.pageData.client.color_scheme_accent}} onClick={toTopScroll} id="quickFormBtn" className="form-control-btn btn">Quick Apply</a>
	        </div> 
	      </div>
	      <div className="top-container">
	        <div className="top-container-wrap">
		          <div className="landscape-container" style={{background: window.innerWidth <= 850 && props.pageData.landingPage.background_mobile ? `url(https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.background_mobile})` :  `url(https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.background})` }}>
		            <div className="landscape-wrap">
		              <FormComponent 
										isPreview={props.isPreview} 
										gaTag={props.pageData.landingPage.ga_lp} 
										landingPageName={props.landingPageName} 
										referralCode={props.pageData.landingPage.referral_code} 
										styleColors={props.pageData.client} 
										version={'VersionC'}
										phone={props.pageData.landingPage.phone}
										client={props.pageData.client.name}
									/>
		              <div id="main-description" className="main-description">
		                <div className="primary-description">
		                  <h3 dangerouslySetInnerHTML={{__html: props.pageData.landingPage.main_title}}></h3>
		                </div>
										<div className="main-video-holder padding-video-mobile">
		                	<iframe src={props.pageData.landingPage.primary_video_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
										</div>
									</div>
		            </div>
		          </div>
	        </div>
	      </div>
			<div className='middle-container'>
					<div className="sections">
								<div className="text">
									<p dangerouslySetInnerHTML={{__html: props.pageData.landingPage.main_description}}></p>
								</div>
					</div>
					<div className="sections">
								<div className={props.pageData.client.name === 'SYSTEMTRANS.COM' ? 'text route-options-text route-options-text-sys' : props.pageData.client.name === 'JJWILLIAMS.COM' ? 'text route-options-text route-options-text-jjw' : 'text route-options-text route-options-text-twt'}>
									<p dangerouslySetInnerHTML={{__html: props.pageData.landingPage.body_copy}}></p>
								</div>
					</div>
			</div>
			<div className="sectionals">
				{ sections.map((section, index) => {
						return (
						<div key={index} className="extra-section-container" style={index % 2 === 0 ? {backgroundColor: props.pageData.client.color_scheme_headline} : {backgroundColor: '#f2f3f4', flexDirection: 'row-reverse'}}>
							<div className="sections" style={index % 2 === 0 ? {color: 'white'} : {color: 'black'}}>
										<div className="text">
											<h2 style={index % 2 === 0 ? {color: 'white'} : {color: 'black'}}>
												{section.title}
											</h2>
											<p dangerouslySetInnerHTML={{__html: section.text}}></p>
										</div>
							</div>
							<div className="sections">
								<div className={section.video ? "padding-video-mobile video-image-holder" : "video-image-holder"}>
									{
										section.video ? (
										<iframe src={section.video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
										) : ( 
										<img src={`https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${section.image}`} alt="title" />
										)
									}
								</div>
							</div>
						</div> 
						)
					})
				}
			</div>
	    <div className="open-road" style={{backgroundImage: `url(https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.region_graphic})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
	    <div className="">
	      <h3>{props.pageData.landingPage.sub_title}</h3>
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
						<p dangerouslySetInnerHTML={{__html: props.pageData.landingPage.benef1_caption}}></p>
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
						<p dangerouslySetInnerHTML={{__html: props.pageData.landingPage.benef2_caption}}></p>
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
						<p dangerouslySetInnerHTML={{__html: props.pageData.landingPage.benef3_caption}}></p>
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
	          <p dangerouslySetInnerHTML={{__html: props.pageData.landingPage.benef4_caption}}></p>
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
	          <p dangerouslySetInnerHTML={{__html: props.pageData.landingPage.benef5_caption}}></p>
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
	          <p dangerouslySetInnerHTML={{__html: props.pageData.landingPage.benef6_caption}}></p>
	        </div>
	      </div>
	    </div>
	  </div>
	  <div className="map-section" style={{backgroundColor: props.pageData.client.color_scheme_headline}}>
	    <div className="grid-container">
	      <div>
	        <h2 style={{color: props.pageData.client.color_scheme_accent}}>{props.pageData.landingPage.body_image_4_title}</h2>
	      </div>
	      <div className="center">
	        <img src={`https://smartlandingpages.lacedagency.com/uploads/${props.landingPageName}/${props.pageData.landingPage.body_image_4}`} alt={props.pageData.landingPage.body_image_4_title} />
	      </div>
	    </div>
	  </div>
	  <div id="apply-form-overlay"></div>
	  <div className="footer-container">
	    <div className="footer-wrap">
	      <div className="phone-number-footer">
	        <h4>Call now to speak with a recruiter.</h4>
	        <h3 style={{color: props.pageData.client.color_scheme_accent}}>
	        {props.pageData.landingPage.phone}
	        </h3>
	      </div>
	      <div className="terms">
	        <p>
	          *BY COMPLETING THIS FORM, I AGREE TO RECEIVE CORRESPONDENCE FROM {props.pageData.client.name}. THIS INCLUDES RECEIVING TELEPHONE CALLS, PRERECORDED MESSAGES, TEXT MESSAGES AND EMAILS ABOUT TRUCKING JOB OPPORTUNITIES AT THE CONTACT NUMBER AND ADDRESS I HAVE PROVIDED ABOVE. I UNDERSTAND THAT I AM NOT REQUIRED TO PROVIDE MY CONSENT AS A CONDITION OF SUBMITTING MY APPLICATION.
	        </p>
	        <ul>
	          <li><a rel="noreferrer" href={props.pageData.client.website + 'privacy-policy'} target="_blank">Privacy Policy</a><span>|</span></li>
	          <li><a rel="noreferrer" target="blank" href={props.pageData.client.website}>{props.pageData.client.name}</a><span>|</span></li>
	          <li><a href={"https://intelliapp2.driverapponline.com/c/tsystem?r=" + props.pageData.landingPage.referral_code_intelliapp} target="_blank" rel="noreferrer">Online Application</a></li>
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

export default VersionC;
