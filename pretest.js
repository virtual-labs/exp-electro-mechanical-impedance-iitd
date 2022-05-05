/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. Free-Free condition is simulated in the experiment using", ///// Write the question inside double quotes
            answers: {
                a: "Cello tape", ///// Write the option 1 inside double quotes
                b: "Hard support", ///// Write the option 2 inside double quotes
                c: "Nutand Bolt", ///// Write the option 1 inside double quotes
                d: "None of the above", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "2. The user may acquire the plots of the ______ and ______ against frequency using the LCR meter.", ///// Write the question inside double quotes
            answers: {
                a: "Conductance and susceptance", ///// Write the option 1 inside double quotes
                b: "Time and frequency", ///// Write the option 2 inside double quotes
                c: "Length and height", ///// Write the option 1 inside double quotes
                d: "Time and frequency domain data", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },

        {
            question: "3. From the frequency plot, the user can identify the _____ of the beam in axial mode.", ///// Write the question inside double quotes
            answers: {
                a: "Damping ratio", ///// Write the option 1 inside double quotes
                b: "Natural frequency", ///// Write the option 2 inside double quotes
                c: "Mode shape", ///// Write the option 1 inside double quotes
                d: "All of the above", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        {
            question: "4. Out of G and B which is better for identification of frequency ", ///// Write the question inside double quotes
            answers: {
                a: "G", ///// Write the option 1 inside double quotes
                b: "B", ///// Write the option 2 inside double quotes
                c: "Either a & b ", ///// Write the option 1 inside double quotes
                d: " Neither a & b", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "5. In this experiment, the modes of vibration are", ///// Write the question inside double quotes
            answers: {
                a: "Low frequency", ///// Write the option 1 inside double quotes
                b: "High frequency", ///// Write the option 2 inside double quotes
                c: "Medium frequency", ///// Write the option 1 inside double quotes
                d: "None of the above", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },
        


    // {
    //   question: "<img src='images/8.PNG'><br>Identify the location of Secondary electron detector",  ///// Write the question inside double quotes
    //   answers: {
    //     a: "<img src='images/1b.png'>",                  ///// Write the option 1 inside double quotes
    //     b: "<img src='images/1a.png'>",                  ///// Write the option 2 inside double quotes
    //     c: "<img src='images/1c.PNG'>",      },
    //   correctAnswer: "c"                ///// Write the correct option inside double quotes
    // },


        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
