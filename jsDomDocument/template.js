// The <template> tag holds its content hidden from the client.

// Content inside a <template> tag will not be rendered.

// The content can be made visible and rendered later by using JavaScript.

// Use the <template> tag when you have HTML code you want to use over and over again,
// but not until you ask for it. To do this without the <template> tag,
// you have to create the HTML code with JavaScript to prevent the browser from rendering the code.

let template=document.getElementById('template');
let templateImportBody=document.importNode(template.content,true);
templateImportBody.querySelector('p').textContent='hi template';

let elementCreation=document.createElement('div');
elementCreation.append(templateImportBody);
document.body.append(elementCreation);
console.log(templateImportBody);
