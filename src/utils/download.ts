/**
 * 下载文件
 * @param {Blob} blobPart 二进制对象
 * @param {*} filename 文件名
 * @param {string} ext 后缀名
 */
export function useDownLoad(blobPart: Blob | File | string, filename: string, ext = '.xls') {
  const blob = new Blob([blobPart])
  const objectUrl = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = objectUrl
  a.download = filename + ext
  a.onload = () => {
    URL.revokeObjectURL(objectUrl)
  }
  a.click()
}
