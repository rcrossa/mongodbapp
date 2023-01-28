// This function is the endpoint's request handler.
exports = function({ query, headers, body}, response) {
  
    // Querying a mongodb service:
    const doc = context.services.get("mongodb-atlas").db("mongodbworld").collection("2022").insertOne(JSON.parse(body.text()));

    // Calling a function:
    // const result = context.functions.execute("function_name", arg1, arg2);

    // The return value of the function is sent as the response back to the client
    // when the "Respond with Result" setting is set.
    return  doc;
};
