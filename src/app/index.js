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

// functional stateless component
function Todo(props) {
	return (
		<li><button className="delete-todo" onClick={(e) => props.deleteTodo(e, props.index)} data-index={props.index}> &times; </button>
		<button type='button'>E</button>{props.el}</li>
	)
}

class Todo1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initialized: false,
			stuff: this.props.parentValue
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({
			stuff: e.target.value
		}, () => console.log('this.setState is', this.state.stuff));
	}

	render() {
		return (
			<div>
				<input onClick={(e) => this.props.handleCheck(e, this.props.idx)} type='checkbox'/>
				<input  
						value={this.state.stuff}
						onChange={this.handleChange}/>	
				<button onClick={(e) => this.props.deleteTodo(e, this.props.idx)} type='button'>&times;</button>							
			</div>
		)
	}
}


/******* TO DO APP *******/
class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
			completed: []
		};
		this.addTodo = this.addTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
	}

	addTodo(e) {
		e.preventDefault();
		let todoInput = document.getElementsByClassName("todo-input")[0].value;
 		this.setState({
			todos: [...this.state.todos, todoInput]
		},() => console.log(this.state.todos))
	}

	deleteTodo(e, idx) {
		console.log('idx is', idx);
		console.log(`state todos is ${this.state.todos}`);
		let todos = this.state.todos;
		let newArr = todos.slice(0, idx).concat(todos.slice(idx+1));
		this.setState({
			todos: newArr
		}, () => console.log('new state is', this.state.todos));

	}

	handleCheck(e, idx) {
		console.log('handleCheck', e.target.checked);
		if(e.target.checked) {
			let todos = this.state.todos;
			let newArr = todos.slice(0, idx).concat(todos.slice(idx+1));
			let completedItem = todos[idx];	
			this.setState({
				todos: newArr,
				completed: [...this.state.completed, completedItem]
			}, () => console.log('new completed state is', this.state.completed));					
		}
	}

  render() {
		return (
			<div>
				<form onSubmit={this.addTodo}>
					<input type="text" className="todo-input" placeholder="enter task" required />
					<button type="submit" value="add">add</button>
				</form>
				{this.state.todos.map(function(el, index) {
 				return <Todo1 deleteTodo={this.deleteTodo}
				 			  handleCheck={this.handleCheck}
				 			  parentValue={el}
				 			  doggy={el}
							  idx={index}/>
				}.bind(this))}

				<div>
					<h1>Completed</h1>
					{this.state.completed.map(function(el, index) {
						return <Todo1 parentValue={el}/>
					}.bind(this))}
				</div>
			</div>
		)
	}
}


ReactDom.render(<TodoApp />, document.getElementById("todo-app-container"));
