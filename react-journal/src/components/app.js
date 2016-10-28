import React, { Component } from 'react';

import data from '../data';

import Week from './week';
import Header from './header';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {data};
	}

	render() {
		var weeks = this.state.data.map((w)=>{
			return <Week key={w.week} content={w} />
		});

		return (
			<div>
				<Header title="React.js - Course Material" />
				
				{weeks}
				
			</div>
		)
	}
}

export default App