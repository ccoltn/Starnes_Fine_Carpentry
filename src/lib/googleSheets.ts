type QuoteRequestPayload = {
  name: string;
  email: string;
  phone: string;
  project_type: string;
  description: string;
};

export async function submitQuoteToGoogleSheet(payload: QuoteRequestPayload) {
  const webAppUrl = String(import.meta.env.VITE_GOOGLE_SHEETS_WEB_APP_URL || '').trim();

  if (!webAppUrl) {
    throw new Error(
      'Google Sheets endpoint is not configured. Add VITE_GOOGLE_SHEETS_WEB_APP_URL to your .env file.'
    );
  }

  const response = await fetch(webAppUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    },
    body: JSON.stringify(payload),
  });

  if (response.type === 'opaque') {
    return 'OK';
  }

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || 'Failed to submit the quote request to Google Sheets.');
  }

  return response.text();
}
