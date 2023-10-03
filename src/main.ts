import { sendEmailToAll } from "./helper/sendEmailToAll";
import { validateEmail } from "./utility/validateEmail";
import { checkDuplicate } from "./utility/checkDuplicate";

/**
 * main function to send email
 * Note: Please call this function from Google sheets.
 */
function main(): GoogleAppsScript.Base.Button | undefined {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Email List");
  const appUi = SpreadsheetApp.getUi();
  const response = Browser.msgBox(
    "Confirmation",
    "Are you sure to send email？👀",
    Browser.Buttons.YES_NO
  );
  // Index the first row position
  const firstRow = 3;
  // Confirm if it is ok to send emails.
  if (sheet && response == "yes") {
    // Index column positions
    let companyCol = 2;
    let departmentCol = 3;
    let picCol = 4;
    let mailCol = 5;
    const colLength = sheet.getLastColumn();
    for (let i = 1; i <= colLength; i++) {
      const itemName = sheet.getRange(firstRow - 1, i).getValue();
      if (itemName === "Company") {
        companyCol = i;
      }
      if (itemName === "Department") {
        departmentCol = i;
      }
      if (itemName === "Person in charge") {
        picCol = i;
      }
      if (itemName === "Email address") {
        mailCol = i;
      }
    }

    // Get the number from the start line to the last line
    const rowLength = sheet.getLastRow() - (firstRow - 1);
    const mailList = [];
    const addressList = [];
    const invalidList = [];
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
      if (validateEmail(address)) {
        mailList.push(customer);
        addressList.push(address);
      } else if (address !== "" && !validateEmail(address)) {
        invalidList.push(address);
      }
    }

    // Alert invalid email address
    if (invalidList.length > 0) {
      return appUi.alert(`🚨 Invalid email address: ${invalidList.join(", ")}`);
    }

    // Alert duplicate email address
    const duplicateList = checkDuplicate(addressList);
    if (duplicateList.length > 0) {
      return appUi.alert(
        `🚨 Duplicate email address: ${duplicateList.join(", ")}`
      );
    }

    // Create and send emails for each recipient
    mailList.forEach((item) => {
      if (item.address != "") {
        sendEmailToAll(item.address, item.company, item.department, item.pic);
      }
    });

    appUi.alert("📤 Sent email", "It's done!", appUi.ButtonSet.OK);
  } else if (response == "no") {
    appUi.alert("Send canceled!");
  } else {
    appUi.alert("🚨 The sheet name may be incorrect. It should be Email List.");
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).main = main;
