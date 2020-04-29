import '../css/index.css';
import '../js/text';
import text from '../js/text';

text();

if (module.hot) {
	module.hot.accept('./text.js', function () {
		console.log('La pagina se ha recargado en caliente🔥🔥🔥');
		text();
	});
}
