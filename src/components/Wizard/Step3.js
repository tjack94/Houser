import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateRent, updateMortgage } from '../../ducks/reducer';

class StepThree extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			address: '',
			city: '',
			state: '',
			zip: 0,
			url: '',
			mortgage: 0,
			rent: 0
		};
	}
	componentWillMount() {
		this.setState({
			name: this.props.name,
			address: this.props.address,
			city: this.props.city,
			state: this.props.state,
			zip: this.props.zip,
			url: this.props.url,
			mortgage: this.props.mortgage,
			rent: this.props.rent
		});
	}
	handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
	}
	handleSubmit() {
		this.props.updateMortgage(this.state.mortgage);
		this.props.updateRent(this.state.rent);
		const newHouse = {
			name: this.props.name,
			address: this.props.address,
			city: this.props.city,
			state: this.props.state1,
			zip: this.props.zip,
			url: this.props.url,
			mortgage: this.state.mortgage,
			rent: this.state.rent
		};
		axios.post('/api/house', newHouse).then(() => {});
	}
	render() {
		const { updateMortgage, updateRent } = this.props;
		return (
			<div className="step_two">
				<div>
					<b>Monthly Mortgage Amount</b>
					<input type="text" onChange={(e) => this.handleChange(e, "mortgage")} />

					<b>Desired Monthly Rent</b>
					<input type="text" onChange={(e) => this.handleChange(e, "rent")} />
				</div>
				<div>
					<Link to="/">
						<button className="next_button" onClick={() => this.handleSubmit()}>
							complete
						</button>
					</Link>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	const { name, address, city, state1, zip, url, mortgage, rent } = state;

	return {
		name,
		address,
		city,
		state1,
		zip,
		url,
		mortgage,
		rent
	};
}
export default connect(mapStateToProps, { updateMortgage, updateRent })(StepThree);
