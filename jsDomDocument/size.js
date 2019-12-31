const mainBox=document.getElementById('main-box');

//getBoundingClientRect() :  method returns the size of an element and its position relative to the viewport.
let getBoundingClientRect= mainBox.getBoundingClientRect() //  { x: 200, y: 200, width: 300, height: 200, top: 200, right: 500, bottom: 400, left: 200 }
console.log('getBoundingClientRect',getBoundingClientRect);


// offset
let offsetTop=mainBox.offsetTop; // read-only property is the number of pixels from the top of the closest relatively positioned parent element.
let offsetLeft=mainBox.offsetLeft; // read-only is an integer representing the offset to the left in pixels from the closest relatively positioned parent element.
let offsetWidth=mainBox.offsetWidth; // read-only property returns the layout width of an element as an integer.
let offsetHeight=mainBox.offsetHeight;// read-only property  height of an element, including vertical padding and borders, as an integer.
let offsetParent=mainBox.offsetParent; // read-only is an object reference to the element in which the current element is offset

console.log('offsetTop',offsetTop);
console.log('offsetLeft',offsetLeft);
console.log('offsetWidth',offsetWidth);
console.log('offsetHeight',offsetHeight);
console.log('offsetParent',offsetParent);

// client
let clientTop=mainBox.clientTop;//The width of the top border of an element in pixels. It is a read-only, integer property of element.
let clientLeft=mainBox.clientLeft;//The width of the left border of an element in pixels. It includes the width of the vertical scrollbar 
let clientWidth=mainBox.clientWidth; //The Element.clientWidth property is zero for inline elements and elements with no CSS; otherwise, it's the inner width of an element in pixels. It includes padding but excludes borders, margins, and vertical scrollbars (if present).
let clientHeight=mainBox.clientHeight; // The Element.clientHeight read-only property is zero for elements with no CSS or inline layout boxes; otherwise, it's the inner height of an element in pixels. It includes padding but excludes borders, margins, and horizontal scrollbars (if present).

console.log('clientTop',clientTop);
console.log('clientLeft',clientLeft);
console.log('clientWidth',clientWidth);
console.log('clientHeight',clientHeight);

// Most of the time these are the same as width and height of getBoundingClientRect(),
// when there aren't any transforms applied to the element. In case of transforms, 
//the offsetWidth and offsetHeight returns the element's layout width and height,
// while getBoundingClientRect() returns the rendering width and height.

// scroll
let scrollTo=mainBox.scrollTo(0,100); // scroll to 100 px on y 
let scrollBy=mainBox.scrollBy(0,100)// scroll to 100 px on y  again and again
let scroll=mainBox.scrollIntoView();

let scrollLeft =mainBox.scrollLeft;
let  scrollTop=mainBox.scrollTop;
let scrollWidth =mainBox.scrollWidth;
let scrollHeight =mainBox.scrollHeight;

let windowScrollX=window.scrollX;
let windowScrollY=window.scrollY;

let windowInnerHeight=window.innerHeight;//with scroll size
let windowInnerWidth=window.innerWidth;//with scroll size

let documentClientHeight=document.documentElement.clientHeight;//without scroll size
let documentClientWidth=document.documentElement.clientWidth;//without scroll size

console.log('scrollLeft',scrollLeft);
console.log('scrollTop',scrollTop);
console.log('scrollWidth',scrollWidth);
console.log('scrollHeight',scrollHeight);

console.log('windowScrollX',scrollX);
console.log('windowScrollY',scrollY);
console.log('windowInnerHeight',windowInnerHeight);
console.log('windowInnerWidth',windowInnerWidth);

console.log('documentClientHeight',documentClientHeight);
console.log('documentClientWidth',documentClientWidth);
