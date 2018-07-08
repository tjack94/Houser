import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Route } from 'react-router-dom';
import StepOne from './Step1';
import StepTwo from './Step2';
import StepThree from './Step3';
import { connect } from 'react-redux';
import { cancelInput } from '../../ducks/reducer';

class Wizard extends Component {
	render() {
		const { cancelInput } = this.props;
		return (
			<div className="wizard_container">
				<div className="wizard_header">
					<h2>Add New Listing</h2>
					<Link to="/">
						<button className="cancel_button" onClick={() => cancelInput()}>
							Cancel
						</button>
					</Link>
				</div>
				<Route path="/wizard/step1" component={StepOne} />
				<Route path="/wizard/step2" component={StepTwo} />
				<Route path="/wizard/step3" component={StepThree} />
			</div>
		);
	}
}

export default connect(null, { cancelInput })(Wizard);
