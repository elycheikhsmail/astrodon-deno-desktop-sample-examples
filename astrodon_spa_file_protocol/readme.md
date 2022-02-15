 

Development:

``` 
export DEV=true
deno run -A  --unstable demo.ts
```
- I take spa build using with deno I simply render it 
in Astrondon webview using file protocol it can be use as doc without http protocol
for generate some ng command in interactive way
- when I remove :

```
setInterval(() => {
  app.send(`Hello Tauri `); 
  
}, 500);
```

the webview don't work