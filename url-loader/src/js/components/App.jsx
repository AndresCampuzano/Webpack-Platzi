import React, { useState } from 'react';
import data from './data.json';
import Loader from './Loader.jsx';
import Logo from '../../images/platzi.png';
import VideoMP4 from '../../video/que-es-core.mp4';

console.log(data);

const App = () => {
	const [loaderList, setLoaderList] = useState([]);

	function handleClick() {
		setLoaderList(data.loaders);
	}

	return (
		<div>
			<p>Esto es lo que he aprendido hasta el momento</p>
			<video src={VideoMP4} width={360} controls poster={Logo}></video>
			<p>
				<img src={Logo} alt='Platzi image' width={40} />
			</p>
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
