export default function ButtonExercise({ message, buttonText }) {
    const handleClicker = () => {
        alert(message);
    }

    return (
        <div>
            <button onClick={handleClicker}> {buttonText} </button>
        </div>
    );
}
