import React from 'react';
import ReactDOM from 'react-dom';
import LilApp from './lil-app.jsx';

var App = React.createClass({
	render: function(){
		return(<div>
			<LilApp header="Hi" image="http://ia.media-imdb.com/images/M/MV5BMTMyMzQ1Mjk3M15BMl5BanBnXkFtZTcwNzk3ODMxNw@@._V1_UY317_CR15,0,214,317_AL_.jpg"/>
			</div>
		);
	}
});

ReactDOM.render(<App/>, document.getElementById('content'))