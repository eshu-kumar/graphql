module.exports = {
  projects: {
    app: {
      schema: ["./data/schema"],
      resolvers: ["./data/resolvers"],
      documents: ["**/*.{graphql,js,ts,jsx,tsx,mjs}"],
    },
  },
};
