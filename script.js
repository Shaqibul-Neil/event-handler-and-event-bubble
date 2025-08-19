/*
// comment box
const textArea = document.querySelector(".text-box");
const btnSubmit = document.querySelector(".btn-submit");
const commentBox = document.querySelector(".comment-box");

btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const newPara = document.createElement("p");
  newPara.classList.add("comment");
  newPara.innerText = textArea.value;
  commentBox.appendChild(newPara);
  textArea.value = "";
});
*/

/*
//focus event
const inputFocus = document.querySelector(".input-focus");
const btnFocus = document.querySelector(".btn-focus");
inputFocus.addEventListener("focus", function () {
  inputFocus.style.backgroundColor = "red";
});
inputFocus.addEventListener("blur", function () {
  inputFocus.style.backgroundColor = "transparent";
});
*/
/*
//github delete write delete to delete
const inputDelete = document.querySelector(".input-delete");
const btnDelete = document.querySelector(".btn-delete");
const textDelete = document.querySelector(".text-delete");

inputDelete.addEventListener("keyup", function (e) {
  console.log(e.target.value);
  if (e.target.value === "delete") {
    btnDelete.removeAttribute("disabled");
    textDelete.style.display = "none";
  } else {
    btnDelete.setAttribute("disabled", true);
    textDelete.style.display = "block";
  }
});
*/
/*
//Event bubble and Stop propagating
//list item 2 click handler
const item2 = document.querySelector(".item-2");
item2.addEventListener(
  "click",
  function (e) {
    console.log(e.target);
    console.log("item2 first clicked");
    e.stopPropagation();
    e.stopImmediatePropagation(); //eta dile nicher item 2 r baki event gula r dekhabena
  },
  true
);
item2.addEventListener("click", function (e) {
  console.log(e.target);
  console.log("item2 second clicked");
});
item2.addEventListener("click", function (e) {
  console.log(e.target);
  console.log("item2 third clicked");
});

//ol click handler
const listItem = document.querySelector(".list-item");
listItem.addEventListener("click", function () {
  console.log("ol clicked");
});

//section click handler
const section = document.querySelector("section");
section.addEventListener("click", function () {
  console.log("section clicked");
});

//body click handler
const body = document.querySelector("body");
body.addEventListener("click", function () {
  console.log("body clicked");
});
*/

// const parent = document.getElementById("parent");
// const child = document.getElementById("child");

// parent.addEventListener("click", () => {
//   console.log("Parent bubble");
// }); // default → bubble

// parent.addEventListener(
//   "click",
//   () => {
//     console.log("Parent capture");
//   },
//   { capture: true }
// ); // explicitly capture

// child.addEventListener("click", () => {
//   console.log("Child bubble");
// }); // default → bubble

//Parent capture   (capture phase এ নামতে নামতে ফায়ার হলো)
//Child bubble     (target phase + bubble listener)
//Parent bubble    (bubble phase এ উপরে উঠতে উঠতে ফায়ার হলো)

/*
//Event delegate
const items = document.getElementsByClassName("item");
console.log(items);
const ol = document.querySelector(".list-item");
const btnAdd = document.querySelector(".btn-add");
console.log(ol.children);

ol.addEventListener("click", function (e) {
  let li = e.target.closest("li");
  if (li && ol.contains(li)) li.remove();
  else return;
  //   if (e.target && e.target.tagName === "LI") ol.removeChild(e.target);
  //   e.target.parentNode.removeChild(e.target);
  //ol-এর মধ্যে শুধু <li> না, ধর নতুন করে যদি কোনো অন্য element ঢুকানো হয় (যেমন <span> বা ভেতরে অন্য নেস্টেড element), তখন e.target ওই child element-ও হতে পারে। তখন e.target.parentNode.removeChild(e.target) দিলে ভুল element remove হয়ে যাবে (ধর li না, বরং li-এর ভেতরের <span> ডিলিট হয়ে গেল)।
});

btnAdd.addEventListener("click", function () {
  //new item
  const li = document.createElement("li");
  li.innerText = `item ${ol.children.length + 1}`;
  li.classList.add("item");
  ol.appendChild(li);
});
*/

// lws --- Mastering JavaScript Event Propagation - Bubbling vs. Capturing Explained
const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

parent.addEventListener("click", listener);

form.addEventListener("click", listener);

button.addEventListener("click", listener);

//3br e button asbe jdi btn e click kri
function listener(event) {
  console.log(event.target);
}
