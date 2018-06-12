import React, { Component, Fragment } from 'react';

import HeaderModule from '../../../common/module-header';
import { Row, Col } from 'react-bootstrap';


import ReactTable from 'react-table'
import 'react-table/react-table.css';

import Ripple from '../../../components/ripple';
import { Input } from '../../../components/input';
const helper = require('../../../helper/helper').helper;

export default class DataTable extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{
					"id": 10238,
					"name": "Marc Barnes",
					"email": "marc.barnes54@example.com",
					"username": "MarcBarnes",
					"contact": "(382)-122-5003",
					"edit": false
				}, {
					"id": 10243,
					"name": "Glen Curtis",
					"email": "glen.curtis11@example.com",
					"username": "GlenCurtis",
					"contact": "(477)-981-4948",
					"edit": false
				}, {
					"id": 10248,
					"name": "Beverly Gonzalez",
					"email": "beverly.gonzalez54@example.com",
					"username": "BeverlyGonzalez",
					"contact": "(832)-255-5161",
					"edit": false
				}, {
					"id": 10253,
					"name": "Yvonne Chavez",
					"email": "yvonne.chavez@example.com",
					"username": "YvonneChavez",
					"contact": "(477)-446-3715",
					"edit": false
				}, {
					"id": 10234,
					"name": "Melinda Mitchelle",
					"email": "melinda@example.com",
					"username": "MelindaMitchelle",
					"contact": "(813)-716-4996",
					"edit": false

				}, {
					"id": 10239,
					"name": "Shannon Bradley",
					"email": "shannon.bradley42@example.com",
					"username": "ShannonBradley",
					"contact": "(774)-291-9928",
					"edit": false
				}, {
					"id": 10244,
					"name": "Virgil Kim",
					"email": "virgil.kim81@example.com",
					"username": "VirgilKim",
					"contact": "(219)-181-7898",
					"edit": false
				}, {
					"id": 10249,
					"name": "Letitia Robertson",
					"email": "letitia.rober@example.com",
					"username": "Letitia Robertson",
					"contact": "(647)-209-4589",
					"edit": false
				}, {
					"id": 10237,
					"name": "Claude King",
					"email": "claude.king22@example.com",
					"username": "ClaudeKing",
					"contact": "(657)-988-8701",
					"edit": false
				}, {
					"id": 10242,
					"name": "Roland Craig",
					"email": "roland.craig47@example.com",
					"username": "RolandCraig",
					"contact": "(932)-935-9471",
					"edit": false
				}, {
					"id": 10247,
					"name": "Colleen Parker",
					"email": "colleen.parker38@example.com",
					"username": "ColleenParker",
					"contact": "(857)-459-2792",
					"edit": false
				}, {
					"id": 10252,
					"name": "Leah Jensen",
					"email": "leah.jensen27@example.com",
					"username": "LeahJensen",
					"contact": "(861)-275-4686",
					"edit": false
				}, {
					"id": 10236,
					"name": "Harold Martinez",
					"email": "martinez67@example.com",
					"username": "HaroldMartinez",
					"contact": "(836)-634-9133",
					"edit": false
				}, {
					"id": 10241,
					"name": "Keith Lowe",
					"email": "keith.lowe96@example.com",
					"username": "KeithLowe",
					"contact": "(778)-787-3100",
					"edit": false
				}, {
					"id": 10246,
					"name": "Charles Walker",
					"email": "charles.walker90@example.com",
					"username": "CharlesWalker",
					"contact": "(486)-440-4716",
					"edit": false
				}, {
					"id": 10251,
					"name": "Lillie Curtis",
					"email": "lillie.curtis12@example.com",
					"username": "LillieCurtis",
					"contact": "(342)-510-2258",
					"edit": false
				}, {
					"id": 10235,
					"name": "Genesis Reynolds",
					"email": "genesis@example.com",
					"username": "GenesisReynolds",
					"contact": "(339)-375-1858",
					"edit": false
				}, {
					"id": 10240,
					"name": "Oscar Palmer",
					"email": "oscar.palmer24@example.com",
					"username": "OscarPalmer",
					"contact": "(544)-270-9912",
					"edit": false
				}, {
					"id": 10245,
					"name": "Lena Bishop",
					"email": "Lena Bishop",
					"username": "LenaBishop",
					"contact": "(177)-521-1556",
					"edit": false
				}, {
					"id": 10250,
					"name": "Kent Nguyen",
					"email": "kent.nguyen34@example.com",
					"username": "KentNguyen",
					"contact": "(506)-533-6801",
					"edit": false
				}
			]
		}
		this.renderEditable = this.renderEditable.bind(this);
		this.editRow = this.editRow.bind(this);
		this.editable = this.editable.bind(this);
	}
	/**
	 * 
	 * @param {original data value} data 
	 * @param {cellInfo that we need to determine what row is to edit} cellInfo 
	 */
	editRow(data, cellInfo){
		data[cellInfo.index]["edit"] = true;
		this.setState({ data });
	}
	/**
	 * 
	 * @param {original data value} data
	 * @param {cellInfo that we need to determine what row is to update} cellInfo
	 * @param {this is the button that has been click and a reference to get input value} event 
	 */
	updatRow(data, cellInfo, event) {
		/**
		 * get the parent div that isolated the inputs
		 */
		var parentTr = helper.parents('rt-tr', event.target, 'class');
		let id	= parentTr.querySelector("input[name='id']"),
			name = parentTr.querySelector("input[name='name']"),
			email = parentTr.querySelector("input[name='email']"),
			username = parentTr.querySelector("input[name='username']"),
			contact = parentTr.querySelector("input[name='contact']");
		/**
		 * pass the value to the selected cell to be updated
		*/
		data[cellInfo.index]["edit"] = false;
		data[cellInfo.index]["id"] = id.value;
		data[cellInfo.index]["name"] = name.value;
		data[cellInfo.index]["email"] = email.value;
		data[cellInfo.index]["username"] = username.value;
		data[cellInfo.index]["contact"] = contact.value;
		/**
		 * Update the state, you can also use the redux if the content is sharable to not dynamically updated.
		*/
		this.setState({ data });
	}
	renderEditable(cellInfo, state, rowInfo, column) {
		if (cellInfo.original.edit) {
			return (
				<Ripple type="button" className="btn btn-sm btn-success" onClick={(e) => {
					this.updatRow([...this.state.data], cellInfo, e)
				}} ><i className="zmdi zmdi-check" /></Ripple>
				
			);
		} else {
			return (
				<Ripple type="button" className="btn btn-sm btn-primary" onClick={(e) => {
					this.editRow([...this.state.data], cellInfo)
				}} ><i className="zmdi zmdi-edit" /></Ripple>
			);
		}
		
	}
	editable(cellInfo) {
		var data = [...this.state.data];
		if (cellInfo.original.edit) {
			return (
				<div className="form-group rg-float">
					<Input type="text" active="rg-toggled" className="form-control" name={cellInfo.column.id} defaultValue={data[cellInfo.index][cellInfo.column.id] } />
				</div>
			)
		} else {
			return data[cellInfo.index][cellInfo.column.id]
		}
	}
	render() {
		return (
			<Fragment>
				<HeaderModule text="React Data Tables">
					<small>
						<a href="https://react-table.js.org/#/story/readme" target="_blank">Read More...</a>
					</small>
				</HeaderModule>
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Basic Examples</h2>
							</div>
							<div className="card-body card-padding">
								<ReactTable className="-striped -highlight" defaultPageSize={10} data={this.state.data} columns={[
									{
										id: 'id',
										Header: props => <span className="text-left">Id</span>,
										accessor: 'id'
									}, {
										id: 'name',
										Header: 'Name',
										accessor: 'name',
									}, {
										id: 'email',
										Header: 'Email',
										accessor: 'email'
									}, {
										id: 'username',
										Header: 'Username',
										accessor: 'username'
									}, {
										id: 'contact',
										Header: 'Contact',
										accessor: 'contact'
									}
								]}/>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Column Filtering</h2>
							</div>
							<div className="card-body card-padding">
								<ReactTable className="-striped" defaultPageSize={10} filterable={true} data={this.state.data} columns={[
									{
										id: 'id',
										Header: props => <span className="text-left">Id</span>,
										accessor: 'id'
									}, {
										id: 'name',
										Header: 'Name',
										accessor: 'name',
									}, {
										id: 'email',
										Header: 'Email',
										accessor: 'email'
									}, {
										id: 'username',
										Header: 'Username',
										accessor: 'username'
									}, {
										id: 'contact',
										Header: 'Contact',
										accessor: 'contact'
									}
								]} />
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Editable</h2>
							</div>
							<div className="card-body card-padding">
								<ReactTable className="-striped -highlight" defaultPageSize={10} data={this.state.data} columns={[
									{
										id: 'id',
										Header: props => <span className="text-left">Id</span>,
										accessor: 'id',
										Cell: this.editable
									}, {
										id: 'name',
										Header: 'Name',
										accessor: 'name',
										Cell: this.editable
										
									}, {
										id: 'email',
										Header: 'Email',
										accessor: 'email',
										Cell: this.editable
									}, {
										id: 'username',
										Header: 'Username',
										accessor: 'username',
										Cell: this.editable
									}, {
										id: 'contact',
										Header: 'Contact',
										accessor: 'contact',
										Cell: this.editable
									}, {
										id: 'Actions',
										Header: 'Actions',
										accessor: '',
										Cell: this.renderEditable
									}
								]}/>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}