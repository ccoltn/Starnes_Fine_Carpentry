# Starnes_Fine_Carpentry

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-un4epjcs)

## Google Sheets form submission

The quote form now posts directly to a Google Sheets Apps Script web app.

1. Create or open your Google Sheet.
2. In Google Apps Script, paste this script and save it:

```javascript
function setCorsHeaders(output) {
  return output
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
}

function doGet(e) {
  return setCorsHeaders(ContentService.createTextOutput('OK'))
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Quote Requests');

    if (!sheet) {
      throw new Error('Create a sheet named "Quote Requests" in your Google Sheet.');
    }

    sheet.appendRow([
      new Date(),
      payload.name || '',
      payload.email || '',
      payload.phone || '',
      payload.project_type || '',
      payload.description || '',
    ]);

    return setCorsHeaders(ContentService.createTextOutput('OK'))
      .setMimeType(ContentService.MimeType.TEXT);
  } catch (error) {
    return setCorsHeaders(
      ContentService.createTextOutput('Error: ' + (error instanceof Error ? error.message : String(error)))
    )
      .setMimeType(ContentService.MimeType.TEXT)
      .setStatusCode(500);
  }
}

function doOptions(e) {
  return setCorsHeaders(ContentService.createTextOutput(''))
    .setMimeType(ContentService.MimeType.TEXT)
    .setStatusCode(200);
}
```

3. Deploy the script as a Web App:
   - Execute as: Me
   - Who has access: Anyone
4. Copy the web app URL.
5. Create a local `.env` file from `.env.example` and set:

```env
VITE_GOOGLE_SHEETS_WEB_APP_URL=YOUR_WEB_APP_URL_HERE
```

6. Run the site with `npm run dev` and submit the form.
