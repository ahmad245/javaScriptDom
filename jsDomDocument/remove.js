//remove()
let listRemove=document.querySelector('ul');
listRemove.remove();// not supported in internet explorel
//or
listRemove.parentElement.removeChild(listRemove);