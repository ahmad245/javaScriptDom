// document.getElementById('');
// document.querySelector('');



// document.getElementsByName('');

// document.querySelectorAll('');
// document.getElementsByTagName('');
// document.getElementsByClassName('');

// let elId=document.getElementById('id');



// document.querySelector('#id');
// document.querySelector('.class');
// document.querySelector('ul li:first-of-type');
// let ul =document.querySelector('ul');
// ul.querySelector('li');


// document.querySelectorAll('ul');// list of node 


// //setAttribute() it is updata value in dom but if i input.value =>the value old but input.getAttribute is true
// const input=document.querySelector('input');
// input.setAttribute('value','some value');
// input.getAttribute('value');// return the value changed
// input.value ; //  return value old befor changed

// // attribiute vs proberty 
// // Attribute are difined by html input.setAttribute('value','some value'); input.getAttribute('value');// return the value changed
// // property are difined by dom object  input.value 
// // attributes can not  changes 
// // property can changes



// let lis=document.querySelectorAll('li');
// console.log(lis);

// for (const item of lis) {
//     item.textContent="dfg"
//     item.remove();
// }

// let lis1=document.getElementsByTagName('li');
// console.log(lis1);

// for (const item of lis) {
//    console.log(item.textContent);
   
  
// }

// // traversing dom 
// // children  Descendants Parents Ansectors 

// <div>
//  <p> <em></em> </p>
// </div>

// // child direct child : p child of div

// // Descendants direct or indirect child :  p em  childes of div

// // Parents direct parent : div is parent of p

// // Ansectors direct and indirect  parent  : div is parent of p and em

// // Direction 
// // up parentNode parentElement closest()
// // down childNode children querySelector()  firstChild firstElementChild lastChild lastElementChild
// // sibling previousSibling previousElementSibling nextSibling nextElementSipling 
//  let list =document.querySelector('ul');
// // child vs childNode 

// //////////////////////child//////////////////////////
// // list.children 
// //     HTMLCollection(5)
// //     ​
// //     0: <li>​
// //     1: <li>​
// //     2: <li>​
// //     3: <li>​
// //     4: <li>
// //     ​
// //     length: 5

// // list.childNode    
// //     NodeList(11)
// //     ​
// //     0: #text "
// //             "​
// //     1: <li>​
// //     2: #text "
// //             "​
// //     3: <li>​
// //     4: #text "
// //             "​
// //     5: <li>​
// //     6: #text "
// //             "​
// //     7: <li>​
// //     8: #text "
// //             "​
// //     9: <li>​
// //     10: #text "
// //         "
// //     ​
// //     length: 11

// // list.firstChild 
// //  #text " "    

// // List.childElementNode
// //  li

//  ////////////////PARENT/////////////////////
// // list.parentElement vs list.parentNode no different
// list.closest('body') // select any parent we want 

// ///////////////////Sibling//////////////////////// 
// // list.previousElementSibling <header></header>  // performance better than querySelector
// // list.previousSibling text ""  // performance better than querySelector


// 
//document.querySelectorAll vs document.getElementsByTagName
let liSelectorAll=document.querySelectorAll('li')//nodeList
let liByTagName=document.getElementsByTagName('li')//HtmlCollections

let newtElement=document.createElement('li');
newtElement.textContent="new li element";

let ulList=document.querySelector('ul');
ulList.append(newtElement);

// liByTagName // the newtElement will display
// liSelectorAll // the newtElement will not display 