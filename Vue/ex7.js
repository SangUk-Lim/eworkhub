const ul = document.querySelector("ul");

for(let i=0;i<=10;i++){
    const list = document.createElement("li");
    const bt = document.createElement("button");
    bt.innerText = "X";
    list.id = i;
    list.innerText=`목록${i}`;
    list.appendChild(bt);
    ul.appendChild(list);
}