function showingSwitch() {
  var day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day)
}

function showingSwitch2() {
  var text;
  switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday";
      break;
    case 0:
      text = "Today is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  }
  console.log(text)
}

function doWhile() {
  var counter = 0;
  do {
    console.log("The " + counter + " log");
    counter = counter + 1;
  }
  while (counter < 5);

}

function forLoop() {
  var text = 0;
  for (let i = 0; i < 10; i = i + 2) {
    text += i;
    console.log(text);
  }

}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//console.log(arr.indexOf(6))
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//console.log(arr.indexOf(6))


arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
function arrayLoop(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}


function arrayLoop(arr) {
  for (i = 0; i < arr.length; i = i + 2) {
    console.log(i)
  }
}



function Person(name, lastname, age) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  getAge = function () { alert(this.age) }
}


var ryan = new Person("ryan", "crosby", 29)




function exampleFunction() {
  var one = 1;
  if (one > 0) {
    let two = 2;
  }
  else {
    console.log("One is not greater than 0")
  }

}

// DOM MANIPULATION 

// On load of the winow create a console.log with a message 
//onload = "console.log('Hello this is your website')";

//accessing parts of the webpage 
// GetElementByID('idName')
//const introduction = document.getElementById('introduction')
//console.log(introduction)

//GetElementByTagName() returns list like array 
//const showLI = document.getElementsTagName('li')
//console.log(showLI)

//GetElementByClassName() 
//const showClassList = document.getElementsByClassName('showClass')
//console.log(showClassList)

//queryselector() // returns the first with the items 
//const container = document.querySelector('div')
//console.log(container)

//queryselectorALL() // returns all in a Node List  
//const container = document.querySelectorAll('div')
//console.log(container)

//MODIFYTEXT 

/** 
const testItem = document.querySelector('#BranSan');
console.log(testItem);
console.log(testItem.innerText);
console.log(testItem.textContent);
console.log(testItem.innerHTML);

*/


/**
const changeValue = document.getElementById('test')

changeValue.innerText = 'HELLLO CHANGING TEXT';
changeValue.innerHTML = 'HELLLO CHANGING TEXT';
*/


//MOUSEOVER 1

/*
const element = document.getElementById('BranSan');
console.log(element);
element.addEventListener('mouseover', (event) => {event.target.style.backgroundColor = "yellow"});
element.addEventListener('mouseout', (event) => {event.target.style.backgroundColor = "white"});
*/


/*
const element = document.getElementById('table');
console.log(element);
element.addEventListener('mouseover', (event) => {event.target.style.backgroundColor = "pink"});
element.addEventListener('mouseout', (event) => {event.target.style.backgroundColor = "blue"});

*/

/*
const element = document.getElementById('table');
console.log(element);
element.addEventListener('mouseover', changeColor);

function changeColor(){
  document.getElementById('branSan').style.backgroundColor = "Black"

}
*/


/*
//MOUSEOVER 2
const element = document.getElementById('BranSan');
console.log(element);
element.addEventListener('mouseover', changeText);
element.addEventListener('mouseout', revertText);


function changeText(){
  document.getElementById('BranSan').innerHTML = "A test"

}

function revertText(){
  document.getElementById('BranSan').innerHTML = "<li id ='BranSan'> Brandon Sanderson <ol>  <li> Book One</li> </ol>";

}
*/



///ATTRIBUTE MANIPULATION 
/** 
document.getElementById('TableToggle').addEventListener("click",tableToggle )
function tableToggle(){
  document.getElementById('table').setAttribute("hidden","")
}

*/

/*

function readJSON(filePath){
  fetch(filePath)
  .then(response => {
    // Check if the request was successful (status code 200)
    if (!response.ok) {
      throw new Error(`Failed to fetch JSON file. Status: ${response.status}`);
    }
    // Parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Store the parsed JSON data in the variable
    jsonData = data;
    console.log('JSON data:', jsonData);
    //document.getElementById("ShowJSONfile").innerHTML = jsonData[1].Name;
    
   
    // Log the JSON data to the console (optional)
    
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('Error fetching JSON:', error.message);
  });

  
}
*/



function readCSV(csvFilePath){
  d3.csv(csvFilePath).then(data => {
    console.log(data);
  })
}
/**/
/*
function getinfoFromForm(){
  const firstText = document.getElementById("firstText").value;
 
  let checkboxes = [];

  document.querySelectorAll('[type="checkbox"]').forEach(item=>{
    if(item.checked === true){
        checkboxes.push(item.value);
    }
  })
}
*/


///A random comment for git. 