const fs = require("fs");

// Approach 1 (Sync approach) :)

// let content = fs.readFileSync("a.txt","utf-8");
// const append = content.trim();

// fs.writeFileSync("a.txt",append);

// Approch 2 (Callback based , async function call)

fs.readFile("a.txt","utf-8",(err,content)=>{
    const trimmedContent = content.trim();
    fs.writeFile("a.txt",trimmedContent,()=>{
        console.log("done!")
    });
});

