import 'dotenv/config';
import * as joi from 'joi';
import { Ienv } from './interfaces/envInterface';


const envSchema = joi
  .object({
    PORT: joi.number().required(),
    TOKENHUBSPOT: joi.string().required(),
    HOSTPG:joi.string().required(),
    PORTPG:joi.number().required(),
    USERNAMEPG:joi.string().required(),
    PASSWORDPG:joi.string().required(),
    DATABASEPG:joi.string().required(),
    SCRAPING_CRON: joi.string().required()

  })
  .unknown(true);

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error('Config validate Error' + error.message);
}

const envVars: Ienv = value;

export const envs = {
  port: envVars.PORT,
  tokenHubsPot: envVars.TOKENHUBSPOT,
  hostPg:envVars.HOSTPG,
  portPg:envVars.PORTPG,
  userNamePg: envVars.USERNAMEPG,
  passwordPg: envVars.PASSWORDPG,
  databasePg: envVars.DATABASEPG,
  scrapingCron: envVars.SCRAPING_CRON
};
