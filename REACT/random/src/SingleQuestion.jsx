

export const SingleQuestion = ({id, question, answer}) => {
    return (
        <article>
            <header>
                <h4>{question}</h4>
                <button className="btn">+</button>
                <button className="btn">-</button>
            </header>
            <p>{answer}</p>
        </article>
    )
}

