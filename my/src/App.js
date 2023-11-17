import logo from './logo.svg';
import './App.css';

export const App = () => {
	// имеративный стиль идет до вывода текущего года. Выводтекущего года произведен в декларативном стиле
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
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
				<p>{new Date().getFullYear()}</p>
			</header>
		</div>
	);
};
