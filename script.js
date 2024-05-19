// script.js
document.addEventListener('DOMContentLoaded', function () {
    const postForm = document.getElementById('post-form');
    const postList = document.getElementById('post-list');

    postForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        if (title && content) {
            const post = createPost(title, content);
            postList.appendChild(post);

            postForm.reset();
        }
    });

    function createPost(title, content) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        const postTitle = document.createElement('h3');
        postTitle.textContent = title;

        const postContent = document.createElement('p');
        postContent.textContent = content;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function () {
            postDiv.remove();
        });

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);
        postDiv.appendChild(deleteBtn);

        return postDiv;
    }
});
