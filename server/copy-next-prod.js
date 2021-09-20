// copy files in .next to /build/.next
const path = require("path");
const fs = require("fs");

function moveAllNextFiles(cur_dir = path.join(process.cwd(), ".next"), target_dir = path.join(process.cwd(), "build", ".next")){
    if (!fs.existsSync(target_dir)) {
        fs.mkdirSync(target_dir, {recursive: true})
    }
    const all_files = fs.readdirSync(cur_dir);
    for (let file of all_files){
        const cur_fp = path.join(cur_dir, file);
        const tar_fp = path.join(target_dir, file);
        const cur_fp_stats = fs.statSync(cur_fp);
        if (cur_fp_stats.isFile()){
            fs.copyFileSync(cur_fp, tar_fp)
        }
        else{
            moveAllNextFiles(cur_fp, tar_fp);
        }
    }
}
moveAllNextFiles();