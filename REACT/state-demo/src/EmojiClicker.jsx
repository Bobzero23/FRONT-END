

import { useState } from "react";

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState(["😂"]);

    const addEmoji = () => {
        /**This is just a normal way of doing it but not a better way */
        // setEmojis([...emojis, "😘"]);

        /**This is a better way on how to do it */
        setEmojis((oldEmojis) => [...oldEmojis, "😘"]);
    }

    return (
        <div>
            {emojis.map((e) => (
                <span style={{ fontSize: "4rem" }}>{e}</span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    );
}