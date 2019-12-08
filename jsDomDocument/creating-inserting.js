// html String : innerHTML , insertAdjacentHTML()
//createElement() : appendChild() , append() , prepend() ,after(),before(),insertBefore() ,replaceChild(),replaceWith()


//innerHTML it replace the old content and it is rerender the element // not performancre
let listCreate=document.querySelector('ul');
listCreate.innerHTML="<li>jhgjhg</li>" ;
//or
listCreate.innerHTML=listCreate.innerHTML+"<li>jhgjhg</li>" ;//but is rerender the all element not performance

let div=document.querySelector('div');
div.innerHTML=div.innerHTML+"<p>sdfds</p>"//if user input some text in input the value for this input will lost
// better way for that useing insertAdjacentHTML
div.insertAdjacentHTML('beforeend','<p>dsfg</p>')

///createElement()
    // appendChild add element in the last of element
    let newItem=document.createElement('li');
    let ul=document.querySelector('ul');
    newItem.textContent="add";
    ul.appendChild(newItem)

    //append add element in the last of element
    listCreate.append('some text');//add multiple node also by separed ,

    //prepend //add element in the begning of element
   // ul.prepend(newItem)

   //after before replaceWith
   ul.lastElementChild.before(newItem);
   ul.lastElementChild.after(newItem);
   ul.firstElementChild.replaceWith(newItem)

   //insertAdjacentElement
   //ul.insertAdjacentElement('afterend',newItem)

   //colne
   let copyItem=newItem.cloneNode(false) // true copy with all child 