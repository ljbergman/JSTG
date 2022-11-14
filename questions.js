"use strict";



// Array with questions



    var questions = [ 

`Deklarera variabeln hundnamn med text-innehållet Ludde. OBS! Inte en konstant.`, // Q0



`Fyll i det statement som saknas för att stoppa följande while loop vid gula linjen:<br><br>

    

    while (true) {<br>

        &nbsp;&nbsp;&nbsp;&nbsp;output += x * y;<br>

        &nbsp;&nbsp;&nbsp;&nbsp;i++;<br>

        &nbsp;&nbsp;&nbsp;&nbsp;if (i>5) <span style="color: #ff0;">________</span><br>

    }

    `, // Q1



`Deklarera variabeln bil med text-innehållet BMW. OBS! Inte en konstant.`, // Q2



`<table><tr><td style="width: 550px; padding: 10px; font-family: sans-serif; font-size: 18px; font-weight: normal;">Angular is one of the most popular open-source Javascript frameworks being used today.

    What year was Angular first released?</td><td style="padding: 10px;"><img src="images/angular.png" style="width: 240px; border-radius: 10px;"></td></tr></table>`, // Q3



`Skriv en klassisk i-baserad for loop där i börjar på 0 och loopar 5 gånger uppåt utan innehåll mellan { }. Ingen kod får förekomma före eller efter själva for-satsen. Variabeln i måste deklareras i for-satsen, inte före, och var får inte användas. Inga andra siffror än 5 och 0 får förekomma.`, // Q4



`Vad visas i konsolen när vi kör följande kodstycke?<br><br>

    const a = foo(3);<br>

    console.log(a);<br>    

     function foo(i) {<br>

        &nbsp;&nbsp;&nbsp;&nbsp; return i * i;<br>

    }`, // Q5



`<table><tr><td style="width: 590px; padding: 10px; font-family: sans-serif; font-size: 18px; font-weight: normal;">JavaScript skapades på Netscape Communications av Brendan Eich år <span style="color: #ff0;">______</span>. Netscape och Eich designade JavaScript som ett skriptspråk för användning med företagets webbläsare Netscape Navigator.<br><br>Vilket år skapades Javascript?</td><td style="padding: 10px;"><img src="images/netscape.jpg" style="width: 200px; border-radius: 10px;"></td></tr></table>`, // Q6



`Vad får vi för typ av error när vi kör följande kodstycke i en i övrigt tom .js fil?<br><br>

    "use strict";<br>

    let x = 'test';<br>

    for (i=0; i<=17; i+=1) {<br>

     &nbsp;&nbsp;&nbsp;&nbsp; console.log(x);<br>

    }

    

    `, // Q7



`<table><tr><td style="width: 590px; padding: 10px; font-family: sans-serif; font-size: 18px; font-weight: normal;">Vad heter mannen på bilden? För- och efternamn.</td><td style="padding: 10px;"><img src="images/brendan.jpg" style="width: 140px; border-radius: 10px;"></td></tr></table>`, // Q8



`<table><tr><td style="width: 590px; padding: 10px; font-family: sans-serif; font-size: 18px; font-weight: normal;">React.js utvecklades av <span style="color: #ff0;">_____________</span> för att möta behovet av ett dynamiskt och högpresterande användargränssnitt (UI). Fyll i gula luckan.</td><td style="padding: 10px;"><img src="images/react.png" style="width: 200px; border-radius: 10px;"></td></tr></table>`, // Q9



`Använd const och deklarera en array vid namn minArray och lägg in elementen 120, 150 och 180 i den i ett och samma statement.`, // Q10



`Skapa en funktion vid namn minFunktion som returnerar parameter a * parameter b samt konsol-loggar Uträkning genomförd! Använd inga andra variabler.`, // Q11



`Deklarera variabeln n med let och ge den värdet 0. Skapa sen ett WHILE STATEMENT där n ökar med 1 så länge n är mindre än 7. Ha inget annat i kodblocket { } än ökningen.`, // Q12



`Deklarera variabeln area och ge den värdet 5 * 6. Den ska kunna ändras senare.`, // Q13



`Vilken typ av error kan vi förvänta oss när följande kod körs?<br><br>

    const cars = ["BMW", "Volvo", "Saab", "Ford"];<br>

        let i = 0;<br>

        let text = "";<br>

        for (;cars[i]) {<br>

            &nbsp;&nbsp;&nbsp;&nbsp; text += cars[i];<br>

            &nbsp;&nbsp;&nbsp;&nbsp; i++;<br>

        }`, // Q14



`Kommer följande kod att fungera korrekt? Svara Ja eller Nej.<br><br>

        const cars = ["BMW", "Volvo", "Saab", "Ford"];<br>

            let i = 0;<br>

            let text = "";<br>

            for (;cars[i];) {<br>

                &nbsp;&nbsp;&nbsp;&nbsp; text += cars[i];<br>

                &nbsp;&nbsp;&nbsp;&nbsp; i++;<br>

    }`, // Q15



`Vad kommer loggas i konsolen här?<br><br>



    let top = function(i){<br>

        &nbsp;&nbsp;&nbsp;&nbsp; return 2*i*i;<br>

    };<br><br>

    

    let bot = function(x, y){<br>

        &nbsp;&nbsp;&nbsp;&nbsp; return x(y);<br>

    };<br><br>

    

    let a = bot(top, 4);

    console.log(a);`, // Q16



`Vad kommer loggas i konsolen här?<br><br>



    let a = 5;<br>



    function foo() {<br>

        &nbsp;&nbsp;&nbsp;&nbsp; return ++a;<br>

    }<br><br>



    a += foo() * 4;<br>

    console.log(a);`, // Q17



`<table><tr><td style="width: 546px; padding: 10px; font-family: sans-serif; font-size: 18px; font-weight: normal;">Vad står den inom programmering viktiga principen D.R.Y för?</td><td style="padding: 10px;"><img src="images/drywet.png" style="width: 240px; border-radius: 10px;"></td></tr></table>`, // Q18



`Vad är HTML en förkortning av?`, // Q19



`<table><tr><td style="width: 550px; padding: 10px; font-family: sans-serif; font-size: 18px; font-weight: normal;">Vem uppfann HTML?</td><td style="padding: 10px;"><img src="images/timbernerslee.jpg" style="width: 240px; border-radius: 10px;"></td<br /></tr></table>`, // Q20



];





// Array with true answers

    // 5 points



    var trueAnswers = [ 

`let hundnamn = "Ludde";`, // A0

`break;`, // A1

`let bil = "BMW";`, // A2

`2010`, // A3

`for (let i=0; i<5; i++) { }`, // A4

`9`, // A5

`1995`, // A6

`ReferenceError`, // A7

`Brendan Eich`, // A8

`Facebook`, // A9

`const minArray = [

        120,

        150,

        180,

    ];`, // A10

`function minFunktion(a,b) {

        console.log("Uträkning genomförd!");        

        return a * b;

      }`, // A11

`let n = 0;

      while (n < 7) {

        n++;

      }`, // A12

`let area = 5 * 6;`, // A13

`Syntax Error`, // A14

`Ja`, // A15

`32`, // A16

`29`, // A17

`Don't Repeat Yourself`, // A18

`HyperText Markup Language`, // A19

`Tim Berners-Lee`, // A20

];





// Array with secondary true answers

    // 5 points



    var trueAnswers2 = [ 

`var hundnamn = "Ludde";`, // A0

`break;`, // A1

`var bil = "BMW";`, // A2

`år 2010`, // A3

`for (let i=0; i<5; i=i+1) { }`, // A4

`9`, // A5

`95`, // A6

`Reference Error`, // A7

`BrendanEich`, // A8

`Jordan Walke`, // A9

`const minArray = [

        120,

        150,

        180

    ];`, // A10

`function minFunktion(a,b) {

        console.log("Uträkning genomförd!");

        return (a * b);       

      }`, // A11

`let n = 0;

      while (n < 7) {

        n += 1;

      }`, // A12

`var area = 5 * 6;`, // A13

`SyntaxError`, // A14

`/* I det här exemplet är for-loopen byggd i stil med en while loop utan 



    statement 1 och 3 (; ; blir kvar med statement 2 mellan), och JA, det 

 

    fungerar även om det ser lite konstigt ut. */`, // A15

`/* 32. Anledningen är att hela funktionen top skickas in som parameter 1

 

    i funktionen bot, vilket gör att x inne i bot blir samma sak som funktionen

 

    top. y skickas alltså här in i top, vilket ger 2*y*y, vilket blir 2*4*4, 



    vilket är 32. */`, // A16

`29`, // A17

`Dont Repeat Yourself`, // A18

`Hyper Text Markup Language`, // A19

`Tim Berners Lee`, // A20

];





// Array with tertiary true answers 

     // 3 points



     var trueAnswers3 = [ 

`let hundnamn = "Ludde"`, // A0

`break;`, // A1

`let bil = "BMW";`, // A2

`Twenty ten`, // A3

`for (let i=0; i<5; i+=1) { }`, // A4

`9`, // A5

`1995`, // A6

`ReferenceError: i is not defined`, // A7

`Brendan`, // A8

`Meta`, // A9

`const minArray = [

        120,

        150,

        180,

    ]`, // A10

`function minFunktion(a,b) {

        console.log("Uträkning genomförd!")

        return a * b       

      }`, // A11

`let n = 0;

      while (n < 7) {

        n = n + 1;

      }`, // A12

`let area = 6 * 5;`, // A13

`SyntaxError: Unexpected token ')'`, // A14

`Yes`, // A15

`Trettiotvå`, // A16

`Tjugonio`, // A17

`Do not Repeat Yourself`, // A18

`HyperText Markup Language`, // A19

`Tim Berners`, // A20

];





// Array with quaternary true answers

     // 3 points



     var trueAnswers4 = [ 

`var hundnamn = "Ludde"`, // A0

`break;`, // A1

`var bil = "BMW";`, // A2

`Tvåtusentio`, // A3

`for (let i=0; i<=4; ++i) { }`, // A4

`9`, // A5

`95`, // A6

`Reference`, // A7

`Eich`, // A8

`Walke`, // A9

`const minArray = [

        120,

        150,

        180

    ]`, // A10

`function minFunktion(a,b) {

        console.log("Uträkning genomförd!")

        return (a * b)       

      }`, // A11

`let n = 0;

      while (n < 7) {

        ++n;

      }`, // A12

`var area = 6 * 5;`, // A13

`Syntax`, // A14

`J a`, // A15

`Thirty two`, // A16

`Twenty nine`, // A17

`Don't.Repeat.Yourself`, // A18

`HyperText Markup Language`, // A19

`Berners-Lee`, // A20

];





