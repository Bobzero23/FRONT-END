// axios.get("https://swapi.dev/api/people/1/")
//     .then((data) => {
//         console.log("RESOLVED")
//         console.log(data)
//     });



/**INTRO TO AXIOS */
// const getStarwar = async (id) => {
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
//         console.log(res.data);
//     } catch (error) {
//         console.log("ERROR", error)
//     }
// }

// getStarwar(1);
// getStarwar(5);
// getStarwar(10);


/**DEALING WITH HEADERS */
const getDadJoke = async () => {
    const config = { headers: { accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    console.log(res.data.joke);
}

getDadJoke();