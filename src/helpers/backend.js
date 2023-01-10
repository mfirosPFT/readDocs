/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const { Configuration, OpenAIApi } = require("openai");
const AWS = require("aws-sdk");
// const uuid = require('uuid/v4');

// Set the region
AWS.config.update({ region: "ap-south-1" });

// create constants for each engine and use case example
const engines = [
  {
    model: "text-davinci-003",
    type: "qa",
    prompt: "",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["You:"],
  },
  {
    model: "text-davinci-003",
    type: "translate",
    prompt: "",
    temperature: 0.3,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["You:"],
  },
  {
    model: "code-davinci-003",
    type: "code",
    prompt: "",
    temperature: 0,
    max_tokens: 300,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["You:"],
  },
  {
    model: "code-davinci-003",
    type: "explainCode",
    prompt: "",
    temperature: 0,
    max_tokens: 64,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ['"""'],
  },
  {
    model: "text-davinci-003",
    type: "chat",
    prompt: "",
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: ["You:"],
  },
  {
    model: "text-davinci-003",
    type: "movieEmoji",
    prompt: "",
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: ["You:"],
  },
  {
    model: "text-davinci-003",
    type: "default",
    prompt: "",
    temperature: 0,
    max_tokens: 2048,
    stop: ["You:"],
  },
];

// function to create the message from conversations
const createMessageFromConversations = conversations => {
  // extract the messages text from the conversation object and join them into a single string
  // only include last 3 messages from the conversation array
  conversations.messages = conversations.messages.slice(-3);

  return conversations.messages.map(message => message.text).join("/n");
};

exports.handler = async event => {
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
  let engineType = body.engineType;

  // set default value for engineType
  engineType = engineType || "qa";

  const conversations = body.conversations;
  console.log(JSON.stringify(conversations));
  // create the message from conversations
  const messages = createMessageFromConversations(conversations);
  console.log(messages);

  let params = {};
  switch (engineType) {
    case "qa":
      params = engines[0];
      params.prompt = messages;
      break;
    case "translate":
      params = engines[1];
      params.prompt = messages;
      break;
    case "code":
      params = engines[2];
      params.prompt = messages;
      break;
    case "explainCode":
      params = engines[3];
      params.prompt = messages;
      break;
    case "chat":
      params = engines[4];
      params.prompt = messages;
      break;
    case "movieEmoji":
      params = engines[5];
      // check if the message is not greater than 50 characters only then add text to message
      if (message.length <= 50) {
        params.prompt = "Convert movie titles into emoji:" + messages;
      } else {
        params.prompt = messages;
      }

      break;
    case "default":
      params = engines[6];
      params.prompt = messages;
      break;
    default:
      console.error(`Invalid engine type: ${engineType}`);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: `Invalid engine type: ${engineType}` }),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
      };
  }

  // remove type from params
  delete params.type;
  console.log(params);
  // Use the OpenAI SDK to send the message to the specified language model
  // and get a response
  try {
    const response = await openai.createCompletion(params);
    console.log(JSON.stringify(response.data));
    // remove any /n characters from the response.data.choices[0].text
    const responseText = response.data.choices[0].text.replace(/\/n/g, "");
    // if response.data.choices[0].text is empty, return an error
    if (responseText === "") {
      return {
        statusCode: 200,
        body: JSON.stringify(
          "I could not understand your question or there is some error. Please try again."
        ),
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
      };
    }
    // return the response data
    return {
      statusCode: 200,
      body: JSON.stringify(response.data.choices[0].text),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: error }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };
  }
};
