const React = require("react")
const ReactDom = require("react-dom")

//Todo component
const TodoComponent = React.createClass({
	render: function() {
		return (
			<h1>Hello, World!</h1>
		)
	}
})

//Add component to html
ReactDom.render(<TodoComponent/>, document.getElementById("todo-wrapper"))