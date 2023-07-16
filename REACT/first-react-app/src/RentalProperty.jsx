import './RentalProperty.css'

function RentalProperty({ data }) {
    return (
        <div className="container">
            {
                data.map((i) => (
                    <ul className="list">
                        <li>{i.name}</li>
                        <li>{i.price} 💸</li>
                        <li>{i.rating} 🌟</li>
                    </ul>
                ))
            }
        </div>
    );
}

export default RentalProperty;