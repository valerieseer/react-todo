const React = require("react")
const ReactDom = require("react-dom")


//Todo component
class TodoComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			items: []
		}
		this.handleButtonClick = this.handleButtonClick.bind(this)
	}
	handleButtonClick(event) {
		event.preventDefault();
		let todoInput = document.getElementsByClassName("todo-input")[0].value;
		this.setState(function(prevState) {
			return {
				items: prevState.items.push(todoInput)
			}
		})
	}
   	render() {
   		console.log(this.state)
   		let list = this.state.items.map(function(element) {
   			return <li>{element}<button></button></li>
   		})
		return (
			<div className="todo-list">
				<p>What should I do today:</p>
				<form onClick={this.handleButtonClick}>
					<input type="text" className="todo-input"/>
					<input type="submit" value="Add"/>
				</form>
				<ul>{list}</ul>
			</div>
		)
	}
}


//Add todo component to html
ReactDom.render(<TodoComponent />, 
document.getElementById("todo-wrapper")
)