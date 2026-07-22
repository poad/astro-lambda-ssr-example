#!/usr/bin/env node
import { CdkStack } from '../lib/cdk-stack.js';
import * as cdk from 'aws-cdk-lib';

const app = new cdk.App();
const name = 'astro-lambda-ssr-example';
new CdkStack(app, `${name}-stack`, {
  name,
});