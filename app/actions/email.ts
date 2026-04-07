"use server";

import { contacts } from "@/app/consts/consts";
import type { ServiceOrderPayload, ServiceOrderState } from "@/app/types/Email";
import { createServiceOrderMessage } from "@/app/utils/createServiceOrderMessage";
import { validateServiceOrderPayload } from "@/app/utils/beValidations/validateServiceOrderPayload";

import { getPostmarkClient } from "./consts";

export const orderService = async (
  formData: FormData,
): Promise<ServiceOrderState> => {
  const services = formData
    .getAll("services")
    .filter(
      (value): value is string =>
        typeof value === "string" && value.trim().length > 0,
    );

  const payload: ServiceOrderPayload = {
    fullName:
      typeof formData.get("fullName") === "string"
        ? formData.get("fullName")?.toString()
        : undefined,
    company:
      typeof formData.get("company") === "string"
        ? formData.get("company")?.toString()
        : undefined,
    ico:
      typeof formData.get("ico") === "string"
        ? formData.get("ico")?.toString()
        : undefined,
    email:
      typeof formData.get("email") === "string"
        ? formData.get("email")?.toString()
        : undefined,
    message:
      typeof formData.get("message") === "string"
        ? formData.get("message")?.toString()
        : undefined,
    courseTitle:
      typeof formData.get("courseTitle") === "string"
        ? formData.get("courseTitle")?.toString()
        : undefined,
    services,
  };

  const validation = validateServiceOrderPayload(payload);

  if (!validation.isValid) {
    return {
      status: "error",
      message: "Formulář není vyplněný správně.",
      errors: validation.errors,
    };
  }

  const postmarkClient = getPostmarkClient();

  if (!postmarkClient) {
    return {
      status: "error",
      message: "Chybí konfigurace e-mailu na serveru.",
    };
  }

  try {
    await postmarkClient.sendEmail({
      From: contacts.email,
      To: contacts.email,
      Subject: payload.courseTitle?.trim()
        ? `Poptávka služby: ${payload.courseTitle.trim()}`
        : "Poptávka služby z webu DigiTree",
      TextBody: createServiceOrderMessage(payload),
      MessageStream: "outbound",
    });

    return {
      status: "success",
      message: "Poptávku jsme přijali a ozveme se vám co nejdříve.",
    };
  } catch {
    return {
      status: "error",
      message: "Poptávku se nepodařilo odeslat. Zkuste to prosím znovu.",
    };
  }
};
