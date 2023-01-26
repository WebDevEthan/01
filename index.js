import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			something: 0
		}
	}
	render() {
		return (
			<div>
				<h1>Hello</h1>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('loading-node'))
