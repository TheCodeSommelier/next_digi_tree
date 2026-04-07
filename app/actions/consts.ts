import { ServerClient } from "postmark";
import { ServiceOrderState } from "../types/Email";

export const initialServiceOrderState: ServiceOrderState = {
  status: "idle",
};

export const getPostmarkClient = () => {
  const apiKey = process.env.POSTMARK_API;

  if (!apiKey) {
    return null;
  }

  return new ServerClient(apiKey);
};
