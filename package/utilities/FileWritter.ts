import fs from 'fs'
import pt from 'path'


function FileWritter(FilePath: string, File: string) {
    const FileName = 'dist'
    const dir = pt.dirname(FilePath)
    if (!fs.existsSync(dir)) {
        console.log(`Directory '${dir}' created.`)
        fs.mkdirSync(FileName, { recursive: true })
    }
    else {
        console.log(`Directory '${dir}' already exists.`)
    }
    fs.writeFileSync(FilePath, File)
}

export { FileWritter }