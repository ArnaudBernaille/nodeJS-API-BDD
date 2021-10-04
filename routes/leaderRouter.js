const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	next(); // On met next pour pouvoir passer d'autre fonction, par exemple pour get et post se sont celles que nous avons mis en dessous. 
}) // Lorsque l'on met un all, peut importe la méthode (get, post, put, delete) c'est ce code qui va être executé si on appel dishes.


// Si jamais notre API possede plein d'entrée alors notre index.js risque d'exploser. On peut donc crée plein de fichier express puis ensuite les combiner
// Ces fichiers combiner donneront notre API générale. => Pour cela on utilise "express router".
.get((req, res, next) => {
	console.log("call the get fonction for the promotion");
	res.end('general leadership');
}) // Si on a une requete get, le all va d'abord être appelé puis celle là. C'est dû au next de la fonction all d'en haut mais je comprend pas bien. 

.post((req, res, next) => {
	res.end('Posting leadership ' + req.body.name + " with details : " + req.body.description );
})

.put((req, res, next) => {
	res.statusCode = 403;
	res.end('Put not supported for leaderRouter');
})

.delete((req, res, next) => {
	res.end('Deleting all the leader');
})

// Suporting the id
leaderRouter.route('/:leaderId')
.get( (req, res, next) => {
	res.end('Setting : ' + req.params.leaderId + ' to be the leader');
})

.post( (req, res, next) => {
	res.end('Updating the leader : ' + req.params.leaderId);
})


.put( (req, res, next) => {
	res.end('Putting the leader ' + req.params.leaderId);
})


.delete( (req, res, next) => {
	res.end('Deleting the leader status for  : ' + req.params.leaderId );
})



module.exports = leaderRouter;