const admin = require("firebase-admin");
const dotenv = require("dotenv");
dotenv.config();

const getEnvVar = (key: string): string => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variablle ${key} is not defined`);
  }
  return value;
};

const serviceAccount = {
  type: getEnvVar("TYPE"),
  project_id: getEnvVar("PROJECT_ID"),
  private_key_id: getEnvVar("PRIVATE_KEY_ID"),
  private_key: getEnvVar("PRIVATE_KEY").replace(/\\n/g, "\n"),
  client_email: getEnvVar("CLIENT_EMAIL"),
  client_id: getEnvVar("CLIENT_ID"),
  auth_uri: getEnvVar("AUTH_URI"),
  token_uri: getEnvVar("TOKEN_URI"),
  auth_provider_x509_cert_url: getEnvVar("AUTH_PROVIDER_X509_CERT_URL"),
  client_x509_cert_url: getEnvVar("CLIENT_X509_CERT_URL"),
  universe_domain: getEnvVar("UNIVERSE_DOMAIN"),
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
