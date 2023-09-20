const formEl = document.querySelector(".post-form");


formEl.addEventListener('submit', function(evetnt) {
    const imageEl = document.querySelector("#image").value;
    const titleEl = document.querySelector("#title").value;
    const contentEl = document.querySelector("#content").value;
    alert(`the title was ${titleEl} and the contet was ${contentEl}`);
});