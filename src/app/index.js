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
	}

	addTodo(e) {
		e.preventDefault();

		let todoInput = document.getElementsByClassName("todo-input")[0].value;
		console.log("INPUT: " + todoInput)
 		this.setState(function(prevState) {
			return {
 				todos: prevState.todos.push(todoInput)
 			}
		})
	}

  render() {
		console.log(this.state)
		console.log("STATE: " + this.state.todos)
 		let todo = this.state.todos.map(function(el) {
 			return <li><button></button>{el}</li>
		})

		return (
			<div>
				<form onSubmit={this.addTodo}>
					<input type="text" className="todo-input" placeholder="enter task" ref={(a) => this._inputElement = a} required />
					<button type="submit" value="add">add</button>
				</form>
				<ul>{todo}</ul>
			</div>
		)
	}
}


ReactDom.render(<TodoApp />, document.getElementById("todo-app-container"))
