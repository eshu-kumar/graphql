module.exports = {
  projects: {
    app: {
      schema: ["./src/data/schema"],
      resolvers: ["./src/data/resolvers"],
      documents: ["**/*.{graphql,js,ts,jsx,tsx,mjs}"],
    },
  },
};
