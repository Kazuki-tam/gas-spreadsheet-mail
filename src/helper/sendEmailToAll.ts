import { getUserName } from "./getUserName";

/**
 * Helper function to send email
 */
function sendEmailToAll(
  address: string,
  company: string | null,
  department: string | null,
  pic: string | null
): void {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Email Content");
  const appUi = SpreadsheetApp.getUi();
  const { fullName, familyName, givenName } = getUserName();
  // Index the column and row positions
  const itemCol = 1;
  const firstRow = 2;
  if (sheet) {
    // Declares email items
    let subject = "";
    let body = "";
    let ccItem = "";
    let bccItem = "";

    const rowLength = sheet.getLastRow() - (firstRow - 1);
    for (let i = 0; i < rowLength; i++) {
      const itemName = sheet.getRange(firstRow + i, itemCol).getValue();
      const itemContent = sheet.getRange(firstRow + i, itemCol + 1).getValue();
      if (itemName === "CC") {
        ccItem = itemContent;
      }
      if (itemName === "BCC") {
        bccItem = itemContent;
      }
      if (itemName === "Subject") {
        subject = itemContent
          .replace("{COMPANY}", company)
          .replace("{DEPARTMENT}", department)
          .replace("{PIC}", pic);
      }
      if (itemName === "Body") {
        body = itemContent
          .replace("{COMPANY}", company)
          .replace("{DEPARTMENT}", department)
          .replace("{PIC}", pic)
          .replace("{MY_FULL_NAME}", fullName)
          .replace("{MY_FAMILY_NAME}", familyName)
          .replace("{MY_LAST_NAME}", givenName);
      }
    }

    // Send options
    const options = {
      cc: ccItem,
      bcc: bccItem,
    };

    GmailApp.sendEmail(address, subject, body, options);
    appUi.alert("📤 Sent email", "It's done!", appUi.ButtonSet.OK);
  } else {
    appUi.alert(
      "🚨 The sheet name may be incorrect. It should be Email Content."
    );
  }
}

export { sendEmailToAll };
