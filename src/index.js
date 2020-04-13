/* eslint-disable no-console */
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import jsonToXml from 'jsontoxml';
import Estimator from './estimator';


const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/api/v1/on-covid-19/', async (req, res) => {
  const use = await Estimator(req.body);
  res.status(200).json({
    data: use.data,
    impact: use.impact,
    severeImpact: use.severeImpact
  });
});

app.post('/api/v1/on-covid-19/json', async (req, res) => {
  const use = await Estimator(req.body);
  res.status(200).json({
    data: use.data,
    impact: use.impact,
    severeImpact: use.severeImpact
  });
});

app.post('/api/v1/on-covid-19/xml', async (req, res) => {
  const use = await Estimator(req.body);
  res.header('content-Type', 'application/xml; charset=UTF-8');
  res.send(jsonToXml(use));
});


const port = process.env.port || 3000;
module.exports = app.listen(port);
