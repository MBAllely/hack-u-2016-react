import React, { Component } from 'react';

import data from '../seed_data';

import Week from './week';
import Header from './header';
import AddForm from './add_form';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {data};
	}

	addToList(formData,wkIdx) {		
		const dataCopy = Object.assign([], this.state.data);
		dataCopy[wkIdx].links.push(formData);
		this.setState({data:dataCopy});
	}

	onCompleted(idx){
		const dataCopy = Object.assign([], this.state.data);
		dataCopy[idx].complete = !dataCopy[idx].complete;
		this.setState({data:dataCopy});
	}

	addNewWeek(){
		const dataCopy = Object.assign([], this.state.data);
		const newWeek = {
			week: this.state.data.length + 1,
			links: [],
			completed: false,
		}
		dataCopy.push(newWeek);
		this.setState({data:dataCopy});
	}

	render() {
		const weeks = this.state.data.map((week, idx)=>{
			return (
				<Week key={idx} 
					weekIdx={idx} 
					content={week} 
					complete={week.complete} 
					onCompleted={this.onCompleted.bind(this)} 
					addToList={this.addToList.bind(this)} />
			)
		});

		return (
			<div>
				<Header title="React.js - Course Material" />
				
				{weeks}
				<hr />
				
				<button 
					className="btn btn-primary"
					onClick={this.addNewWeek.bind(this)}>
					Add New Week
				</button>
			</div>
		)
	}
}

export default App