/*
function book( author, title, readingStatus){
    this.title = title;
    this.author = author; 
    this.readingStatus = readingStatus;
}

var TRA = new book("Bill Gates", "The Road Ahead", true);
var WI = new book("Steve Jobs", "Walter Isaacson", true);
var MJ = new book("Suzanne Collins", "Mockingjay: The Final Book of The Hunger Games", false);

let library = [TRA, WI, MJ]


function checkStatus(libraryInput){
    for (i in libraryInput){
        if(libraryInput[i].readingStatus == true){
            console.log("You have read " + libraryInput[i].title + " by " + libraryInput[i].author )
        }
        else {
            console.log("You have not read " + libraryInput[i].title + " by " + libraryInput[i].author ) 
        }
    }
}
*/


var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];


for (var i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }






   let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
   function calRows(array){ 
    var sum = 0;
        for(let i = 0; i<array.length; i++){
           let a = array[i]
           console.log(a);
            sum = 0;
           for (let j = 0; j<a.length; j++){
            sum = sum + a[j];
            console.log("The sum is " +sum)
           }
          
        }
    }
   
calRows(arr)

let L = [[1,2,3],[5,6,7],[9,10,11]];
sums = [L[0][0]+L[1][0]+L[2][0], L[0][1]+L[1][1]+L[2][1], L[0][2]+L[1][2]+L[2][2]]







