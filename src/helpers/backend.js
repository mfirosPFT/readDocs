
/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const { Configuration, OpenAIApi } = require("openai");
const AWS = require('aws-sdk');
// const uuid = require('uuid/v4');

// Set the region
AWS.config.update({region: 'ap-south-1'});

// Create a new Dynamodb client
// const dynamodb = new AWS.Dynamodb();

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  // Set the OpenAI API key
  const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

  // Get the user's message, user information, and OpenAI engine name from the event data
  const message = body.message;
  console.log(body);
  const userId = body.userId;
  const channelId = body.channelId;
  const username = body.username;
  const engine = body.engine;


    const conversations = body.conversations;
    console.log(JSON.stringify(conversations));
    // extract the messages text from the conversation object and join them into a single string
    const messages = conversations[0].messages.map((message) => message.text).join('/n');
    console.log(messages);
    

  // Use the OpenAI SDK to send the message to the specified language model
  // and get a response
  try {
    const response = await openai.createCompletion({
      model: engine,
      prompt:  messages,
      temperature: 0,
      max_tokens: 2048,
      stop: ["You:"]
    });
    console.log(JSON.stringify(response.data))
    return {
        statusCode: 200,
        body: response.data.choices[0].text,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
    };

  } catch (error) {
    console.log(JSON.stringify(error))
    return {
        statusCode: 500,
        body: JSON.stringify(error),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
    };

    }
    

  // // Store the conversation in Dynamodb
  // const params = {
  //   TableName: 'Conversation-cpxhyr3sgbhyzfos7gku2hbbqu-dev',
  //   Item: {
  //     'conversationId': {S: uuid()},
  //     'id': {S: uuid()},
  //     'userId': {S: userId},
  //     'channelId': {S: channelId},
  //     'username': {S: username},
  //     'engine': {S: engine},
  //     'message': {S: message},
  //     'response': {S: response.text},
  //     'isBot': {BOOL: false},
  //     'timestamp': {N: Date.now().toString()}
  //   }
  // };

  // await dynamodb.putItem(params).promise();

  // // Store the chatbot's response in Dynamodb
  // const params2 = {
  //   TableName: 'Conversation-cpxhyr3sgbhyzfos7gku2hbbqu-dev',
  //   Item: {
  //     'conversationId': {S: uuid()},
  //     'id': {S: uuid()},
  //     'userId': {S: userId},
  //     'channelId': {S: channelId},
  //     'username': {S: 'Chatbot'},
  //     'engine': {S: engine},
  //     'message': {S: response.text},
  //     'response': {S: null},
  //     'isBot': {BOOL: true},
  //     'timestamp': {N: Date.now().toString()}
  //   }
  // };

  // await dynamodb.putItem(params2).promise();

  // Return the response from the language model
//   return {
//     statusCode: 200,
//     body: response.data.choices[0].text,
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Credentials': true,
//     },
//   };


};
