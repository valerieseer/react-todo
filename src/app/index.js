const React = require("react")
const ReactDom = require("react-dom")

/******* TO DO ITEM *******/
class TodoItem extends React.Component {
	handleDelete() {
		this.props.onDelete(this.props.item)
	}

	render() {
		return (
			<li className="todo-item"><button className="todo-delete" onClick={this.handleDelete}> x </button>{this.props.item}</li>
		)
	}
}

/******* TO DO APP *******/
class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: ["wash hair", "eat", "poop"]
		};
		this.onDelete = this.onDelete.bind(this);
	}

	onDelete(item) {
		console.log(this.state.todos)
		let updatedTodos = this.state.todos.filter(function(val, index) {
			return item !== val;
		});
		this.setState({
			todos: updatedTodos
		});
	}

	handleAdd() {
		console.log("You added me")
	}

  render() {
		let todoItems = this.state.todos;
		todoItems = todoItems.map((item, index) => {
			return (
				<TodoItem item={item} key={index}/>
			)
		});
		return (
			<div>
				<p>To Do:</p>
				<form>
					<input type="text"/>
					<input type="button" value="Add" onClick={this.handleAdd} />
				</form>
				<ul>{todoItems}</ul>
			</div>
		)
	}
}


ReactDom.render(<TodoApp />, document.getElementById("todo-container"))
