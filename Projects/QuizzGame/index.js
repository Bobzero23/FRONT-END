const questions = [
    {
        text: 'What does HTML stand for?',
        answers: [
            'Hyper-text Markup Language',
            'Hyper-tool Multi Language',
            'Hyper-text Multiple Language',
            'Hyper-text Preprocessor',
        ],
        t: 0,
    },
    {
        text: 'What does CSS stand for?',
        answers: [
            'Cascading Style Sheets',
            'Creative Style Sheets',
            'Colorful Style Sheets',
            'Computer Style Sheets',
        ],
        t: 0,
    },
    {
        text: 'What does JS stand for?',
        answers: ['JavaScript', 'Jelly Sandwich', 'Java Syntax', 'Java Standard'],
        t: 0,
    },
    {
        text: 'What does PHP stand for?',
        answers: [
            'PHP Hypertext Preprocessor',
            'Personal Hypertext Processor',
            'Private Home Page',
            "People's Hypertext Processor",
        ],
        t: 0,
    },
]

let currentQ = 1
const nextQ = $('#nextQ')
let intervalId = 1
const cQuestion = $('#currentQ')
const totalQ = $('#totalQ')
let score = 0

$(document).ready(function () {
    $(totalQ).text(questions.length)

    handleQuestion(currentQ)

    $(document).on('click', '.choices', function (e) {
        handleAnswers(currentQ, e.target)
    })

    $(nextQ).click(function (e) {
        var buttonText = e.target.textContent || e.target.innerText

        if (buttonText === 'Restart') {
            currentQ = 0
            nextQuestion()
            $(cQuestion).text(currentQ)
            $(nextQ).text('Next Question')
        } else {
            nextQuestion()
        }
    })

    timer(15)
})

function timer(seconds) {
    $(nextQ).text('Next Question')

    const time = $('#seconds')

    clearTimeout(intervalId)

    if (seconds === 0) {
        $(time).text(seconds)
        alert('Time is up!')
        $(nextQ).text('Restart')
    } else {
        $(time).text(seconds)
        intervalId = setTimeout(() => {
            timer(seconds - 1)
        }, 1000)
    }
}

function nextQuestion() {
    timer(15)

    if (currentQ < questions.length) {
        currentQ++
        $(cQuestion).text(currentQ)
    } else {
        var userInput = prompt(
            `Your Score is : ${score} \n Enter A to Restart or Anything else to quit`
        )

        if (userInput.toUpperCase() === 'A') {
            location.reload()
        } else {
            window.location.href = './index.html'
        }
    }

    handleQuestion(currentQ)
}

function handleQuestion(index) {
    const cIndex = index - 1

    const questionsArr = questions[cIndex]

    const text = $('#text')
    const a = $('#a')
    const b = $('#b')
    const c = $('#c')
    const d = $('#d')

    $(text).text(questionsArr.text)
    $(a).text(questionsArr.answers[0])
    $(b).text(questionsArr.answers[1])
    $(c).text(questionsArr.answers[2])
    $(d).text(questionsArr.answers[3])
}

function handleAnswers(cIndex, sElement) {
    const cQuestion = questions[cIndex - 1]
    const tAnswerIndex = cQuestion.t
    const aText = sElement.innerText

    if (cQuestion.answers[tAnswerIndex] != aText) {
        $(sElement).addClass('false')
        setTimeout(() => {
            $(sElement).removeClass('false')
        }, 500)
    } else {
        score++
        $(sElement).addClass('true')
        setTimeout(() => {
            $(sElement).removeClass('true')
        }, 500)
    }
    setTimeout(() => {
        nextQuestion()
    }, 500)
}