let listItem = [""];
let color = [""];
let emoji = [""];

function green() {
  let green = `class="done"`;
  color.push(green);
  let check = `✅`;
  emoji.push(check);
  displayList();
}
function red() {
  let red = `class="notdone"`;
  color.push(red);
  let o = `⭕`;
  emoji.push(o);
  displayList();
}
function newItem() {
  let newItem = document.getElementById("list-input").value;
  listItem.push(newItem);
  displayList();
}

function displayList() {
  const DISPLAY = document.getElementById("list-display");
  let toDo = "";

  for (let td = 1; td < listItem.length; td++) {
    toDo += `<p ${color[td]}> ToDo item ${td}: <b>${listItem[td]}</b>  <button onclick="green()">✅Done</button>  <button onclick="red()">⭕Not Done</button></p>`;
  }
  DISPLAY.innerHTML = toDo;
}
