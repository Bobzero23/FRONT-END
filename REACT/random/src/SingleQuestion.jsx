

export const SingleQuestion = ({id, question, answer, isOpen, onToggle}) => {
    return (
        <article>
            <header>
                <h4>{question}</h4>
                <button onClick={onToggle}>{isOpen ? '-' : '+'}</button>
            </header>
            {isOpen && <p>{answer}</p>}
        </article>
    )
}

