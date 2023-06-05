// axios.get("https://swapi.dev/api/people/1/")
//     .then((data) => {
//         console.log("RESOLVED")
//         console.log(data)
//     });


const getStarwar = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch (error) {
        console.log("ERROR", error)
    }
}

getStarwar(1);
getStarwar(5);
getStarwar(10);