import signale from "signale";
import directusService from "./services/directus.service";
import { responseFactory } from "./utils/response.factory";

export const start = async (event: {
  queryStringParameters: { pk: string };
}) => {
  const { pk } = event.queryStringParameters;
  signale.info(`recieved pk: ${pk}`);
  if (!pk) {
    signale.error("pk is required");
    return responseFactory(400, { message: "pk is required" });
  }

  const authResult = await directusService.authorize();
  if (!authResult) {
    signale.error("Directus Authorization failed");
    return responseFactory(500, { message: "Directus Authorization failed" });
  }

  const found = await directusService.checkItem(pk);

  if (found) {
    signale.success("Item found");
    return responseFactory(200, {
      message: "Item found",
      result: { found: true },
    });
  }

  if (!found) {
    signale.error("Item not found");
    return responseFactory(200, {
      message: "Item not found",
      result: { found: false },
    });
  }

  return responseFactory(200, { result: null, message: "" });
};
