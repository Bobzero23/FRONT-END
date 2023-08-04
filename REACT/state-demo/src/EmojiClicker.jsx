import { v4 as uuid } from "uuid";

import { useState } from "react";

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: "😂" }]);

    const addEmoji = () => {
        /**This is just a normal way of doing it but not a better way */
        // setEmojis([...emojis, "😘"]);

        /**This is a better way on how to do it */
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: "😂" }]);
    }

    return (
        <div>
            {emojis.map((e) => (
                <span key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    );
}