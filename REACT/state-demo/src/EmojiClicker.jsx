import "./EmojiClicker.css";

import { v4 as uuid } from "uuid";

import { useState } from "react";

export default function EmojiClicker() {
    function randomEmojis() {
        const choices = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "😗"]
        return choices[Math.floor(Math.random() * choices.length)];
    }

    const [emojis, setEmojis] = useState([{ id: uuid(), emoji: randomEmojis() }]);

    const addEmoji = () => {
        /**This is just a normal way of doing it but not a better way */
        // setEmojis([...emojis, "😘"]);

        /**This is a better way on how to do it */
        setEmojis((oldEmojis) => [...oldEmojis, { id: uuid(), emoji: randomEmojis() }]);
    }

    const deleteEmoji = (id) => {
        setEmojis(prevEmojis => {
            return prevEmojis.filter((e) => e.id !== id);
        })
    }


    function makeEverthingHeart() {
        setEmojis((prevEmojis) => {
            return prevEmojis.map((e) => {
                return { ...e, emoji: "❤" };
            })
        })
    }


    return (
        <div className="main">
            {emojis.map((e) => (
                <span onClick={() => deleteEmoji(e.id)}
                    key={e.id}
                    style={{ fontSize: "4rem" }}
                >
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
            <button onClick={makeEverthingHeart}>Make all of them heart</button>
        </div>
    );
}