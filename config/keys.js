const api_key = process.env.API_KEY;
module.exports = {
  mongoURI: `mongodb+srv://kamila:${api_key}@cluster0-vxne9.mongodb.net/test?retryWrites=true&w=majority`
};
