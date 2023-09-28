#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';

const app = new cdk.App();
const name = 'astro-lambda-ssr-example';
new CdkStack(app, `${name}-stack`, {
  name,
});