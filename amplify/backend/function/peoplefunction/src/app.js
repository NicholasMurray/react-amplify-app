/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

/**********************
 * Example get method *
 **********************/

app.get('/people', function (req, res) {
  // Add your code here
  const people = [
    {
      id: 1,
      first_name: 'Vivyanne',
      last_name: 'Treamayne',
      email: 'vtreamayne0@cam.ac.uk',
      gender: 'Female',
    },
    {
      id: 2,
      first_name: 'Zared',
      last_name: 'Labrone',
      email: 'zlabrone1@state.tx.us',
      gender: 'Male',
    },
    {
      id: 3,
      first_name: 'Holly',
      last_name: 'Marquese',
      email: 'hmarquese2@slashdot.org',
      gender: 'Female',
    },
    {
      id: 4,
      first_name: 'Jarid',
      last_name: 'Gozney',
      email: 'jgozney3@google.pl',
      gender: 'Male',
    },
    {
      id: 5,
      first_name: 'Sheilakathryn',
      last_name: 'Naile',
      email: 'snaile4@huffingtonpost.com',
      gender: 'Female',
    },
    {
      id: 6,
      first_name: 'Thaddus',
      last_name: 'Begwell',
      email: 'tbegwell5@cargocollective.com',
      gender: 'Male',
    },
    {
      id: 7,
      first_name: 'Kaile',
      last_name: 'Maunton',
      email: 'kmaunton6@dropbox.com',
      gender: 'Female',
    },
    {
      id: 8,
      first_name: 'Burtie',
      last_name: 'Bockmaster',
      email: 'bbockmaster7@flavors.me',
      gender: 'Bigender',
    },
    {
      id: 9,
      first_name: 'Amandy',
      last_name: 'Shuard',
      email: 'ashuard8@digg.com',
      gender: 'Female',
    },
    {
      id: 10,
      first_name: 'Nelly',
      last_name: 'Harp',
      email: 'nharp9@51.la',
      gender: 'Female',
    },
  ];
  res.json({ people });
});

app.get('/people/*', function (req, res) {
  // Add your code here
  res.json({ success: 'get call succeed!', url: req.url });
});

/****************************
 * Example post method *
 ****************************/

app.post('/people', function (req, res) {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});

app.post('/people/*', function (req, res) {
  // Add your code here
  res.json({ success: 'post call succeed!', url: req.url, body: req.body });
});

/****************************
 * Example put method *
 ****************************/

app.put('/people', function (req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});

app.put('/people/*', function (req, res) {
  // Add your code here
  res.json({ success: 'put call succeed!', url: req.url, body: req.body });
});

/****************************
 * Example delete method *
 ****************************/

app.delete('/people', function (req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

app.delete('/people/*', function (req, res) {
  // Add your code here
  res.json({ success: 'delete call succeed!', url: req.url });
});

app.listen(3000, function () {
  console.log('App started');
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app;
