'use strict';
import express from 'express';

let app = express();

const OK_RESPONSE_TEXT = 'OK';

app.get('/', (req, res) => {
  res.status(200).send(OK_RESPONSE_TEXT);
})

let server = app.listen(3000, () => {
  console.log(`server running at port http://localhost/${server.address().port}`);
});
