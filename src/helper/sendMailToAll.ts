function sendMailToAll(
  address: string,
  company: string | null,
  department: string | null,
  pic: string | null
): void {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const contentSheet = ss.getSheetByName("メール内容");
  const itemCol = 1;
  const firstRow = 2;
  if (contentSheet) {
    // メール送信内容の初期値
    let subject = "";
    let body = "";
    let ccList = "";
    let bccList = "";

    // シート入力内容の代入
    const rowLength = contentSheet.getLastRow() - (firstRow - 1);
    for (let i = 0; i < rowLength; i++) {
      const itemName = contentSheet.getRange(firstRow + i, itemCol).getValue();
      const itemContent = contentSheet
        .getRange(firstRow + i, itemCol + 1)
        .getValue();
      if (itemName === "CC") {
        ccList = itemContent;
      }
      if (itemName === "BCC") {
        bccList = itemContent;
      }
      if (itemName === "件名") {
        subject = itemContent;
      }
      if (itemName === "本文") {
        body = itemContent
          .replace("{COMPANY}", company)
          .replace("{DEPARTMENT}", department)
          .replace("{PIC}", pic);
      }
    }

    // 送信オプション
    const options = {
      cc: ccList,
      bcc: bccList,
    };

    GmailApp.sendEmail(address, subject, body, options);
  }
}

export { sendMailToAll };
