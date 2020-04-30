import React from 'react';

const Loader = ({ name, id }) => {
	return (
		<li>
			<p>name: {name}</p>
			<p>id: {id}</p>
		</li>
	);
};

export default Loader;
