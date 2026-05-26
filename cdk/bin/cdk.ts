#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack.js';

const app = new cdk.App();
const name = 'astro-lambda-ssr-example';
new CdkStack(app, `${name}-stack`, {
  name,
});