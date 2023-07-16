function handleClicker() {
    console.log("Clicked Me!!")
}

export default function Clicker() {
    return (
        <div>
            <p>Click Me</p>
            <button onClick={handleClicker}>Click</button>
        </div>
    );
}