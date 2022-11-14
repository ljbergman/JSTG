"use strict";

function submitQuestion () {

    // Spara informationen från respektive fält i variabler
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;
    let answer2 = document.getElementById("answer2").value;    
    let answer3 = document.getElementById("answer3").value;  
    let answer4 = document.getElementById("answer4").value;  

    if (question.search("<table")==-1) {
        question = question.replace(/\n/g, "<br>");
    }
    question = question.replace("  ", "&nbsp;&nbsp;");

    // Alert message om ett visst fält är tomt
    if (question=="") { alert("Fråga är tomt!"); }
    else if (answer=="") { alert("Primärt svar är tomt!"); }
    else if (answer2=="") { alert("Sekundärt svar är tomt!"); }
    else if (answer3=="") { alert("Alternativt svar 1 är tomt!"); }
    else if (answer4=="") { alert("Alternativt svar 2 är tomt!"); }

    // Om inget fält är tomt, SPARA FRÅGORNA i respektive Array.
    else {
        
        
        // Pusha fråga och svar till respektive Array
        questions.push(question);
        trueAnswers.push(answer);   
        trueAnswers2.push(answer2);   
        trueAnswers3.push(answer3);   
        trueAnswers4.push(answer4);      

     // Spara informationen från respektive fält i variabler
     document.getElementById("question").value = "";
     document.getElementById("answer").value = "";
     document.getElementById("answer2").value = "";   
     document.getElementById("answer3").value = ""; 
     document.getElementById("answer4").value = "";         
        
     alert("Frågan är nu sparats!\n\nDu kan nu fortsätta skapa frågor. OBS! Allt resettas om du laddar om sidan, så se till att spara JS-fil med frågor längst ner till höger när du är klar med de frågor du vill ha med.");

    }

}

function downloadQuestions() {
    
    let question;
    let qlength = questions.length;

    // regex för att ta bort all HTML kod
    //var regex = /(<([^>]+)>)/ig
           
    question = "\"use strict\";\n\n"; // Placera "use strict" längst upp i JS-filen.
    question += `// Array with questions\n
    var questions = [ \n`;

    // Loopa i questions
    for (let i = 0; i < qlength; i++) {    
        question += `\`${questions[i]}\`, // Q${i}\n\n`;
    }

    question += `];\n\n\n`;

    // ############ ANSWERS 1 ############

    question += `// Array with true answers
    // 5 points\n
    var trueAnswers = [ \n`;

    // Loopa i questions
    for (let i = 0; i < qlength; i++) {    
        question += `\`${trueAnswers[i]}\`, // A${i}\n`;
    }

    question += `];\n\n\n`;

    // ############ ANSWERS 2 ############

    question += `// Array with secondary true answers
    // 5 points\n
    var trueAnswers2 = [ \n`;

    // Loopa i questions
    for (let i = 0; i < qlength; i++) {    
        question += `\`${trueAnswers2[i]}\`, // A${i}\n`;
    }

    question += `];\n\n\n`;  
    
     // ############ ANSWERS 3 ############

     question += `// Array with tertiary true answers 
     // 3 points\n
     var trueAnswers3 = [ \n`;
 
     // Loopa i questions
     for (let i = 0; i < qlength; i++) {    
         question += `\`${trueAnswers3[i]}\`, // A${i}\n`;
     }
 
     question += `];\n\n\n`;    

     // ############ ANSWERS 4 ############

     question += `// Array with quaternary true answers
     // 3 points\n
     var trueAnswers4 = [ \n`;
 
     // Loopa i questions
     for (let i = 0; i < qlength; i++) {    
         question += `\`${trueAnswers4[i]}\`, // A${i}\n`;
     }
 
     question += `];\n\n\n`;     

    return question;

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


 