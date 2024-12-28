import { $ } from "bun";
import fs from "fs";
import path from "path";

function copyDirContents(src: string, dest: string) {
  fs.readdirSync(src).forEach((file) => {
    const dest2 = path.join(dest, file);
    if (fs.existsSync(dest2)) {
      fs.rmSync(dest2, { recursive: true });
    }
    fs.cpSync(path.join(src, file), dest2, { recursive: true });
  });
}

await $`turbo build`;
copyDirContents("./docs/.vitepress/dist", "./dist");
