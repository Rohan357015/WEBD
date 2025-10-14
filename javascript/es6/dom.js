const div = document.createElement("div");
const h1 = document.createElement("h1");
const id = document.getElementById("root");
id.appendChild(div);
div.appendChild(h1);

h1.innerHTML="<p>HELLO</p>";
for(let i = 0;i<10;i++){
    const div = document.createElement("div");
   const h1 = document.createElement("h1");
    id.appendChild(div);
    div.appendChild(h1);
    h1.innerHTML="<p>HELLO</p>";
}