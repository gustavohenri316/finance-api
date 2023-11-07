import swaggerJSDoc from "swagger-jsdoc";
import * as path from "path";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "expense-reports",
      version: "1.0.0",
      description: "Documentação da API expense-reports",
    },
  },
  apis: [path.join(__dirname, "docs/*.yaml")],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec };
