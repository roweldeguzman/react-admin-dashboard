import React, { Component, Fragment } from 'react'
import HeaderModule from '../../../common/module-header'

import {Row, Col, NavDropdown, MenuItem} from 'react-bootstrap'

class Typography extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Fragment>
				<HeaderModule text="Typography"/>
				<Row>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Body Copy</h2>
								<ul className="actions">
									<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
										<MenuItem className="dropdown-arrow"></MenuItem>
										<MenuItem>You can add anything here</MenuItem>
									</NavDropdown>
								</ul>
							</div>
							<div className="card-body card-padding">
								<p className="lead">
									Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
								</p>
								<p>
									Pellentesque lacinia sagittis libero et feugiat. Etiam volutpat adipiscing tortor non luctus. Vivamus venenatis vitae metus et aliquet. Praesent vitae justo purus. In hendrerit lorem nisl, ac lacinia urna aliquet non. Quisque nisi tellus, rhoncus quis est sit amet, lacinia euismod nunc. Aenean nec nibh velit. Fusce quis ante in nisl molestie fringilla. Nunc vitae ante id magna feugiat condimentum. Maecenas sit amet urna massa.
								</p>
								<p>
									Integer eu lectus sollicitudin, hendrerit est ac, sollicitudin nisl. Quisque viverra sodales lectus nec ultrices. Fusce elit dolor, dignissim a nunc id, varius suscipit turpis. Cras porttitor turpis vitae leo accumsan molestie. Morbi vitae luctus leo. Sed nec scelerisque magna, et adipiscing est. Proin lobortis lectus eu sem ullamcorper, commodo malesuada quam fringilla. Curabitur ac nunc dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sagittis enim eu est lacinia, ut egestas ligula imperdiet.
								</p>
							</div>
						</div>
					</Col>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Headings</h2>
								<ul className="actions">
									<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
										<MenuItem className="dropdown-arrow"></MenuItem>
										<MenuItem>You can add anything here</MenuItem>
									</NavDropdown>
								</ul>
							</div>
							<div className="card-body card-padding">
								<h1>This is a Heading 1</h1>
								<p>Suspendisse vel quam malesuada, aliquet sem sit amet, fringilla elit. Morbi tempor tincidunt tempor. Etiam id turpis viverra, vulputate sapien nec, varius sem. Curabitur ullamcorper fringilla eleifend. In ut eros hendrerit est consequat posuere et at velit.</p>
								<h2>This is a Heading 2</h2>
								<p>In nec rhoncus eros. Vestibulum eu mattis nisl. Quisque viverra viverra magna nec pulvinar. Maecenas pellentesque porta augue, consectetur facilisis diam porttitor sed. Suspendisse tempor est sodales augue rutrum tincidunt. Quisque a malesuada purus.</p>
								<h3>This is a Heading 3</h3>
								<p>Vestibulum auctor tincidunt semper. Phasellus ut vulputate lacus. Suspendisse ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.</p>
								<h4>This is a Heading 4</h4>
								<p>Nulla et mattis nunc. Curabitur scelerisque commodo condimentum. Mauris blandit, velit a consectetur egestas, diam arcu fermentum justo, eget ultrices arcu eros vel erat.</p>
								<h5>This is a Heading 5</h5>
								<p>Quisque nec turpis at urna dictum luctus. Suspendisse convallis dignissim eros at volutpat. In egestas mattis dui. Aliquam mattis dictum aliquet. Nulla sapien mauris, eleifend et sem ac, commodo dapibus odio. Vivamus pretium nec odio cursus elementum. Suspendisse molestie ullamcorper ornare.</p>
								<h6>This is a Heading 6</h6>
								<p>Donec ultricies, lacus id tempor condimentum, orci leo faucibus sem, a molestie libero lectus ac justo. ultricies mi eros, sit amet tempor nulla varius sed. Proin nisl nisi, feugiat quis bibendum vitae, dapibus in tellus.</p>
							</div>
						</div>
					</Col>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Inline text elements</h2>
								<ul className="actions">
									<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
										<MenuItem className="dropdown-arrow"></MenuItem>
										<MenuItem>You can add anything here</MenuItem>
									</NavDropdown>
								</ul>
							</div>
							<div className="card-body card-padding">
								<Row>
									<Col sm={4} className="m-b-25">
										<p className="c-black">Marked text</p>
										<p>For highlighting a run of text due to its relevance in another context, use the 'mark' tag.</p>
										<mark>This is marked text</mark>
									</Col>
									<Col sm={4} className="m-b-25">
										<p className="c-black">Deleted Text</p>
										<p>For indicating blocks of text that have been deleted use the 'del' tag.</p>
										<del>This is Deleted Text</del>
									</Col>
									<Col sm={4} className="m-b-25">
										<p className="c-black">Strikethrough text</p>
										<p>For indicating blocks of text that are no longer relevant use the 's' tag.</p>
										<s>This is Deleted Text</s>
									</Col>
									<Col sm={4} className="m-b-25">
										<p className="c-black">Inserted Text</p>
										<p>For indicating additions to the document use the 'ins' tag.</p>
										<ins>This is Inserted Text</ins>
									</Col>

									<Col sm={4} className="m-b-25">
										<p className="c-black">Underlined Text</p>
										<p>To underline text use the 'u' tag.</p>
										<u>This is Underlined Text</u>
									</Col>
									<Col sm={4} className="m-b-25">
										<p className="c-black">Small Text</p>
										<p>For de-emphasizing inline or blocks of text, use the 'small' tag.</p>
										<small>This is Small Text</small>
									</Col>
									<Col sm={4} className="m-b-25">
										<p className="c-black">Bold Text</p>
										<p>For emphasizing a snippet of text with a heavier font-weight.</p>
										<strong>This is Bold Text</strong>
									</Col>
									<Col sm={4} className="m-b-25">
										<p className="c-black">Emphasized Text</p>
										<p>For emphasizing a snippet of text with italics.</p>
										<em>This is Underline Text</em>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
					<Col sm={6}>
						<div className="card">
							<div className="card-header">
								<h2>Inline text elements</h2>
								<ul className="actions">
									<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
										<MenuItem className="dropdown-arrow"></MenuItem>
										<MenuItem>You can add anything here</MenuItem>
									</NavDropdown>
								</ul>
							</div>
							<div className="card-body card-padding">
								<p className="c-black">Alignment Classes</p>
								<p>Easily realign text to components with text alignment classes.</p>
								<p className="text-left">Left aligned text.</p>
								<p className="text-center">Center aligned text.</p>
								<p className="text-right">Right aligned text.</p>
								<p className="text-justify">Justified text.</p>
								<p className="text-nowrap">No wrap text.</p>
								<p className="c-black m-t-25">Transformation classes</p>
								<p>Transform text in components with text capitalization classes.</p>
								<p className="text-lowercase">Lowercased text.</p>
								<p className="text-uppercase">Uppercased text.</p>
								<p className="text-capitalize">Capitalized text.</p>
							</div>
						</div>
					</Col>
					<Col sm={6}>
						<div className="card">
							<div className="card-header">
								<h2>Inline text elements</h2>
								<ul className="actions">
									<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
										<MenuItem className="dropdown-arrow"></MenuItem>
										<MenuItem>You can add anything here</MenuItem>
									</NavDropdown>
								</ul>
							</div>
							<div className="card-body card-padding">
								<p>Stylized implementation of HTML's 'abbr' element for abbreviations and acronyms to show the expanded version on hover. Abbreviations with a 'title' attribute have a light dotted bottom border and a help cursor on hover, providing additional context on hover and to users of assistive technologies.</p>
								<p className="c-black m-t-20">Basic abbreviation</p>
								<p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr></p>
								<p className="c-black m-t-20">
									Add 
									<abbr className="initialism" title="initialism">Initialism</abbr>
									to an abbreviation for a slightly smaller font-size.
								</p>
							</div>
						</div>
					</Col>
					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Inline text elements</h2>
								<ul className="actions">
									<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
										<MenuItem className="dropdown-arrow"></MenuItem>
										<MenuItem>You can add anything here</MenuItem>
									</NavDropdown>
								</ul>
							</div>
							<div className="card-body card-padding">
								<p>For quoting blocks of content from another source within your document.</p>

								<blockquote className="m-b-25">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
								</blockquote>

								<blockquote className="m-b-25">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
									<footer>
										Someone famous in
										<cite>Source Title</cite>
									</footer>
								</blockquote>
								<blockquote className="blockquote-reverse m-b-25">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
									<footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
								</blockquote>
							</div>
						</div>
					</Col>

					<Col sm={12}>
						<div className="card">
							<div className="card-header">
								<h2>Inline text elements</h2>
								<ul className="actions">
									<NavDropdown eventKey={1} title={<i className="zmdi zmdi-more-vert"></i>} className="pull-right" noCaret id="dropdown-action">
										<MenuItem className="dropdown-arrow"></MenuItem>
										<MenuItem>You can add anything here</MenuItem>
									</NavDropdown>
								</ul>
							</div>
							<div className="card-body card-padding">
								<Row>
									<Col sm={4} className="m-b-25">
										<p className="c-black">Unordered</p>

										<ul>
											<li>Lorem ipsum dolor sit amet</li>
											<li>Consectetur adipiscing elit</li>
											<li>Integer molestie lorem at massa</li>
											<li>Facilisis in pretium nisl aliquet</li>
											<li>Nulla volutpat aliquam velit
												<ul>
													<li>Phasellus iaculis neque</li>
													<li>Purus sodales ultricies</li>
													<li>Vestibulum laoreet porttitor sem</li>
													<li>Ac tristique libero volutpat at</li>
												</ul>
											</li>
											<li>Faucibus porta lacus fringilla vel</li>
											<li>Aenean sit amet erat nunc</li>
											<li>Eget porttitor lorem</li>
										</ul>
									</Col>
									<Col sm={4} className="m-b-25">
										<p className="c-black">Ordered</p>

										<ol>
											<li>Lorem ipsum dolor sit amet</li>
											<li>Consectetur adipiscing elit</li>
											<li>Integer molestie lorem at massa</li>
											<li>Facilisis in pretium nisl aliquet</li>
											<li>Nulla volutpat aliquam velit</li>
											<li>Faucibus porta lacus fringilla vel</li>
											<li>Aenean sit amet erat nunc</li>
											<li>Eget porttitor lorem</li>
											<li>Integer molestie lorem at massa</li>
											<li>Faucibus porta lacus fringilla vel</li>
											<li>Spretium nisl aliquet lorem ipsum</li>
											<li>Linking best ttoth bellorem</li>
										</ol>
									</Col>
									<Col sm={4} className="m-b-25">
										<p className="c-black">Ordered - Roman</p>

										<ol type="i">
											<li>Lorem ipsum dolor sit amet</li>
											<li>Consectetur adipiscing elit</li>
											<li>Integer molestie lorem at massa</li>
											<li>Facilisis in pretium nisl aliquet</li>
											<li>Nulla volutpat aliquam velit</li>
											<li>Phasellus iaculis neque</li>
											<li>Purus sodales ultricies</li>
											<li>Vestibulum laoreet porttitor sem</li>
											<li>Ac tristique libero volutpat at</li>
											<li>Faucibus porta lacus fringilla vel</li>
											<li>Aenean sit amet erat nunc</li>
											<li>Eget porttitor lorem</li>
										</ol>
									</Col>
									<Col sm={4} className="m-b-25">
										<p className="c-black">Custom - 1</p>

										<ul className="clist clist-angle">
											<li>Lorem ipsum dolor sit amet</li>
											<li>Consectetur adipiscing elit</li>
											<li>Integer molestie lorem at massa</li>
											<li>Facilisis in pretium nisl aliquet</li>
											<li>Nulla volutpat aliquam velit</li>
											<li>Phasellus iaculis neque</li>
											<li>Purus sodales ultricies</li>
											<li>Vestibulum laoreet porttitor sem</li>
											<li>Ac tristique libero volutpat at</li>
											<li>Faucibus porta lacus fringilla vel</li>
											<li>Aenean sit amet erat nunc</li>
											<li>Eget porttitor lorem</li>
										</ul>
									</Col>
									<Col sm={4} className="m-b-25">
										<p className="c-black">Custom - 2</p>

										<ul className="clist clist-check">
											<li>Lorem ipsum dolor sit amet</li>
											<li>Consectetur adipiscing elit</li>
											<li>Integer molestie lorem at massa</li>
											<li>Facilisis in pretium nisl aliquet</li>
											<li>Nulla volutpat aliquam velit</li>
											<li>Phasellus iaculis neque</li>
											<li>Purus sodales ultricies</li>
											<li>Vestibulum laoreet porttitor sem</li>
											<li>Ac tristique libero volutpat at</li>
											<li>Faucibus porta lacus fringilla vel</li>
											<li>Aenean sit amet erat nunc</li>
											<li>Eget porttitor lorem</li>
										</ul>
									</Col>
									<Col sm={4} className="m-b-25">
										<p className="c-black">Custom - 3</p>

										<ul className="clist clist-star">
											<li>Lorem ipsum dolor sit amet</li>
											<li>Consectetur adipiscing elit</li>
											<li>Integer molestie lorem at massa</li>
											<li>Facilisis in pretium nisl aliquet</li>
											<li>Nulla volutpat aliquam velit</li>
											<li>Phasellus iaculis neque</li>
											<li>Purus sodales ultricies</li>
											<li>Vestibulum laoreet porttitor sem</li>
											<li>Ac tristique libero volutpat at</li>
											<li>Faucibus porta lacus fringilla vel</li>
											<li>Aenean sit amet erat nunc</li>
											<li>Eget porttitor lorem</li>
										</ul>
									</Col>
								</Row>
							</div>
						</div>
					</Col>
				</Row>
			</Fragment>
		);
	}
}

export default Typography