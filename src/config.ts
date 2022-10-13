import "dotenv/config";
import signale from "signale";

const config = {
  DIRECTUS_TOKEN: process.env.DIRECTUS_TOKEN || "",
  DIRECTUS_URL: process.env.DIRECTUS_URL || "",
};

for (const key in config) {
  if (!config[key as keyof typeof config]) {
    signale.fatal(`Missing ${key} in .env`);
    process.exit(1);
  }
}

export default config;
