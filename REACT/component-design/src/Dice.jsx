import Die from "./Die";

export default function Dice({ dice }) {
    return (
        <section className="Dice">
            {dice.map((v, i) => (
                <Die key={i} val={v} />
            ))
            }
        </section >
    )
}