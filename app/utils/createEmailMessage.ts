type Args = {
  fullName?: string
  email?: string
  message?: string
}

export const createEmailMessage = ({ fullName, email, message }: Args) => {
  const safeName = fullName?.trim() || 'Neznámý odesílatel';
  const safeEmail = email?.trim() || 'neuvedeno';
  const safeMessage = message?.trim() || '— žádná zpráva —';

  return `
    Tento e-mail přišel z webu DigiTree.

    Odesílatel: ${safeName}
    Email pro odpověď: ${safeEmail}

    Zpráva:
    ${safeMessage}`;
};
