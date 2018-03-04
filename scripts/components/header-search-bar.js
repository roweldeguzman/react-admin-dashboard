import React, { Component, Fragment } from 'react'

import Scrollbar from '../components/scrollbar';

export default class HeaderSearch extends Component {
	constructor(props) {
		super(props)
		this.state = {
			result: this.props.content
		}
		this.size = this.props.size;
		this.close = this.props.close;
		this.closeSearch = this.closeSearch.bind(this);
		this.hasClasses	= this.hasClasses.bind(this);
		this.processKeyDown = this.processKeyDown.bind(this)
		
		this.scroller;
	}
	componentDidMount() {
	}
	opensearch(){
		this.seachDropdown.style.display = "block";
		this.seachContainer.style.borderBottomLeftRadius = "0"
		this.seachContainer.style.borderBottomRightRadius = "0"
	}
	closeSearch(event){
		if (!event.relatedTarget || !this.hasClasses(event.relatedTarget, ["prevent-main-search-hide", "search-footer"])) {
			setTimeout(()=> {
				this.seachDropdown.style.display = "none";
				this.seachContainer.removeAttribute("style")
			}, 300);
		}
	}
	processKeyDown(event){
		if (event.keyCode == 38 || event.keyCode == 40) {
			let li 			= 	this.scroller.querySelectorAll("ul > li"),
				liActive 	= 	this.scroller.querySelector("ul > li.active");
			
			if (li.length > 0) {
				if (liActive == null){
					li[0].classList.add("active");
					this.scroller.scrollTop = 0;
				} else {
					let node = Array.prototype.slice.call(li);
					this.scroller.scrollTop = node.indexOf(liActive) * liActive.scrollHeight - 100;
				
					liActive.classList.remove("active");
					//Arrow Down
					if (event.keyCode == 40) {
						let nextElemToActive;
						if (liActive.nextSibling == null) {
							this.scroller.scrollTop = 0;
							nextElemToActive = li[0];
						} else {
							nextElemToActive = liActive.nextSibling;
						}

						nextElemToActive.classList.add("active")
					}
					//Arrow Up
					else if (event.keyCode == 38) {
						let nextElemToActive;
						if (liActive.previousSibling == null){
							this.scroller.scrollTop = this.scroller.scrollHeight;
							nextElemToActive = li[li.length - 1];
						} else {
							nextElemToActive = liActive.previousSibling;
						}
						nextElemToActive.classList.add("active");
					}
				}
			}
		}
	}
	showMore(){
		this.searchInput.focus();
		this.opensearch()
	}
	hasClasses(ele, classes) {
		for (let i = 0; i < classes.length; i++) {
			if (ele.classList.contains(classes[i])) {
				return true;
			}
		}
		return false;
	}
	setScrollerRef(ref){
		this.scroller = ref
	}
	componentWillReceiveProps(nextProps){
		this.setState({
			result: nextProps.content
		})
	}
	render() {
		return (
			<div className="search-div">
				<div className="seach-container" ref={(ref) => { this.seachContainer = ref }}>
					<IsMobile mobile={this.props.size == "mobile" ? true : false} close={this.props.close} />
					<input type="search" placeholder="Search..." className="main-search-menu-input" 
						onClick={ this.opensearch.bind(this) } 
						onBlur={(event) => { this.closeSearch(event) }} 
						onKeyDown={(event) => { this.processKeyDown(event) }}
						ref={ref => {this.searchInput = ref }} />
					<button className="btn prevent-main-search-hide" tabIndex="0" onClick={this.showMore.bind(this)} >
						<i className="zmdi zmdi-search prevent-main-search-hide" tabIndex="0"></i>
					</button>
					<div className="main-search-menu-dropdown" ref={(ref) => { this.seachDropdown = ref }}>
						
						<Scrollbar type="div" className="search-scroll" recieveRef={ this.setScrollerRef.bind(this) } onScroll={(event) => { this.props.scrollBottom(event)}} >
							<ul className="main-search-menu-result">
								{this.state.result.map((item, i)=>(
									<li key={i}><a className="no-hover search-result"> { item.content } </a></li>	
								))}
							</ul>
						</Scrollbar>
						<div className="search-footer" tabIndex="0" onClick={this.showMore.bind(this)} >More result</div>
					</div>
				</div>
			</div>
		)
	}
}
class IsMobile extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		if (this.props.mobile) {
			return (<Fragment>{this.props.close}</Fragment>)
		} else {
			return null
		}
	}
}