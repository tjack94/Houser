import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			houses: []
		};
	}
	componentWillMount() {
		this.getHouses();
	}
	componentDidUpdate () {
		this.getHouses();
	}
	getHouses() {
		axios.get('/api/houses').then((response) => {
			this.setState({ houses: response.data });
		});
	}
	deleteItem(id) {
		axios.delete(`/api/house/${id}`).then(() => this.getHouses());
	}
	render() {
		const houseList = this.state.houses.map((house, index) => {
			return <House key={index} currentHouse={house} getHouses={() => this.getHouses()} />;
		});
		return (
			<div className="dashboard_container">
				<div className="dashboard_header">
					<h1>Dashboard</h1>
					<Link to="/wizard/step1">
						<button>Add New Property</button>
					</Link>
				</div>
				<hr />
				<div className="houses_list">
					<h3>Home Listings</h3>
					{houseList}
				</div>
			</div>
		);
	}
}
export default Dashboard;

