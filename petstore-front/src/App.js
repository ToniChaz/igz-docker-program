import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor (props) {
		super(props)
		this.state = {
			loading: true,
			data: [],
			error: null
		}
		this.apiUrl = 'http://localhost:3000/api/v1'
	}

	componentDidMount () {
		fetch(`${this.apiUrl}/animals`)
			.then(response => {
				if (response.status === 200) {
					response.json().then(data => this.setState({data: data.data}))
				} else {
					this.setState({error: `[ ${response.status} ] ${response.statusText}`})
				}
			})
			.catch(error => this.setState({error}))
			.finally(() => this.setState({loading: false}))
	}

	render () {
		return (
			<div className="App">
				<header className="App-header">
					{this.state.loading && <img src={logo} className="App-logo" alt="logo"/>}
					{this.state.error}
					{this.state.data && (
						<table>
							<thead>
							<tr>
								<th>Animal</th>
								<th>Description</th>
								<th>Type</th>
							</tr>
							</thead>
							<tbody>
							{this.state.data.map((item, idx) => {
								return (
									<tr key={idx}>
										<td>{item.name}</td>
										<td>{item.description}</td>
										<td>{item.type}</td>
									</tr>
								)
							})}
							</tbody>
						</table>
					)
					}
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</header>
			</div>
		);
	}
}

export default App;
