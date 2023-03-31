const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
  try {
    await fs.writeFile(fileName, fileContent)
    console.log(`File ${fileName} has been created.`)
  } catch (err) {
    console.error(err)
  }
}

const myFileReader = async (fileName) => {
  try {
    const fileContent = await fs.readFile(fileName, 'utf-8')
    console.log(`File ${fileName} has been read.`)
    return fileContent
  } catch (err) {
    console.error(err)
  }
}

const myFileUpdater = async (fileName, fileContent) => {
  try {
    const existingContent = await myFileReader(fileName)
    await fs.writeFile(fileName, existingContent + fileContent)
    console.log(`File ${fileName} has been updated.`)
  } catch (err) {
    console.error(err)
  }
}

const myFileDeleter = async (fileName) => {
  try {
    await fs.unlink(fileName)
    console.log(`File ${fileName} has been deleted.`)
  } catch (err) {
    console.error(err)
  }
}

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
