const formEl = document.querySelector(".post-form");
formEl.addEventListener('submit', function(event) {
    event.preventDefault();

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
        location.reload();
    })
    .catch((error) => {
        console.error("Error", error);
    });
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
            let postid = post.id;
            let postImage = post.image;
            let postTitle = post.title;
            let postContent = post.content;
            
            // Create card elements
            const card = document.createElement('div');
            card.className = 'card';

            const cardImg = document.createElement('img');
            cardImg.src = `data:image/jpeg;base64,${post.image}`; // Assuming your response contains base64-encoded image data
            cardImg.className = 'card-img-top';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = post.title;

            const cardText = document.createElement('p');
            const btnCard = document.createElement('div');
            cardText.className = 'card-text';
            cardText.textContent = post.content;
            
            btnCard.className = "btn-card";
            
            const editBtnEl = document.createElement('button');
            editBtnEl.setAttribute("postid", post.id);
            editBtnEl.textContent = "edit";
            editBtnEl.className = 'editBtn';

           //editing
            editBtnEl.addEventListener('click', function(event) {
                const postContainerEl = document.querySelector(".post-container");
                postContainerEl.style.display = "none";
                cardContainer.style.display = "none"; 

                editPost(postid, postTitle, postContent, postImage);
            }) 

            
            const deleteBtnEl = document.createElement('button');
            deleteBtnEl.textContent = "delete";
            deleteBtnEl.className = 'deleteBtn';

            //deleting
            deleteBtnEl.addEventListener('click', function() {
                deletePost(postid);
            })



            const commentBtnEl = document.createElement('button');
            commentBtnEl.textContent = "comment"
            commentBtnEl.className = 'commentBtn';

            // Append elements to the card
            btnCard.appendChild(editBtnEl);
            btnCard.appendChild(deleteBtnEl);
            btnCard.appendChild(commentBtnEl);
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            
            card.appendChild(cardImg);
            card.appendChild(cardBody);
            card.appendChild(btnCard);

            // Append the card to the container
            cardContainer.appendChild(card);
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

function deletePost(postid) {
    axios.delete(`http://localhost:1001/posts/${postid}`)
    .then(()=> {
        location.reload();
    })
    .catch(()=> {
        console.error(error);
    })
}


function editPost(postid, title, content, image) {
    const unhide = document.querySelector(".hide");
    unhide.style.display = "block"
    

    const titleInputEl = document.getElementById("titleEdit");
    const imageInputEl = document.getElementById("imageEdit");
    const contentInputEl = document.getElementById("contentEdit");
    titleInputEl.value = title;
    imageInputEl.src = image;
    contentInputEl.value = content;

    // const formData = new FormData();
    // formData.append('title', title);
    // formData.append('content', content);
    // formData.append('image', img);

    // axios.put(`http://localhost:1001/posts/${postid}`, formData)
    // .then((response)=> {
    //     console.log("post created: ", response.data);
    //     console.log("edited successfully!!");
    // }).catch((error) => {    
    //     console.error(error);
    // })
}

// Call the function to initially display posts
displayPosts();


