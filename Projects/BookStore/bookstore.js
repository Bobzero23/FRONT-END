const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission


    const formData = new FormData(this);

    axios.post('http://localhost:8081/addBook', Object.fromEntries(formData))
        .then(response => {
            // Handle the successful response
            console.log(response.data);

            // Update the UI or perform any necessary actions with the response data
        })
        .catch(error => {
            // Handle errors
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }

            // Handle any specific error scenarios or update the UI accordingly
        });
});
