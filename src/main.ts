import { sendMailToAll } from "./helper/sendMailToAll";

function main() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("既存顧客");
  const appUi = SpreadsheetApp.getUi();
  const response = Browser.msgBox(
    "送信確認",
    "本当に送信していいですか？👀",
    Browser.Buttons.YES_NO
  );
  // 処理開始行
  const firstRow = 3;
  // 会社名記載列
  const companyCol = 2;
  // 部署名記載列
  const departmentCol = 3;
  // 担当者名記載列
  const picCol = 4;
  // メースアドレス記載列
  const mailCol = 5;
  if (sheet && response == "yes") {
    // 処理開始行から最終行までの数を取得
    const rowLength = sheet.getLastRow() - (firstRow - 1);
    const mailList = [];
    for (let i = 0; i < rowLength; i++) {
      const company = sheet.getRange(firstRow + i, companyCol).getValue();
      const department = sheet.getRange(firstRow + i, departmentCol).getValue();
      const pic = sheet.getRange(firstRow + i, picCol).getValue();
      const address = sheet.getRange(firstRow + i, mailCol).getValue();
      const customer = {
        company: company,
        department: department,
        pic: pic,
        address: address,
      };
      mailList.push(customer);
    }

    // 宛先ごとにメール作成、送信
    mailList.forEach((item) => {
      // メールアドレスがある場合、実行
      if (item.address != "") {
        sendMailToAll(item.address, item.company, item.department, item.pic);
      }
    });
  } else if (response == "no") {
    appUi.alert("送信がキャンセルされました!");
  } else {
    appUi.alert(
      "エラーが発生しました🚧 シート名が間違っているかもしれません。"
    );
  }
}

// 関数名公開で利用
(global as any).main = main;
