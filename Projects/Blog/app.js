const formEl = document.querySelector(".post-form");


formEl.addEventListener('submit', function(evetnt) {
    evetnt.preventDefault();

    const imageEl = document.querySelector("#image").files[0];
    const titleEl = document.querySelector("#title").value;
    const contentEl = document.querySelector("#content").value;

    const formData = new FormData();
    formData.append('title', titleEl);
    formData.append('content', contentEl);
    formData.append('image', imageEl);

    axios.post('http://localhost:1001/posts', formData)
    .then((response) => {
        console.log("post created: ", response.data);
    })
    .catch((error) =>  {
        console.error("Error", error);
    })

    location.reload();
});



// Function to fetch and display posts
function displayPosts() {
    axios.get('http://localhost:1001/posts') // Replace with your actual GET endpoint
      .then((response) => {
        console.log(response.data);
        const cardContainer = document.getElementById('card-container');
        cardContainer.innerHTML = ''; // Clear previous content
  
        // Loop through the posts and create cards for each
        response.data.forEach((post) => {
          // Create card elements
          const card = document.createElement('div');
          card.className = 'card';
  
          const cardImg = document.createElement('img');
          cardImg.src = post.image; // Replace with the actual image URL
          cardImg.className = 'card-img-top';
  
          const cardBody = document.createElement('div');
          cardBody.className = 'card-body';
  
          const cardTitle = document.createElement('h5');
          cardTitle.className = 'card-title';
          cardTitle.textContent = post.title;
  
          const cardText = document.createElement('p');
          cardText.className = 'card-text';
          cardText.textContent = post.content;
  
          // Append elements to the card
          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardText);
          card.appendChild(cardImg);
          card.appendChild(cardBody);
  
          // Append the card to the container
          cardContainer.appendChild(card);

        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  
  // Call the function to initially display posts
  displayPosts();
  