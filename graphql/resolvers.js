const axios = require('axios');

const resolvers = {
  Query: {
    posts: async () => {
      try {
        const response = await axios.get(process.env.GET_POST_API);
        await new Promise(resolve => setTimeout(resolve, process.env.RESPONSE_DELAY));
        return response.data.map(post => ({
          ...post,
          dateTime: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString()
        }));
      } catch (error) {
        console.error("Error fetching posts:", error);
        throw new Error('Failed to fetch posts');
      }
    },
    users: async () => {
      try {
        const response = await axios.get(process.env.GET_USERS_API);
        return response.data; 
      } catch (error) {
        console.error("Error fetching users:", error);
        throw new Error('Failed to fetch users');
      }
    },
  },
  Mutation: {
    deletePost: async (_, { id }) => {
      try {
        console.log(`Attempting to delete post with id: ${id}`);
        return Math. random() < 0.5;
      // return true;
      } catch (error) {
        console.error("Error deleting post:", error);
        throw new Error('Failed to delete post');
      }
    },
  },
};

module.exports = {resolvers}