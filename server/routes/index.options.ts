export default eventHandler(async (event) => {
  const didHandleCors = handleCors(event, {
    origin: '*',
    preflight: {
      statusCode: 204,
    },
    methods: '*',
  });
  if (didHandleCors) {
    return;
  }
})