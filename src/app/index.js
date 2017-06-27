const React = require("react")
const ReactDom = require("react-dom")

class TodoItem extends React.Component {
	render() {
		return (
			<li className="todo-item">{this.props.item}</li>
		)
	}
}

class TodoItemsContainer extends React.Component {
	render() {
		return
	}
}

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: ["wash hair", "eat", "poop", "poop some more"]
		}
	}

  render() {
		let todoItems = this.state.todos;
		todoItems = todoItems.map((item, index) => {
			return (
				<TodoItem item={item} key={index}/>
			)
		});
		return (
			<div id="todo-list">
				<p>To Do:</p>
				<ul>{todoItems}</ul>
			</div>
		)
	}
}



//Add todo component to html
ReactDom.render(<TodoApp />,
document.getElementById("todo-container")
)
