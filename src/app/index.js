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

ReactDom.render(<TodoComponent/>, document.getElementById("todo-wrapper"))