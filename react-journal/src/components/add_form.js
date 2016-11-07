import React, { Component } from 'react';

class AddForm extends Component {
	constructor(props) {
		super(props);
	}

	onFormSubmit(e){
		e.preventDefault();

		//pull form data
		let addForm = document.getElementById(`addForm${this.props.weekIdx}`);
		let formHolder = new FormData(addForm);
		let formEntries = {};
		for (var [key, value] of formHolder.entries()) { 
		  formEntries[key]=value;
		}

		//send data back
		this.props.addToList(formEntries,this.props.weekIdx);

		// clear/hide form
		addForm.reset();
		this.props.toggleForm();
	}

	render() {
		return (
			<div className="row">
				<div className={`col-xs-5 addForm ${this.props.collapse}`}>

					<p>Add a new entry</p>
				
					<form onSubmit={this.onFormSubmit.bind(this)} id={'addForm'+this.props.weekIdx} name={'addForm'+ this.props.weekIdx} >

						<div className="form-group" >
							<label>Resource title:</label>
							<input name="name" className="form-control" type="text" id="name"  required="required" min="2"  /><small>(required)</small>
						</div>

						<div className="form-group">
							<label>URL:</label>
							<input name="url" className="form-control" type="url" id="url" required="required" /><small>(required)</small>
						</div>

						<button type="submit" className="btn btn-primary">Add</button>
					</form>

				</div>
			</div>	
		)
	}
}

export default AddForm
