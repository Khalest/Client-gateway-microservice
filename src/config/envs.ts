import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
  PORT: number;
  
}

const envsSchema = joi
  .object<EnvVars>({
    PORT: joi.number().required(),
    
  })
  .unknown(true);

const value: joi.ValidationResult<EnvVars> = envsSchema.validate(process.env);

if (value.error) {
  throw new Error(`Invalid environment variables: ${value.error.message}`);
}

export const envs = value.value;