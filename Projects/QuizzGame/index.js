$(document).ready(function () {
    let questions = [1, 2, 3, 4, 5, 6, 7]
    let currentQ = 1
    const nextQ = $('#nextQ')
    let intervalId = 1
    const cQuestion = $('#currentQ')
    const totalQ = $('#totalQ')
    $(totalQ).text(questions.length)

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

    function netxQuestion() {
        timer(15)
        if (currentQ < questions.length) {
            currentQ++
            $(cQuestion).text(currentQ)
        } else {
            alert('Sorular bitti')
        }
    }

    $(nextQ).click(function (e) {
        var buttonText = e.target.textContent || e.target.innerText
        if (buttonText === 'Restart') {
            currentQ = 0
            netxQuestion()
            $(cQuestion).text(currentQ)
            $(nextQ).text('Next Question')
        } else {
            netxQuestion()
        }
    })

    timer(15)
})