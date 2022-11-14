"use strict";

// Exempelkod som ger output

// Ett spel som skapar JS-relaterade frågor att svara på och samla poäng.
// Kan även ses som ett träningsredskap för Javascript studenter.

// Kan behöva sägas att man ska använda " " t ex.


// Array with collected user points
var userPoints = [];

// Array with the number of times a player was wrong
var userWrongs = [];


var qx = 0;

//alert("Dö börjar vi!");

var qTitle = `<span style="color: #ff0; font-weight: bold;">Fråga `; // Fråge-titeln
var qTitle2 = `</span>`;
var endTitle = `<center><span style="color: #ff0; font-weight: bold; font-size: 24px;">`; // Fråge-titeln
var endTitle2 = `</span></center>`;

window.onload = function() { 
    
    qx = questions.length-1;
    
    //document.getElementById("question").value = q1; // value exempel
    document.getElementById("question").innerHTML = qTitle + (qx+1) + ": " + qTitle2 + questions[qx];
    // Visar just nu den senast inlagda frågan först.
    let specq  =  window.location.search.substr(1); // questions.length;
    if (specq!=="") { 
        // Börja på en specifik fråga, istället för Fråga 1.
        // Styrs av browsers url?frågenummer... t ex jsgame.html?11
        specQuestion(Number(specq)-1); 
    }

    document.getElementById("nrof_questions").innerHTML = questions.length;
    document.getElementById("questionsleft").innerHTML = questions.length - countDefined(userPoints);
    

}

var displayedPoints;
var displayedWrongs;
var audioNextQ = new Audio('sound/nextq2.wav');
var audioWin = new Audio('sound/correct.wav');
var audioLoss = new Audio('sound/wrong.wav');
var audioVictory = new Audio('sound/victory.wav');

// Funktion för att checka om frågan redan besvarats korrekt tidigare
function questionDone (qi) {
    if (userPoints[qi] === undefined) {
        return false;
      } else {
        return true;
      }
}

// Slumpa fram fråga
function die(qi, length) {    
    // Kör length+500 för att maximera antalet loopar så att den hittar rätt innan loopen är slut.
    for (let i=0; i<length+500; i++) {
        // metod anrop som returnerar en random siffra och rundar av den till heltal (neråt) med floor.
        let r = Math.floor(Math.random() * length); 
        
        // Stoppa loopen om r är en ny fråga och inte samma som qi
        if (r!==qi && questionDone(r)===false) { return r; }       
    }      
}    
    
function showAnswer(qx) {    
    if (typeof userWrongs[qx]=="undefined") { 
        document.getElementById("answer").value = "";
    } else { 
        document.getElementById("answer").value = userWrongs[qx][0];
    } 
}    

// Funktion för att spara korrekt resultat och gå till nästa fråga.
// Parametern p står för poäng, och har 5 som default värde.
// Vissa svar ger mindre poäng än 5, andra mer. 
function correctAnswer(p=5) {

       //alert("RÄTT SVARAT! Du svarade: \n" + trueAnswers[qx]); 
       userPoints[qx] = p;
       // Spela vinst-ljud       
       audioWin.play();
       
       // Slumpa fram en ny fråga.
       qx = die(qx, (questions.length));

    // Om alla frågor redan har besvarats korrekt:
    if (typeof qx==="undefined") { 
       let finished = `Grattis! 🏆 Du har nu svarat korrekt på samtliga frågor!<br><span style="font-size: 13px; font-weight: normal;">Vill du kika närmare på de frågor du var dålig på, ladda ner JS-filen via knappen nere till höger.</span>`; 
       // Spela vinst-ljud       
       audioVictory.play();

       document.getElementById("question").innerHTML = endTitle + finished + endTitle2;       
    } // Annars, visa den obesvarade fråga som slumpats fram:       
    else {
           document.getElementById("question").innerHTML = qTitle + (qx+1) + ": " + qTitle2 + questions[qx];
       // Run the showAnswer Function. It will either contain an old answer or an empty field.
           showAnswer(qx);
                   
           // Konvertera string till number
           displayedPoints = Number(document.getElementById("pointsDisplay").innerHTML);
           // Lägg till 10 poäng
           displayedPoints += p;
           document.getElementById("pointsDisplay").innerHTML = displayedPoints;
       }    

}


function submitAnswer() {
    // User answers
    let useranswer = document.getElementById("answer").value; // Spelarens svar
    let useranswer2 = useranswer.toLowerCase(); // Omvandla till lowercase
    let useranswer3 = useranswer2.replace(/\s/g,''); // Ta bort all white space
    
    // True answers
    let trueAnswer = trueAnswers[qx].toLowerCase().replace(/\s/g,''); // Answer 
    let trueAnswerBT = trueAnswer.replaceAll('"', '`'); // Answer with BackTicks  
    let trueAnswerSQ = trueAnswer.replaceAll('"', "'"); // Answer with Single Quotes   
   // True answers 2
    let trueAnswer2 = trueAnswers2[qx].toLowerCase().replace(/\s/g,''); // Answer 2
    let trueAnswer2BT = trueAnswer2.replaceAll('"', '`'); // Answer 2 with BackTicks
    let trueAnswer2SQ = trueAnswer2.replaceAll('"', "'"); // Answer2 with Single Quotes
    // True answers 3
    let trueAnswer3 = trueAnswers3[qx].toLowerCase().replace(/\s/g,''); // Answer 
    let trueAnswer3BT = trueAnswer3.replaceAll('"', '`'); // Answer with BackTicks  
    let trueAnswer3SQ = trueAnswer3.replaceAll('"', "'"); // Answer with Single Quotes   
   // True answers 4
    let trueAnswer4 = trueAnswers4[qx].toLowerCase().replace(/\s/g,''); // Answer 2
    let trueAnswer4BT = trueAnswer4.replaceAll('"', '`'); // Answer 2 with BackTicks
    let trueAnswer4SQ = trueAnswer4.replaceAll('"', "'"); // Answer2 with Single Quotes

    

    // If sats som kollar om svaret är rätt eller fel
    // trueAnswer
    if (useranswer3==trueAnswer) { 
        // Spara resultat och gå till nästa fråga. Argumentet 5 = erhållna poäng.
        correctAnswer(5);
        
    } // trueAnswer2
    else if (useranswer3==trueAnswer2) {   
        // Spara resultat och gå till nästa fråga. Argumentet 5 = erhållna poäng.
        correctAnswer(5);
    } // trueAnswer3 
    else if (useranswer3==trueAnswer3) {   
        // Spara resultat och gå till nästa fråga. Argumentet 3 = erhållna poäng.
        correctAnswer(3);
    } // trueAnswer4
    else if (useranswer3==trueAnswer4) {   
        // Spara resultat och gå till nästa fråga. Argumentet 3 = erhållna poäng.
        correctAnswer(3);
    } // Om user-svaret har BACKTICKS istället för Double Quotes (tA)
    else if (useranswer3==trueAnswerBT) {   
        // Spara resultat och gå till nästa fråga. Argumentet 5 = erhållna poäng.
        correctAnswer(5);
    } // Om user-svaret har BACKTICKS istället för Double Quotes (tA2)
    else if (useranswer3==trueAnswer2BT) {   
        // Spara resultat och gå till nästa fråga. Argumentet 5 = erhållna poäng.
        correctAnswer(5);
    } // Om user-svaret har BACKTICKS istället för Double Quotes (tA3)
    else if (useranswer3==trueAnswer3BT) {   
        // Spara resultat och gå till nästa fråga. Argumentet 3 = erhållna poäng.
        correctAnswer(3);
    } // Om user-svaret har BACKTICKS istället för Double Quotes (tA4)   
    else if (useranswer3==trueAnswer4BT) {   
        // Spara resultat och gå till nästa fråga. Argumentet 3 = erhållna poäng.
        correctAnswer(3);
    } // Om user-svaret har SINGLE QUOTES istället för Double Quotes (tA)     
    else if (useranswer3==trueAnswerSQ) {   
        // Spara resultat och gå till nästa fråga. Argumentet 5 = erhållna poäng.
        correctAnswer(5);
    } // Om user-svaret har SINGLE QUOTES istället för Double Quotes (tA2)  
    else if (useranswer3==trueAnswer2SQ) {   
        // Spara resultat och gå till nästa fråga. Argumentet 5 = erhållna poäng.
        correctAnswer(5);
    } // Om user-svaret har SINGLE QUOTES istället för Double Quotes (tA3)    
    else if (useranswer3==trueAnswer3SQ) {   
        // Spara resultat och gå till nästa fråga. Argumentet 3 = erhållna poäng.
        correctAnswer(3);
    } // Om user-svaret har SINGLE QUOTES istället för Double Quotes (tA4)      
    else if (useranswer3==trueAnswer4SQ) {   
        // Spara resultat och gå till nästa fråga. Argumentet 3 = erhållna poäng.
        correctAnswer(3);
    } // Om user-svaret är tomt           
    else if (useranswer3=="") { 
        alert("Svarsfältet är tomt!");
    }
    // Om svaret på frågan är FEL
    else { 
       
        // Kolla om arrayen userWrongs[qx] existerar. Om inte: Skapa en Array med felsvar där.
        if (typeof userWrongs[qx] == "undefined") { userWrongs[qx] = []; }
        // När användaren har svarat fel lagras felet i början av Arrayen userWrongs()
        userWrongs[qx].unshift(useranswer);

         // Spela loss-ljud       
         audioLoss.play();

         // Konvertera string till number
         displayedWrongs = Number(document.getElementById("wrongsDisplay").innerHTML);
         // Lägg till 1 fel
         displayedWrongs += 1;
         document.getElementById("wrongsDisplay").innerHTML = displayedWrongs; 

    }


    // TEMPORÄRA consol.logs FÖR FELSÖKNING 
    /*
    console.log(userPoints);
    console.log(" ");
    console.log(userWrongs);
    */
    
    document.getElementById("questionsleft").innerHTML = questions.length - countDefined(userPoints);
    
 }

 // Funktion som enbart räknar definierade inlägg
 function countDefined(array) {
    let value = 0;
    for (let i=0; i<array.length;i++) {
        if (typeof array[i]!=="undefined") { value++; }
    } 
    return value;
 }

 function nextQuestion() {

// Spela next-ljud       
    audioNextQ.play();
   
    // Slumpa fram en ny fråga.
    qx = die(qx, (questions.length));
  
        // Om alla frågor redan har besvarats korrekt:
        if (typeof qx==="undefined") { 
            let finished = `Bara en fråga kvar nu. Gå till <a href="#" onclick="nextQuestion()" style="text-decoration: none; color: #ff0;">sista frågan &rarr;</a>`; 
            // Spela vinst-ljud       
            //audioVictory.play();
            document.getElementById("question").innerHTML = endTitle + finished + endTitle2;       
        } // Annars, visa den obesvarade fråga som slumpats fram: 
        else {
            document.getElementById("question").innerHTML = qTitle + (qx+1) + ": " + qTitle2 + questions[qx];
            // Run the showAnswer Function. It will either contain an old answer or an empty field.
            showAnswer(qx);
        }
       
}

function specQuestion(q) {

    // Spela next-ljud       
        audioNextQ.play();
            
        qx = q;

            // Om alla frågor redan har besvarats korrekt:
            if (typeof qx==="undefined") { 
                let finished = `Bara en fråga kvar nu. Gå till <a href="#" onclick="nextQuestion()" style="text-decoration: none; color: #ff0;">sista frågan &rarr;</a>`; 
                // Spela vinst-ljud       
                //audioVictory.play();
                document.getElementById("question").innerHTML = endTitle + finished + endTitle2;       
            } // Annars, visa den obesvarade fråga som slumpats fram: 
            else {
                document.getElementById("question").innerHTML = qTitle + (qx+1) + ": " + qTitle2 + questions[qx];
                // Run the showAnswer Function. It will either contain an old answer or an empty field.
                showAnswer(qx);
            }
    
            
    }



function studieUppgifter() {
    let answer;
    let question;
    let uwLength = userWrongs.length;

    // regex för att ta bort all HTML kod
    var regex = /(<([^>]+)>)/ig
           
    answer = "\"use strict\";\n\n"; // Placera "use strict" längst upp i JS-filen.
    answer += "/* ########## FRÅGOR DU SVARAT FEL PÅ ########## */ \n\n"; // FELAKTIG svar att plugga på

    // Loopa i userWrongs arrayen
    for (let i = 0; i < uwLength; i++) {
        // Om inget FEL loggats där ännu (dvs undefined)
        if (typeof userWrongs[i]=="undefined") { 
            /* gör ingenting */ 
        } 
        else {
        question = questions[i].replace(/&nbsp;/g, ' '); // Ersätt &nbsp med mellanslag.
        question = question.replace(/<br>/g, "\n"); // Ersätt <br> med nedhopp/ny rad.
        question = question.replace(regex, ""); // Ta bort all HTML kod.
        answer += `// ############################  Fråga ${i+1} ##########################################  \n `;
        answer += `/* ${question}\n\n */ \n\n`;
        answer += `// Antal fel: ${userWrongs[i].length}\n\n`;

        // Loopa i sub-arrayen userWrongs[i] där spelarens olika FEL-svar ligger
        for (let y = 0; y < userWrongs[i].length; y++) {
            answer += `// Ditt felaktiga svar #${y+1} \n\n ${userWrongs[i][y]}\n\n `;
        }

       // Om frågan har besvarats korrekt 
       if (questionDone(i)) { 
            answer += `// Du besvarade till slut frågan korrekt! 🏆 \n\n`; 
            answer += `// Det ena korrekta svaret: \n\n ${trueAnswers[i]} \n\n `; 
            answer += `// Det andra korrekta svaret: \n\n ${trueAnswers2[i]} \n\n `; 
        }

        answer += `// ################################################################################ \n\n\n `;
     }
    }
    return answer;
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }


// Funktion för att byta tema/bakgrund
function changeTheme() {
    // Selectbox with id stheme
    let theme = document.getElementById("stheme").value;
    // Body
    let body = document.getElementsByTagName('body')[0];
    if (theme=="green") {
        body.style.backgroundImage = 'linear-gradient(rgba(100,100,155,0.5), rgba(255,255,255,0.0)),url(images/background3.jpg)';
    } else if (theme=="blue") {
        body.style.backgroundImage = 'linear-gradient(rgba(0,0,255,0.4), rgba(255,255,255,0.0)),url(images/background.jpg)';
    } else  {
        body.style.backgroundImage = 'linear-gradient(rgba(200,200,255,0.4), rgba(255,255,255,0.0)),url(images/background2.jpg)';
    }     
}   


 /*
let useranswer = document.getElementById("answer").value;
console.log(useranswer);


function populateTextarea() {
    //get the text by id or predefined or however you wish or passed to function
    var txt = a1;

    document.getElementById("answer").value = txt;
 }
 */