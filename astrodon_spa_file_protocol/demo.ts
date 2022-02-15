import { App } from "https://deno.land/x/astrodon@0.1.0-alpha.2/mod.ts";

export const getIndex = async () => { 
  return `file://${await Deno.realPath('./renderer/index.html')}`;
};
const indexPath = await getIndex();

const app = await App.new();
 
setInterval(() => {
  app.send(`Hello Tauri `); 
  
}, 500);

await app.registerWindow({ title: "spa with file protocol", url: indexPath });


app.run();
