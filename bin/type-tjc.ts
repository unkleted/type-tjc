#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TypeTjcStack } from '../lib/type-tjc-stack';

const app = new cdk.App();
new TypeTjcStack(app, 'TypeTjcStack');
