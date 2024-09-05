import fs from "fs/promises"
import fsn from "fs"
import path from "path"

// mainPath is mainly the name of the directory
const mainPath = "c:\\Web-Dev-Learning\\clear_the_clutter"

// list all files included in the mainPath
let files = await fs.readdir(mainPath)

for (const item of files) {
    let ext = item.split(".")[item.split(".").length - 1]
    // console.log(path.join(newFolderPath, item))
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        const newFolderPath = path.join(mainPath, ext)
        if (fsn.existsSync(path.join(mainPath, ext))) {
            fs.rename(path.join(mainPath, item), path.join(newFolderPath, item))
        }
        else {
            fs.mkdir(newFolderPath)
            fs.rename(path.join(mainPath, item), path.join(newFolderPath, item))
        }
    }
}
