import React from 'react';

const Week = (props) => {

	const links = props.content.links.map((l)=>{
		return (
			<li key={l.url}>
				<a href={l.url} target="_blank">{l.name}</a>
			</li>
		)
	});

	return (
		<div className="week">
			<h4>Week {props.content.week}</h4>
			<ul>
				{links}
			</ul>
		</div>
	)
}

export default Week

