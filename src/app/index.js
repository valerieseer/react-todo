const React = require("react")
const ReactDom = require("react-dom")


//Todo component
class TodoComponent extends React.Component {
   render() {
		return (
			<div class="todo-list">
				<ul></ul>
			</div>
		)
	}
}


//Add todo component to html
ReactDom.render(<TodoComponent />, document.getElementById("todo-wrapper"))