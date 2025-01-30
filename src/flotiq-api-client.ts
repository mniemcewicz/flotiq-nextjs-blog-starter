import { Flotiq } from "@flotiq/flotiq-api-sdk";
import { createNextMiddleware } from "@flotiq/nextjs-addon";

export const flotiqApiClient = new Flotiq({
  apiKey: process.env.FLOTIQ_API_KEY,

  middleware: [createNextMiddleware()],
});
