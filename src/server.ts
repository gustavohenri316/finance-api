import express from "express";
import cors from "cors";
import http from "http";

import * as bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import { config } from "dotenv";
import { swaggerSpec } from "./swagger";
import { router } from "./routers";

const main = async () => {
  config();
  const app = express();
  const PORT = 8888;

  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use("/api", router);

  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

main();
