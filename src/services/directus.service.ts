import { Directus } from "@directus/sdk";
import signale from "signale";
import config from "../config";

const { DIRECTUS_TOKEN, DIRECTUS_URL } = config;

class DirectusService {
  private client = new Directus(DIRECTUS_URL);

  async authorize() {
    return this.client.auth.static(DIRECTUS_TOKEN).catch((error) => {
      signale.error(error);
      return false;
    });
  }

  async checkItem(pk: string): Promise<boolean> {
    return this.client
      .items("Leads")
      .readOne(pk)
      .then((response) => {
        if (response) return true;
        return false;
      })
      .catch(() => false);
  }
}

export default new DirectusService();
