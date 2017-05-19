const React = require("react")
const ReactDom = require("react-dom")

//Todo component
const TodoComponent = React.createClass({
	render: function() {
		return (
			<div>
				<h1>To Do's</h1>
				<p>Some text to test outer div container!</p>
			</div>
		)
	}
})

//Add todo component to html
ReactDom.render(<TodoComponent/>, document.getElementById("todo-wrapper"))