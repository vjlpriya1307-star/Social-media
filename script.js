let posts = JSON.parse(localStorage.getItem("posts")) || [];
const postList = document.getElementById("posts");

function displayPosts() {
  postList.innerHTML = "";
  posts.forEach((p, index) => {
    postList.innerHTML += `
      <li>
        <b>${p.user}</b>: ${p.text}
        <button onclick="likePost(${index})">
          ❤️ ${p.likes}
        </button>
      </li>`;
  });
}

function addPost() {
  const user = document.getElementById("username").value;
  const text = document.getElementById("postText").value;

  posts.push({ user, text, likes: 0 });
  localStorage.setItem("posts", JSON.stringify(posts));
  displayPosts();
}

function likePost(i) {
  posts[i].likes++;
  localStorage.setItem("posts", JSON.stringify(posts));
  displayPosts();
}

displayPosts();let posts = JSON.parse(localStorage.getItem("posts")) || [];
const postList = document.getElementById("posts");

function displayPosts() {
  postList.innerHTML = "";
  posts.forEach((p, index) => {
    postList.innerHTML += `
      <li>
        <b>${p.user}</b>: ${p.text}
        <button onclick="likePost(${index})">
          ❤️ ${p.likes}
        </button>
      </li>`;
  });
}

function addPost() {
  const user = document.getElementById("username").value;
  const text = document.getElementById("postText").value;

  posts.push({ user, text, likes: 0 });
  localStorage.setItem("posts", JSON.stringify(posts));
  displayPosts();
}

function likePost(i) {
  posts[i].likes++;
  localStorage.setItem("posts", JSON.stringify(posts));
  displayPosts();
}

displayPosts();
