const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  for (const record of event.Records) {
    console.log(record.eventID);
    console.log(record.eventName);
    console.log("DynamoDB Record: %j", record.dynamodb);

    const client = new SESClient({ region: "eu-west-2" });
    const input = {
      // SendEmailRequest
      Source: "no-reply@eastlondoncommunity.band", // required
      Destination: {
        // Destination
        ToAddresses: [
          // AddressList
          "john.e.mcbride@icloud.com",
        ],
        CcAddresses: ["john.e.mcbride@icloud.com,"],
      },
      Message: {
        // Message
        Subject: {
          // Content
          Data: `[${process.env.ENV}] 🎺 Another sign up!`, // required
          Charset: "UTF-8",
        },
        Body: {
          // Body
          Text: {
            Data: JSON.stringify(record.dynamodb),
            Charset: "UTF-8",
          },
        },
      },
      // ReplyToAddresses: ["STRING_VALUE"],
      // ReturnPath: "STRING_VALUE",
      // SourceArn: "STRING_VALUE",
      // ReturnPathArn: "STRING_VALUE",
    };

    try {
      const emailCommand = new SendEmailCommand(input);
      const emailResponse = await client.send(emailCommand);

      console.log(JSON.stringify(emailResponse));
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  }

  return Promise.resolve("Successfully processed DynamoDB record");
};
