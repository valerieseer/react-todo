const React = require("react")
const ReactDom = require("react-dom")
require("./css/index.css")

/******* TO DO ITEM *******/
class TodoItem extends React.Component {
	render() {
		function createTodo () {
			return <li key={todos.key}>{todos.text}</li>
		}

		let todoItem = this.props.todo
		let listTodos = todoItem.map(createTodo)

		return (
			<ul>
			 {listTodos}
		 	</ul>
		)
	}
}


/******* TO DO APP *******/
class TodoApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: []
		};
	}

	addTodo(e) {
		e.preventDefault();

		let todosArray = this.state.todos

		todosArray.push({
			text: this._inputElement.value,
			key: Date.now()
		})

		this.setState({
			todos: todosArray
		})

		this._inputElement.value = ''
	}

  render() {

		return (
			<div>
				<div id="todo-input-container">
					<form onSubmit={this.addTodo}>
						<input type="text" placeholder="enter task" ref={(a) => this._inputElement = a} required />
						<button type="submit" value="add">add</button>
					</form>
				</div>
				<TodoItem todo={this.state.todos} />
			</div>
		)
	}
}


ReactDom.render(<TodoApp />, document.getElementById("todo-app-container"))
