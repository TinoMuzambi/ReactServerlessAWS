# Landon Hotel React + AWS Web App

This React app follows the [LinkedIn Learning course](https://www.linkedin.com/learning/creating-a-serverless-application-using-react-in-aws?u=70295562) by Brett McLaughlin on Creating a Serverless Application Using React in AWS. It uses various AWS services to host and manage a web app for a hotel.

## AWS Amplify

I use AWS Amplify to automatically deploy the React app using a GitHub integration. Amplify automatically deploys any pushes the main branch.

## DynamoDB

The data for the application is stored in DynamoDB. I use scripts in the `src/scripts` directory which use the AWS SDK to programmatically create the tables as well as upload data to them from JSON files.

## AWS Lambda

I then use Lambda functions with an appropriate IAM user with the necessary IAM roles to get the data from DynamoDB. This also uses the AWS SDK to pull the data from DynamoDB, specifically the DynamoDB DocumentClient.

## AWS API Gateway

Lastly, I use API Gateway to create an API which uses the Lambda functions to return the results. The React app then calls the API to get the data to serve on the front-end.
