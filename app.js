import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import cors from 'cors';

dotenv.config();

const port = 80 || process.env.PORT;
// const connection = await mysql.createConnection(process.env.DATABASE_URL);
const connection = await mysql.createConnection('mysql://fct4fyqu7ijc:pscale_pw_ACxK0qBfmq1Duu0f-kV--59B_LvqtZ8zMDE5xS5_c4Y@w41dbsulvmyf.us-east-1.psdb.cloud/solidity-challenge?ssl={"rejectUnauthorized":true}');
const app = express();

app.use(cors({
	origin: 'https://www.smartcontracts.school/'
}));


/*************************
 * ROUTES
 ************************/
app.get('/', (req, res) => {
	res.json({ msg: 'Hello World' });
});

app.get('/resources', async (req, res) => {
	try {
		const query = 'SELECT * FROM resource';
		const [rows] = await connection.query(query);
		res.json(rows);
	} catch (err) {
		console.error(err);
	}
})

app.get('/challenges', async (req, res) => {
	try {
		const query = 'SELECT * FROM challenge';
		const [rows] = await connection.query(query);
		res.json(rows);
	} catch (err) {
		console.error(err);
	}
})

app.get('/challenge/:id', async (req, res) => {
	const query = 'SELECT * FROM challenge WHERE challenge_id = ?';
	const [rows] = await connection.query(query, [req.params.id]);
	if(!rows[0]){
		return res.json({msg: "Couldn't find that challenge"});
	}
	res.json(rows[0]);
});

/*************************
 * START SERVER
 ************************/
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
