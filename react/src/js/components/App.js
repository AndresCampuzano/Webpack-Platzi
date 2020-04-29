import React, { useState } from 'react';
import data from './data.json';
import Loader from './Loader.js';

console.log(data);

const App = () => {
	const [loaderList, setLoaderList] = useState([]);

	function handleClick() {
		setLoaderList(data.loaders);
	}

	return (
		<div>
			<p>Esto es lo que he aprendido hasta el momento</p>
			<ul>
				{loaderList.map((item) => (
					<Loader {...item} key={item.id} />
				))}
			</ul>
			<button onClick={handleClick}>
				Mostrar lo aprendido hasta el momento
			</button>
		</div>
	);
};

export default App;
