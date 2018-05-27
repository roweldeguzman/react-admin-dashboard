import React, { Component, Fragment } from 'react'
import { Pagination } from 'react-bootstrap'
import PropTypes from 'prop-types'
export default class Paginate extends Component {
	constructor(props){
		super(props)
	}
	render() {
		let items = [];
		var pageHtml = '';
		var pmin = 0;
		var pmax = 0;
		var adjacents = 2;

		if (this.props.currentPage > (adjacents)) {
			items.push(<Pagination.Ellipsis key="ellipsis-left" />)
		}
		pmin = (this.props.currentPage > adjacents) ? (this.props.currentPage - adjacents) : 1;
		pmax = (this.props.currentPage < (this.props.total - adjacents)) ? (this.props.currentPage + adjacents) : this.props.total

		for (let i = pmin; i <= pmax; i++) {
			if (i == this.props.currentPage) {
				items.push(<Pagination.Item active key={i} >{i}</Pagination.Item>)
			}
			else {
				items.push(
					<Pagination.Item key={i} onClick={() => { this.props.method(i) }} >{i}</Pagination.Item>
				)
			}
		}
		if (this.props.currentPage < ((this.props.total - adjacents) - 1)) {
			items.push(<Pagination.Ellipsis key="ellipsis-right" />)
		}
		return (
			<Pagination key="left" className={this.props.className} bsSize={this.props.bsSize} >
				<Pagination.First onClick={() => { this.props.method(1) }} disabled={this.props.currentPage == 1}/>
				<Pagination.Prev onClick={() => { this.props.method(this.props.currentPage - 1) }} disabled={this.props.currentPage == 1}/>
				{items}
				<Pagination.Next onClick={() => { this.props.method(this.props.currentPage + 1) }} disabled={this.props.currentPage == this.props.total}/>
				<Pagination.Last onClick={() => { this.props.method(this.props.total) }} disabled={this.props.currentPage == this.props.total}/>
			</Pagination>
		);
	}
}

Paginate.propTypes = {
	total: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	method: PropTypes.func.isRequired,
	bsSize: PropTypes.string,
	className: PropTypes.string
}
