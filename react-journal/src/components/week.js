import React, { Component } from 'react';
import AddForm from './add_form';

class Week extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formCollapsed:true
		}
	}

	formToggle() {
		this.setState({formCollapsed:!this.state.formCollapsed})
	}

	render(){

		const links = this.props.content.links.map((l)=>{
			return (
				<li key={l.url}>
					<a href={l.url} target="_blank">{l.name}</a>
				</li>
			)
		});

		// CSS styles
		const completed = this.props.complete ? 'completed' : '';
		const checkbox = this.props.complete ? 'glyphicon glyphicon-check' : 'glyphicon glyphicon-unchecked'
		const collapse = this.state.formCollapsed ? 'collapsed' : '';
		const collapseBtn = !this.state.formCollapsed ? 'glyphicon glyphicon-menu-up' : 'glyphicon glyphicon-plus';
		
		return (
			<div className="week">
				<h4 
					onClick={()=>this.props.onCompleted(this.props.weekIdx)} 
					className={completed}>
					<span className={checkbox} aria-hidden="true"></span>
					 Week {this.props.content.week}
				</h4> 

				<ul>
					{links}
				</ul>

				<button 
					onClick={this.formToggle.bind(this)} 
					className="btn addBtn">
					Add Link <span className={collapseBtn} aria-hidden="true"></span>
				</button>

				<AddForm 
					addToList={this.props.addToList} 
					collapse={collapse} 
					toggleForm={()=>this.setState({formCollapsed:true})} 
					weekIdx={this.props.weekIdx} />
			</div>
		)
	}
}

export default Week

