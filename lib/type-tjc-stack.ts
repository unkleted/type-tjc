import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';

export class TypeTjcStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'tjcVPC', {
      cidr: '172.17.2.0/24',
      gatewayEndpoints: {
        'S3': {
          service: ec2.GatewayVpcEndpointAwsService.S3
        }
      },
      maxAzs: 3,
      natGateways: 1,
      subnetConfiguration: [
        {
          cidrMask: 27,
          name: 'Public',
          subnetType: ec2.SubnetType.PUBLIC
        },
        {
          cidrMask: 27,
          name: 'Private',
          subnetType: ec2.SubnetType.PRIVATE
        },
        {
          cidrMask: 28,
          name: 'Isolated',
          subnetType: ec2.SubnetType.ISOLATED
        },
      ]
    })
  }
}
