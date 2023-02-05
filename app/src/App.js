import logo from './logo.svg';
import './App.css';

import {useState} from "react";

function App() {
	
	const [input, setInput] = useState("");
	const [output, setOutput] = useState("");

	const preamble = "Using this job description: {";
	const postamble = "}. Generate a cover letter.";

	function queery() {

		const message = {
			"message": preamble + input.replace('\n', ' ').replace('\r', ' ') + postamble
		}

		const resp = fetch('/message', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(message)
		});

		let loadingIdx = 1;
		let loadingInterval = setInterval(() => {
			let out = "loading";

			if (loadingIdx > 3) {
				loadingIdx = 1;
			}

			for (const i of Array(loadingIdx).keys()) {
				out += '.'
			}

			setOutput(out);

			loadingIdx += 1
		}, 600);

		resp.then(content => {
			content.json().then(json => {	
				clearInterval(loadingInterval);
				setOutput('' + json.response);
			})
		});
	}

	return (
		<div className="container">
			<div className="labeled-text">
				<h1>Job Description</h1>
				<textarea className="input" value={input} onChange={e => setInput(e.target.value)} />
				<button onClick={queery}>Submit</button>
			</div>

			<div className="labeled-text">
				<h1>Cover Letter</h1>
				<textarea className="output" value={output} readOnly={true} /> 
			</div>
		</div>
	);
}

export default App;
