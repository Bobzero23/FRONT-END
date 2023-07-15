/**OF COURSE YOU CAN DO LIKE THIS */
// export default function ColorList({ colors }) {
//     const currentColor = colors.map(color => <li>{color}</li>);
//     return (
//         <div>
//             <h1>Color list</h1>
//             <ul>{currentColor}</ul>
//         </div>
//     );
// }


/**THIS IS THE MOST COMMOLY USED WAY */
export default function ColorList({ colors }) {
    return (
        <div>
            <h1>Color list</h1>
            <ul>
                {
                    colors.map((c) =>
                        <li style={{ color: c }}>{c}</li>)
                }
            </ul>
        </div>
    );
}