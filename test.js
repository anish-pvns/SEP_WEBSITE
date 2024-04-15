const questions = [
    {
        question: "Who developed Python Programming Language?",
        optionA: "Wick van Rossum",
        optionB: "Rasmus Ledrof",
        optionC: "Gudio van Rossum",
        optionD: "Niene Stom",
        correctOption: "optionC"
    },

    {
        question: "Which type of Programming does Python support?",
        optionA: "object-oriented programming",
        optionB: "structured programming",
        optionC: "functional programming",
        optionD: "all of the mentioned",
        correctOption: "optionD"
    },

    {
        question: "Which of the following is the correct extension of the Python file?",
        optionA: ".pyhon",
        optionB: ".pl",
        optionC: ".py",
        optionD: ".p",
        correctOption: "optionC"
    },

    {
        question: "Which keyword is used for function in Python language?",
        optionA: "Function",
        optionB: "def",
        optionC: "Fun",
        optionD: "Define",
        correctOption: "optionB"
    },

    {
        question: " Which of the following character is used to give single-line comments in Python?",
        optionA: "//",
        optionB: "#",
        optionC: "!",
        optionD: "/*",
        correctOption: "optionB"
    },

    {
        question: "Which of the following functions is a built-in function in python?",
        optionA: "factorial()",
        optionB: "print()",
        optionC: "seed()",
        optionD: "sqrt()",
        correctOption: "optionB"
    },

    {
        question: "Who is the father of C language?",
        optionA: "Steve Jobs",
        optionB: "James Gosling",
        optionC: "Dennis Ritchie",
        optionD: "Rasmus Lerdorf",
        correctOption: "optionC"
    },

    {
        question: "All keywords in C are in ____________",
        optionA: "LowerCase letters",
        optionB: "UpperCase letters",
        optionC: "CamelCase letters",
        optionD: "None of the mentioned",
        correctOption: "optionA"
    },

    {
        question: "Which of the following cannot be a variable name in C?",
        optionA: "volatile",
        optionB: "true",
        optionC: "friend",
        optionD: "export",
        correctOption: "optionA"
    },

    {
        question: " What is short int in C programming?",
        optionA: "The basic data type of C",
        optionB: "Qualifier",
        optionC: "Short is the qualifier and int is the basic data type",
        optionD: "All of the mentioned",
        correctOption: "optionC"
    },

    {
        question: " What is the result of logical or relational expression in C?",
        optionA: "True or False",
        optionB: "0 or 1",
        optionC: "0 if an expression is false and any positive number if an expression is true",
        optionD: "None of the mentioned",
        correctOption: "optionB"
    },

    {
        question: "What is an example of iteration in C?",
        optionA: "for",
        optionB: "while",
        optionC: "do-while",
        optionD: "all of the mentioned",
        correctOption: "optionD"
    },


    {
        question: "Functions in C Language are always _________",
        optionA: "Internal",
        optionB: "External",
        optionC: "Both Internal and External",
        optionD: "External and Internal are not valid terms for functions",
        correctOption: "optionB"
    },

    {
        question: "What is #include <stdio.h>?",
        optionA: "Preprocessor directive",
        optionB: "Inclusion directive",
        optionC: "File inclusion directive",
        optionD: "None of the mentioned",
        correctOption: "optionA"
    },

    {
        question: "Who invented Java Programming?",
        optionA: "Guido van Rossum",
        optionB: "James Gosling",
        optionC: "Dennis Ritchie",
        optionD: "Bjarne Stroustrup",
        correctOption: "optionB"
    },

    {
        question: "Which statement is true about Java?",
        optionA: "Java is a sequence-dependent programming language",
        optionB: "Java is a code dependent programming language",
        optionC: "Java is a platform-dependent programming language",
        optionD: " Java is a platform-independent programming language",
        correctOption: "optionD"
    },

    {
        question: "Which component is used to compile, debug and execute the java programs?",
        optionA: "JRE",
        optionB: "JIT",
        optionC: "JDK",
        optionD: "JVM",
        correctOption: "optionC"
    },

    {
        question: "Which one of the following is not a Java feature?",
        optionA: "Object-oriented",
        optionB: "Use of pointers",
        optionC: "Portable",
        optionD: "Dynamic and Extensible",
        correctOption: "optionB"
    },

    {
        question: "What is the extension of java code files?",
        optionA: ".js",
        optionB: ".txt",
        optionC: ".class",
        optionD: ".java",
        correctOption: "optionD"
    },

    {
        question: "Which of these are selection statements in Java?",
        optionA: "break",
        optionB: "continue",
        optionC: "for()",
        optionD: "if()",
        correctOption: "optionD"
    },

    {
        question: "What is the numerical range of a char data type in Java?",
        optionA: "0 to 256",
        optionB: "-128 to 127",
        optionC: "0 to 65535",
        optionD: "0 to 32767",
        correctOption: "optionC"
    },

    {
        question: "Which of the following can be operands of arithmetic operators?",
        optionA: "Numeric",
        optionB: "Boolean",
        optionC: "Characters",
        optionD: "Both Numeric & Characters",
        correctOption: "optionD"
    },

    {
        question: "Decrement operator, −−, decreases the value of variable by what number?",
        optionA: "1",
        optionB: "2",
        optionC: "3",
        optionD: "4",
        correctOption: "optionA"
    },

    {
        question: "Which of these keywords is used to make a class?",
        optionA: "class",
        optionB: "struct",
        optionC: "int",
        optionD: "none of the mentioned",
        correctOption: "optionA"
    },

    {
        question: "Which of these operators is used to allocate memory for an object?",
        optionA: "malloc",
        optionB: "alloc",
        optionC: "new",
        optionD: "give",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}