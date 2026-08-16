// https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html,1-colorChanger%2Fstyle.css,.vscode%2Fsettings.json  

//this is the link for reference code of below coding

```javascript

const buttons = document.querySelectorAll('.button');
// a nodelist of all buttons will be created by grabbing all elements with class button from html code
const body = document.querySelector('body');

buttons.forEach(function (button) {
  //button is the parameter name here
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```