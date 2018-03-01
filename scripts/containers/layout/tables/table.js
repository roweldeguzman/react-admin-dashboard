import React, { Component, Fragment } from 'react'
import HeaderModule from '../../../common/module-header'

import { Row, Col } from 'react-bootstrap'
export default class Table extends Component {
	constructor(props) {
		super(props)
		this.state = {
			table: [
				{
					id: 1,
					first_name: "Alexandra",
					last_name: "Christopher",
					username: "@makinton",
					nickname: "Ducky"
				},{
					id: 2,
					first_name: "Madeleine",
					last_name: "Hollaway",
					username: "@hollway",
					nickname: "Cheese"
				},{
					id: 3,
					first_name: "Sebastian",
					last_name: "Johnston",
					username: "@sebastian",
					nickname: "Jaycee"
				},{
					id: 4,
					first_name: "Mitchell",
					last_name: "Christin",
					username: "@mitchell4u",
					nickname: "AdskiDeAnus"
				},{
					id: 5,
					first_name: "Elizabeth",
					last_name: "Belkitt",
					username: "@belkitt",
					nickname: "Goat"
				},{
					id: 6,
					first_name: "Benjamin",
					last_name: "Parnell",
					username: "@wayne234",
					nickname: "Pokie"
				},{
					id: 7,
					first_name: "Katherine",
					last_name: "Buckland",
					username: "@anitabelle",
					nickname: "Wokie"
				},{
					id: 8,
					first_name: "Nicholas",
					last_name: "Walmart",
					username: "@mwalmart",
					nickname: "Spike"
				}
			]
		}
	}

	render() {
		return (
			<Fragment>
				<HeaderModule text="Table" />
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Basic Table
									<small>Basic example without any additional modification classes</small>
								</h2>
							</div>

							<div className="card-body table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th>#</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
											<th>Nickname</th>
										</tr>
									</thead>
									<tbody>
										{this.state.table.map((item, i)=>(
											<tr key={i}>
												<td>{item.id}</td>
												<td>{item.first_name}</td>
												<td>{item.last_name}</td>
												<td>{item.username}</td>
												<td>{item.nickname}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Basic Table
									<small>Basic example without any additional modification classes</small>
								</h2>
							</div>

							<div className="card-body table-responsive">
								<table className="table table-striped">
									<thead>
										<tr>
											<th>#</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
											<th>Nickname</th>
										</tr>
									</thead>
									<tbody>
										{this.state.table.map((item, i) => (
											<tr key={i}>
												<td>{item.id}</td>
												<td>{item.first_name}</td>
												<td>{item.last_name}</td>
												<td>{item.username}</td>
												<td>{item.nickname}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Bordered table
									<small>Tables with borders on all possible sides of the Table and Cells</small>
								</h2>
							</div>

							<div className="table-responsive">
								<table className="table table-bordered">
									<thead>
										<tr>
											<th>#</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
											<th>Nickname</th>
										</tr>
									</thead>
									<tbody>
										{this.state.table.map((item, i) => (
											<tr key={i}>
												<td>{item.id}</td>
												<td>{item.first_name}</td>
												<td>{item.last_name}</td>
												<td>{item.username}</td>
												<td>{item.nickname}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Hover Row
									<small>Enable a hover state on table rows within a tbody</small>
								</h2>
							</div>

							<div className="table-responsive">
								<table className="table table-hover">
									<thead>
										<tr>
											<th>#</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
											<th>Nickname</th>
										</tr>
									</thead>
									<tbody>
										{this.state.table.map((item, i) => (
											<tr key={i}>
												<td>{item.id}</td>
												<td>{item.first_name}</td>
												<td>{item.last_name}</td>
												<td>{item.username}</td>
												<td>{item.nickname}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Table Condensed
									<small>Make tables more compact by cutting cell padding in half.</small>
								</h2>
							</div>

							<div className="table-responsive">
								<table className="table table-condensed">
									<thead>
										<tr>
											<th>#</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
											<th>Nickname</th>
										</tr>
									</thead>
									<tbody>
										{this.state.table.map((item, i) => (
											<tr key={i}>
												<td>{item.id}</td>
												<td>{item.first_name}</td>
												<td>{item.last_name}</td>
												<td>{item.username}</td>
												<td>{item.nickname}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>

						<div className="card">
							<div className="card-header">
								<h2>Contextual classes
									<small>Use contextual classes to color table rows or individual cells.</small>
								</h2>
							</div>

							<div className="table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th>#</th>
											<th>First Name</th>
											<th>Last Name</th>
											<th>Username</th>
											<th>Nickname</th>
										</tr>
									</thead>
									<tbody>
										<tr className="active">
											<td>1</td>
											<td>Alexandra</td>
											<td>Christopher</td>
											<td>@makinton</td>
											<td>Ducky</td>
										</tr>
										<tr className="info">
											<td>3</td>
											<td>Sebastian</td>
											<td>Johnston</td>
											<td>@sebastian</td>
											<td>Jaycee</td>
										</tr>
										<tr className="warning">
											<td>4</td>
											<td>Mitchell</td>
											<td>Christin</td>
											<td>@mitchell4u</td>
											<td>AdskiDeAnus</td>
										</tr>
										<tr className="success">
											<td>2</td>
											<td>Madeleine</td>
											<td>Hollaway</td>
											<td>@hollway</td>
											<td>Cheese</td>
										</tr>
										<tr className="danger">
											<td>5</td>
											<td>Elizabeth</td>
											<td>Belkitt</td>
											<td>@belkitt</td>
											<td>Goat</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		)
	}
}