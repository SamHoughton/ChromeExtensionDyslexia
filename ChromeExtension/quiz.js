(function () {
    const myQuestions = [
        {
            question: "What colour background is preferred?",
            answers: {
                1: "Red",
                2: "Yellow",
                3: "Green",
                4: "Blue",
                5: "Black"
            },
            correctAnswer: "c"
    },
        {
            question: "How much spacing is wanted between letters?",
            answers: {
                a: "1px",
                b: "2px",
                c: "3px"
            },
            correctAnswer: "c"
    },
        {
            question: "What font size is preferred?",
            answers: {
                s: "Small",
                m: "Medium",
                l: "Large"
            },
            correctAnswer: "c"
    },
        {
            question: "What text colour is preferred?",
            answers: {
                i: "Orange",
                ii: "Black",
                iii: "Yellow"
            },
            correctAnswer: "c"
    }

  ];

    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];
        var i = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                var options = ["#ff0000", "#ffff00", "#00ff00", "#0000ff", "#000", "1px", "2px", "3px", "small", "medium", "large"];
                if (i <= 5) {
                    answers.push(
                        `<label style="background-color:${options[i]}";">
                     <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                   </label>`
                    );
                } else if (i <= 7) {
                    answers.push(
                        `<label style="letter-spacing:${options[i]}";">
                     <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                   </label>`
                    );
                } else if (i <= 9) {
                    answers.push(
                        `<label style="font-size:${options[i]}";">
                     <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                   </label>`
                    );
                } else if (i <= 14) {
                    answers.push(
                        `<label style="text-color:${options[i]}";">
                     <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                   </label>`
                    );
                }
                i++;
            }

            // add this question and its answers to the output
            output.push(
                `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
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
            console.log(userAnswer);

            // if answer is correct
            switch (userAnswer) {
                // Background Colour Question
                case '1':
                    var item = "#ff0000";
                    var color = answerContainer;

                    chrome.storage.sync.set({
                        color: item
                    })
                    break;

                case '2':
                    var item = "#ffff00";
                    var color = answerContainer;

                    chrome.storage.sync.set({
                        color: item
                    })
                    break;

                case '3':
                    var item = "#00ff00";
                    var color = answerContainer;

                    chrome.storage.sync.set({
                        color: item
                    })
                    break;
                case '4':
                    var item = "#0000ff";
                    var color = answerContainer;

                    chrome.storage.sync.set({
                        color: item
                    })
                    break;
                case '5':
                    var item = "#000";
                    var color = answerContainer;

                    chrome.storage.sync.set({
                        color: item
                    })
                    break;

                    // Font spacing size
                case 'a':
                    var fontitem = "1px";
                    var fontspacing = "1px";

                    chrome.storage.sync.set({
                        fontspacing: fontitem
                    })
                    break;
                case 'b':
                    var fontitem = "2px";
                    var fontspacing = "2px";

                    chrome.storage.sync.set({
                        fontspacing: fontitem
                    })
                    break;

                case 'c':
                    var fontitem = "3px";
                    var fontspacing = "3px";

                    chrome.storage.sync.set({
                        fontspacing: fontitem
                    })
                    break;

                    // Text colour of the text
                case 'i':
                    var textitem = "#ffa500";
                    var textcolor = "Orange";

                    chrome.storage.sync.set({
                        textcolor: textitem
                    })
                    break;

                case 'ii':
                    var textitem = "#000";
                    var textcolor = "Black";

                    chrome.storage.sync.set({
                        textcolor: textitem
                    })
                    break;

                case 'iii':
                    var textitem = "#ffa500";
                    var textcolor = "Yellow";

                    chrome.storage.sync.set({
                        textcolor: textitem
                    })
                    break;

                    // Size of font
                case 's':
                    var fontsizeitem = "small";
                    var fontsize = "small";

                    chrome.storage.sync.set({
                        fontsize: fontsizeitem
                    })
                    break;

                case 'm':
                    var textitem = "medium";
                    var fontsize = "medium";

                    chrome.storage.sync.set({
                        fontsize: fontsizeitem
                    })
                    break;

                case 'l':
                    var textitem = "large";
                    var fontsize = "large";

                    chrome.storage.sync.set({
                        fontsize: fontsizeitem
                    })
                    break;
                default:
                    // code block

            }
        });

    }

    function showSlide(n) {
        slides[currentSlide].classList.remove("active-slide");
        slides[n].classList.add("active-slide");
        currentSlide = n;

        if (currentSlide === 0) {
            previousButton.style.display = "none";
        } else {
            previousButton.style.display = "inline-block";
        }

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = "none";
            submitButton.style.display = "inline-block";
        } else {
            nextButton.style.display = "inline-block";
            submitButton.style.display = "none";
        }
    }

    function showNextSlide() {
        showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");

    // display quiz right away
    buildQuiz();

    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    showSlide(0);

    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
})();
