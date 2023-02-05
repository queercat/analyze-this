const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/message', (req, res) => {
	const url = process.env.GPT_URL;
	const body = JSON.stringify(req.body);

	const resp = fetch(process.env.GPT_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: body
	});

	resp.then(val => {
		val.json().then(json => {
			res.send(json);
		});
	});
});

app.listen(8000);
