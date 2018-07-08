import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUrl } from '../../ducks/reducer';

class StepTwo extends Component {
	constructor() {
		super();
		this.state = {
			url: ''
		};
	}
	componentWillMount() {
		this.setState({
			url: this.props.url
		});
	}
	handleChange(string) {
		this.setState({ url: string });
	}
	render() {
		const { updateUrl } = this.props;
		return (
			<div className="step_two">
				<div>
					<b>Image URL</b>
					<input type="text" value={this.state.url} onChange={(e) => this.handleChange(e.target.value)} />
				</div>
				<div>
					<Link to="/wizard/step3">
						<button className="next_button" onClick={() => updateUrl(this.state.url)}>
							Next Step
						</button>
					</Link>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state) {
	const { url } = state;

	return {
		url
	};
}
export default connect(mapStateToProps, { updateUrl })(StepTwo);
