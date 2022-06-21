// Examine the document object //

// console.dir(document);
// var input = document.querySelector('input');
// input.value = 'hello world';
//
// var submit = document.querySelector('input[type="submit"]'');
// submit.value = 'SEND';
//
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
//
// var lastItem = document.querySelector('.list-group-item:last-child');
// var lastItem = document.querySelector('.list-group-item:nth-child(2)');
//
// var allItem = document.querySelectorAll('.title');
//
// var odd = document.querySelectorAll('li:nth-child(odd)');
//
// for(var i = 0;i<odd.length; i++) {
//   odd[i].style.bakcgroudColor='#f4f4f4';
// }

const btn = document.querySelector('.btn');
let boxes = document.getElementsByClassName('box');

// console.log(typeof boxes);
btn.addEventListener('click', (e) => {
  e.preventDefault()
  let txt = document.querySelector('.form-control').value;
  if (txt!='') {
    let li = document.createElement('li');
    let div = document.createElement('div');
    let itemList = document.getElementById('items');

    li.appendChild(document.createTextNode(txt));
    li.classList.add("list-group-item");
    div.classList.add("box");
    li.appendChild(div);
    itemList.appendChild(li);
    addListenerOnItem(li);
  }
  else {
    alert('Enter text');
  }

});

Array.from(boxes).forEach(function (i)
    {
     i.addEventListener('click', (e) => {
       e.preventDefault();
       // console.log(e.target.parentElement);
       e.target.parentElement.remove();
     });
   });

function addListenerOnItem(i) {
  i.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.parentElement.remove();
  });
}

// var itemList = document.querySelector('#items');
//
// // console.log(itemList.children);
// console.log(itemList.nextElementSibling);
