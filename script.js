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
// const parent = document.getElementById("parent");
// const form = document.getElementById("form");
// const button = document.getElementById("button");

//event bubbling

// parent.addEventListener("click", listener);

// form.addEventListener("click", listener);

// button.addEventListener("click", listener);

//3br e button asbe jdi btn e click kri
// function listener(event) {
//   console.log(event.target);
// }

//kothai click hyse dkhte hole. akhn btn click krleo baki 3ta dekhabe btn>form>div ---child theke parent er dike jasse. event bubbling hcche. etai hcche addevent er default behaviour. currentTarget ar this same ekhane
// function listener(event) {
//   //console.log(event.currentTarget);
//   console.log(event.currentTarget.tagName);
//   //console.log(this);
//   //console.log(this.tagName); //alwz gives in capital
// }

//event capturing or trickling

// parent.addEventListener("click", listener, {capture:true});

// form.addEventListener("click", listener, {capture:true});

// button.addEventListener("click", listener, {capture:true});

//OR

// parent.addEventListener("click", listener, true);

// form.addEventListener("click", listener, true);

// button.addEventListener("click", listener, true);

//3br e button asbe jdi btn e click kri
// function listener(event) {
//   console.log(event.target);
// }

// akhn btn click krleo  3ta dekhabe div >form>btn---parent theke child er dike jasse. event capture hcche.
//function listener(event) {
//console.log(event.currentTarget);
//console.log(event.currentTarget.tagName);
//console.log(this);
//console.log(this.tagName); //alwz gives in capital
//}

//random order
// const parent = document.getElementById("parent");
// const form = document.getElementById("form");
// const button = document.getElementById("button");

//form>btn>div --form theke capture hoe btn e dn bubble hoe div e
// parent.addEventListener("click", listener);
// form.addEventListener("click", listener, true);
// button.addEventListener("click", listener);

// //div>btn>form
// // parent.addEventListener("click", listener, true);
// // form.addEventListener("click", listener);
// // button.addEventListener("click", listener);

// function listener(event) {
//   console.log(event.currentTarget, event.eventPhase);
// }

//3rd parameter other values
// capture: false,       // capture phase (default false)
//   once: true,           // listener একবার চলার পর remove হয়ে যাবে
//   passive: true,        // scroll/drag ইভেন্টে performance বাড়ায়, preventDefault() কাজ করবে না
//   signal: abortController.signal // event listener cancel করতে পারে

// const controller = new AbortController();
// parent.addEventListener("click", listener, {
//   once: true,
//   capture: true,
//   //passive: true,
//   //signal: controller.signal,
// });
// form.addEventListener("click", listener, {
//   once: true,
//   capture: true,
//   //passive: true,
//   //signal: controller.signal,
// });
// button.addEventListener("click", listener, {
//   once: true,
//   capture: true,
//   //passive: true,
//   //signal: controller.signal,
// });
// // পরে চাইলে cancel করতে পারি
// //controller.abort(); //eta dile kono event e hbena

// function listener(event) {
//   console.log(event.currentTarget, event.eventPhase);
// }

// *****************************************************
// lws --- Mastering JavaScript Event Delegation
// const list = document.querySelector("#list");
// const btnElementAdd = document.querySelector(".btn-element-add");

// btnElementAdd.addEventListener("click", function () {
//   //creating a new child element
//   const newItem = document.createElement("li");
//   newItem.innerText = `New Language`;
//   list.appendChild(newItem);
// });

// list.addEventListener("click", function (e) {
//   console.log(e.target); //element কে HTML হিসেবে দেখায়
//   console.dir(e.target); //element কে JS object হিসেবে দেখায়
//   if (e.target.matches("li")) {
//     if (e.target.innerText === "জাভাস্ক্রিপ্ট") {
//       e.target.style.backgroundColor = "red";
//     } else {
//       e.target.style.backgroundColor = "yellow";
//     }
//   }
//   // if (e.target.matches("li")) list.removeChild(e.target);
// });

//Execution Context - How JavaScript runs your code
//closure
// let sum = 0;
// function doSum(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// let temp = doSum(2);
// console.log(temp);
// sum = sum + temp(8);
// console.log(sum);
/*doSum(2) কল করলে
doSum ফাংশন a = 2 নিয়ে একটা নতুন ফাংশন রিটার্ন করছে।
মানে temp এর ভ্যালু হলো 👉
function (b) {
  return 2 + b;
}
তাই temp আসলে variable না, function reference।
JavaScript এ function হলো first-class citizen → মানে function কে ভ্যারিয়েবলে রাখা যায়, argument হিসেবে পাঠানো যায়, return করা যায়।
 */
