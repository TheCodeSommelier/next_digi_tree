import { contacts } from '@/app/consts';
import { EmailPayload } from '@/app/types/Email';
import { createEmailMessage } from '@/app/utils/createEmailMessage';
import { validateEmailPayload } from '@/app/utils/beValidations/validateEmailPayload';
import { ServerClient } from 'postmark';

export async function POST(request: Request) {
  const pmApiKey = process.env.POSTMARK_API;

  if (!pmApiKey) {
    return new Response(JSON.stringify({ error: 'No Postmark API key provided' }), { status: 500 });
  }

  const pmClient = new ServerClient(pmApiKey);
  const payload = (await request.json()) as EmailPayload;
  const { email, fullName, message } = payload;
  const validation = validateEmailPayload(payload);

  if (!validation.isValid) {
    return new Response(JSON.stringify({ error: 'Invalid payload', details: validation.errors }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const emailData = {
    From: contacts.email,
    To: contacts.email,
    Subject: payload.subject?.trim() || 'Email from contact form',
    TextBody: createEmailMessage({ fullName, email, message }) as string,
    MessageStream: 'outbound',
  };

  await pmClient.sendEmail(emailData);

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
