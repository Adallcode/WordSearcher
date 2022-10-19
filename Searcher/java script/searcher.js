

//This is an object
let counterObj = {
    counter : 0
};


//Focus method put the mouse on the input, when the page loads
var target = document.getElementById("paragraph");
target.focus();


function Searcher(){
    //Before the Search, set object's counter to 0
    counterObj.counter = 0;

    const word = document.getElementById("word").value.toLowerCase();

    if(word == "")
    {
        alert("Enter the word to be searched.");
        return;
    }

    const text = target.value.toLowerCase();
    
    
    Counter(text, counterObj, text.length, word, word.length);

    

    //Set the result in html
    var res = document.getElementById("result");
    res.style.display = "flex";

    var w = document.getElementById("result-word");
    w.innerHTML = word;

    
    var counter = document.getElementById("result-counter");
    counter.innerHTML = counterObj.counter;
}

//argText = text source
//argCounter = the amount of time the word is in the text
//argLength = is the length of the text
//argWord = to the word to be searched
//wordLength = to the length of word to be searched

function Counter(argText, argCounter, argLength, argWord, wordLength)
{
    const index = argText.indexOf(argWord);
    
    if(index > -1)
    {
        argCounter.counter++;
        let tempText = "";

        for(var x = (index + wordLength); x < argLength; x++)
        {
            tempText = tempText.concat(argText[x]);
        }
        

        //Recursion
        Counter(tempText, argCounter, tempText.length, argWord, wordLength);

    }
}

