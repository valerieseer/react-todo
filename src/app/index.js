const React = require("react")
const ReactDom = require("react-dom")
require("./css/index.css")

/******* TO DO ITEM *******/
// class TodoItems extends React.Component {
// 	render() {
// 		let todoItem = this.props.todo
//
// 		function createTodo () {
// 			return <li key={todos.key}>{todos.text}</li>
// 		}
//
// 		let listTodos = todoItem.map(createTodo)
//
// 		return (
// 			<ul>
// 			 {listTodos}
// 		 	</ul>
// 		)
// 	}
// }


/******* TO DO APP *******/
class TodoApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			todos: []
		};
		this.addTodo = this.addTodo.bind(this)
		this.deleteTodo = this.deleteTodo.bind(this)
	}

	addTodo(e) {
		e.preventDefault();

		let todoInput = document.getElementsByClassName("todo-input")[0].value;

 		this.setState({
			todos: [...this.state.todos, todoInput]
		},() => console.log(this.state.todos))
	}

	deleteTodo(e) {
		console.log(e)
	}

  render() {
 		let todo = this.state.todos.map(function(el, index) {
 			return (
				<li><button className="delete-todo" onClick={this.deleteTodo} data-index={index}> &times; </button>{el}</li>
			)
		})
//onClick={this.deleteTodo}
		return (
			<div>
				<form onSubmit={this.addTodo}>
					<input type="text" className="todo-input" placeholder="enter task" required />
					<button type="submit" value="add">add</button>
				</form>
				<ul>{todo}</ul>
			</div>
		)
	}
}


ReactDom.render(<TodoApp />, document.getElementById("todo-app-container"))
