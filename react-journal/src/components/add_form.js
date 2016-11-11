import React, { Component } from 'react';

class AddForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			formName:'',
			formURL:''
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.formCollapsed){
			this.refs.formName.focus();
		}
	}

	onFormSubmit(e){
		e.preventDefault();

		let formEntries = {
			name:this.state.formName,
			url: this.state.formURL
		};

		//send data back
		this.props.addToList(formEntries,this.props.weekIdx);

		// clear/hide form
		this.setState({formName:'',formURL:''});
		this.props.toggleForm();
	}

	onInputChange(e){
		const change = {};
		change[e.target.id] = e.target.value;
		this.setState(change);
	}

	render() {
		//CSS styles
		const formCollapsed = this.props.formCollapsed ? 'collapsed' : '';
		

		return (
			<div className="row">
				<div className={`col-xs-5 addForm ${formCollapsed}`}>

					<p>Add a new entry</p>
				
					<form onSubmit={this.onFormSubmit.bind(this)} id={'addForm'+this.props.weekIdx} name={'addForm'+ this.props.weekIdx} >

						<div className="form-group" >
							<label>Resource title:</label>
							<input 
								name="formName" 
								className="form-control"
								value={this.state.formName}
								onChange={this.onInputChange.bind(this)} 
								type="text" 
								id="formName"
								ref="formName"
								required="required" 
								min={5}  />
							<small>(required)</small>
						</div>

						<div className="form-group">
							<label>URL:</label>
							<input 
								name="formURL"
								className="form-control"
								value={this.state.formURL}
								onChange={this.onInputChange.bind(this)}
								type="url"
								id="formURL"
								required="required" />
							<small>(required)</small>
						</div>

						<button type="submit" className="btn btn-primary">Add</button>
					</form>

				</div>
			</div>	
		)
	}
}

export default AddForm
