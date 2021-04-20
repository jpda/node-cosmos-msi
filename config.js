// @ts-check

const config = {
    endpoint: "https://jpda.documents.azure.com",
    key: "",
    databaseId: "ToDoList",
    containerId: "Items",
    partitionKey: { kind: "Hash", paths: ["/category"] }
  };
  
  module.exports = config;