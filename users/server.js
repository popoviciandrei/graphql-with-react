const express = require('express');
const expressGraphQL = require('express-graphql');

const app = express();
app.use('/graphql', expressGraphQL({
  graphiql: true // param only for developemnt env   
}))


const PORT  = 4000;
app.listen(PORT, () => {
    console.log('Listening on:' + PORT);
})