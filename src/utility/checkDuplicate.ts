/**
 * Utility Function to check if the array has duplicate item.
 * @param { Array } targetArray - Target array
 * @returns { Array } duplicateList - Duplicate items
 */

function checkDuplicate(targetArray: string[]): string[] {
  const duplicateList = targetArray.filter((item, index, array) => {
    return array.indexOf(item) === index && index !== array.lastIndexOf(item);
  });
  return duplicateList;
}

export { checkDuplicate };
