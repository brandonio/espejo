exports.handler = async (event, _) => {
  try {
    const subject = event.queryStringParameters.name || 'World';
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}
