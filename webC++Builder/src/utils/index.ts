/*
 * Function to add line numbers and join the lines back into a string
 * @param lines {Array<string>}  后台收到的原始数据
 * @return {Array<string>} 处理后的数据，每行前面加了序号
 */

export const addLineNumbers = (lines: Array<string>) => {
  return lines.map((line, index) => `${index + 1} ${line}`).join('\n')
}
