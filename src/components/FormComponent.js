import React from 'react';
import { useDispatch } from 'react-redux';
import downArrow from '../images/down-arrow.png';
import anniversaryIcon from '../images/50th-logo-icon.png';
import { createApplicantData } from "../actions/landingpages";
import { useNavigate } from 'react-router-dom';
import './FormComponent.css';
import Form from 'react-bootstrap/Form';

const initialFormData = Object.freeze({
	first_name: "",
	last_name: "",
	email: "",
	phone_number: "",
	address: "",
	city: "",
	state: "",
	zip: "",
	experience: "",
	cdl: ""
});

const FormComponent = (props) => {
	const [ formData, setForm ] = React.useState(initialFormData)
	const [ errors, setErrors ] = React.useState({})
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = (e) => {
	    e.preventDefault()
	    console.log(formData);

	    const newErrors = findFormErrors()

	    if ( Object.keys(newErrors).length > 0 ) {

	      setErrors(newErrors)
	    } else {
	      dispatch(createApplicantData(formData));
	      navigate(
		    	'thank-you',
				{ state: formData }
			);
	    }
	};

	const setField = (field, value) => {
	    setForm({
	      ...formData,
	      [field]: value
	    })
	    if ( !!errors[field] ) setErrors({
	      ...errors,
	      [field]: null
	    })
	}

	const findFormErrors = () => {
	    const { 
	    	first_name, 
	    	last_name, 
	    	email, 
	    	phone_number,
	    	address,
	    	city,
	    	zip,
	    	state,
	    	cdl,
	    	experience
	    } = formData

	    const newErrors = {}
	    // name errors
	    if ( !first_name || first_name === '' ) newErrors.first_name = 'This is required.';
	    if ( !last_name || last_name === '' ) newErrors.last_name = 'This is required.';

	    if ( !email || email === '' ) newErrors.email = 'This is required.';
	    if ( !phone_number || phone_number === '' ) newErrors.phone_number = 'This is required.';
	    if ( !address || address === '' ) newErrors.address = 'This is required.';
	    if ( !city || city === '' ) newErrors.city = 'This is required.';
	    if ( !zip || zip === '' ) newErrors.zip = 'This is required.';

	    if ( !state || state === '' ) newErrors.state = 'This is required.';
	    if ( !experience || experience === '' ) newErrors.experience = 'This is required.';
	    if ( !cdl || cdl === '' ) newErrors.cdl = 'This is required.';

	    return newErrors;
	}

	console.log(props);


  return (
    

		<div className="leadForm" style={{ background: props.styleColors.color_scheme_headline }}>
		{
			props.version === 'VersionA' &&
			<div>
				<h2>Get Started Today.</h2>
				<img src={downArrow} alt="Form Icon" />
				<p>Fill out our short form below and a recruiter will call you.</p>
			</div>
		}

		{
			props.version === 'VersionB' &&
			<div>
				<h2>Apply Today.</h2>
				<img className="formImage" src={anniversaryIcon} alt="Form Icon" />
			</div>
		}
		   <form>
		      <div className={ props.version === 'VersionA' ? 'form-row': ''}>
		         <div className={ props.version === 'VersionA' ? 'col': 'form-group'}>
		         	<Form.Control 
		         		type='text' 
		         		onChange={ e => setField('first_name', e.target.value) }
		         		isInvalid={ !!errors.first_name }
		         		placeholder="First Name"
		         	/>
		         	<Form.Control.Feedback type='invalid'>
				        { errors.first_name }
				    </Form.Control.Feedback>
		         </div>
		         <div className={ props.version === 'VersionA' ? 'col': 'form-group'}>
		            <Form.Control 
		         		type='text' 
		         		onChange={ e => setField('last_name', e.target.value) }
		         		isInvalid={ !!errors.last_name }
		         		placeholder="Last Name"
		         	/>
		         	<Form.Control.Feedback type='invalid'>
				        { errors.last_name }
				    </Form.Control.Feedback>
		         </div>
		      </div>
		      <div className="form-group">
		         <Form.Control 
		         		type='email' 
		         		onChange={ e => setField('email', e.target.value) }
		         		isInvalid={ !!errors.email }
		         		placeholder="Email Address"
		         	/>
		         	<Form.Control.Feedback type='invalid'>
				        { errors.email }
				    </Form.Control.Feedback>
		      </div>
		      <div className="form-group">
		         <Form.Control 
		         		type='text' 
		         		onChange={ e => setField('phone_number', e.target.value) }
		         		isInvalid={ !!errors.phone_number }
		         		placeholder="Phone Number"
		         	/>
		         	<Form.Control.Feedback type='invalid'>
				        { errors.phone_number }
				    </Form.Control.Feedback>
		      </div>
		      <div className="form-group">
		         <Form.Control 
		         		type='text' 
		         		onChange={ e => setField('address', e.target.value) }
		         		isInvalid={ !!errors.address }
		         		placeholder="Street Address"
		         	/>
		         	<Form.Control.Feedback type='invalid'>
				        { errors.address }
				    </Form.Control.Feedback>
		      </div>
		      <div className="form-group">
		        <Form.Control 
		         		type='text' 
		         		onChange={ e => setField('city', e.target.value) }
		         		isInvalid={ !!errors.city }
		         		placeholder="City"
		         	/>
		         	<Form.Control.Feedback type='invalid'>
				        { errors.city }
				    </Form.Control.Feedback>
		      </div>
		      <div className="form-row">
		      <div className="col">
		         <Form.Control as='select' onChange={ e => setField('state', e.target.value) }
		         		isInvalid={ !!errors.state }>
		            <option value="">Select a State</option>
		            <option value="AL">Alabama</option>
		            <option value="AZ">Arizona</option>
		            <option value="AR">Arkansas</option>
		            <option value="CA">California</option>
		            <option value="CO">Colorado</option>
		            <option value="CT">Connecticut</option>
		            <option value="DE">Delaware</option>
		            <option value="DC">District Of Columbia</option>
		            <option value="FL">Florida</option>
		            <option value="GA">Georgia</option>
		            <option value="ID">Idaho</option>
		            <option value="IL">Illinois</option>
		            <option value="IN">Indiana</option>
		            <option value="IA">Iowa</option>
		            <option value="KS">Kansas</option>
		            <option value="KY">Kentucky</option>
		            <option value="LA">Louisiana</option>
		            <option value="MA">Massachusetts</option>
		            <option value="MI">Michigan</option>
		            <option value="MN">Minnesota</option>
		            <option value="MS">Mississippi</option>
		            <option value="MO">Missouri</option>
		            <option value="MT">Montana</option>
		            <option value="NE">Nebraska</option>
		            <option value="NV">Nevada</option>
		            <option value="NH">New Hampshire</option>
		            <option value="NJ">New Jersey</option>
		            <option value="NM">New Mexico</option>
		            <option value="NY">New York</option>
		            <option value="NC">North Carolina</option>
		            <option value="OH">Ohio</option>
		            <option value="OK">Oklahoma</option>
		            <option value="OR">Oregon</option>
		            <option value="PA">Pennsylvania</option>
		            <option value="RI">Rhode Island</option>
		            <option value="SC">South Carolina</option>
		            <option value="TN">Tennessee</option>
		            <option value="TX">Texas</option>
		            <option value="UT">Utah</option>
		            <option value="VA">Virginia</option>
		            <option value="WA">Washington</option>
		            <option value="WI">Wisconsin</option>
		            <option value="WY">Wyoming</option>
		          </Form.Control>
		          <Form.Control.Feedback type='invalid'>
				        { errors.state }
				    </Form.Control.Feedback>

		      </div>
		      <div className="col">
		         <Form.Control 
		         		type='text' 
		         		onChange={ e => setField('zip', e.target.value) }
		         		isInvalid={ !!errors.zip }
		         		placeholder="Zip Code"
		         	/>
		         	<Form.Control.Feedback type='invalid'>
				        { errors.zip }
				    </Form.Control.Feedback>
		      </div>
		      </div>
		      <div className="form-group">
		         <Form.Control as='select' onChange={ e => setField('experience', e.target.value) }
		         		isInvalid={ !!errors.experience }>
		            <option value="">Years of Experience?</option>
		            <option value="4-6-months">4 - 6 Months</option>
		            <option value="6-12-months">6 - 12 Months</option>
		            <option value="1-3-years">1 - 3 Years</option>
		            <option value="3-5 Years">3 - 5 Years</option>
		            <option value="5-plus-years">5+ Years</option>
		          </Form.Control>
		          <Form.Control.Feedback type='invalid'>
				        { errors.experience }
				    </Form.Control.Feedback>
		      </div>
		      <div className="form-group">
		         <Form.Control as='select' onChange={ e => setField('cdl', e.target.value) }
		         		isInvalid={ !!errors.cdl }>
		            <option value=''>Do you have your Class A CDL?</option>
		            <option value='1'>Yes</option>
		            <option value='0'>No</option>
		          </Form.Control>
		          <Form.Control.Feedback type='invalid'>
				        { errors.cdl }
				    </Form.Control.Feedback>
		      </div>
		      <div className="g-recaptcha" data-theme="dark" data-size="normal" data-sitekey="6LeBj8kaAAAAAK7kjxp5a8oHl2KTU4mIrFezWt_v"></div>
		      <button type="button" className="btn btn-primary submit-button" onClick={handleSubmit}>Submit Application</button>
		   </form>
		</div>
  );
}

export default FormComponent;
