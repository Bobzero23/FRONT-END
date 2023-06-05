fetch("https://swapi.dev/api/people/1")
    .then((res) => {
        console.log("RESOLVED!!", res);
        res.json().then((data) => console.log(data));
    })
    .catch((e) => {
        console.log("ERROR", e);
    });


