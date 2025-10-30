import 'dotenv/config';
import * as joi from 'joi';
import { Ienv } from './interfaces/envInterface';


const envSchema = joi
  .object({
    PORT: joi.number().required(),
    TOKENHUBSPOT: joi.string().required()

  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error('Config validate Error' + error.message);
}

const envVars: Ienv = value;

export const envs = {
  port: envVars.PORT,
  tokenHubsPot: envVars.TOKENHUBSPOT

};
