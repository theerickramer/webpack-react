import React from 'react';

const LilApp = React.createClass({
	render: function(){
		return(<div>
				<h1>{this.props.header}</h1>
				<img src={this.props.image}/>
				<h2>Bye</h2>
				<h3>Later</h3>
				<h4>Hey</h4>
				<h5>Wait</h5>
			</div>	
		)
	}
})

export default LilApp