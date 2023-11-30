const tweets = [
  {
    id: 1,
    content: 'Lorem ipsum',
    author: 'Ada',
    likes: 10
  },
  {
    id: 2,
    content: 'Dolor sit amet',
    author: 'Steve',
    likes: 8
  },
  {
    id: 3,
    content: 'Consectetur adipiscing elit',
    author: 'Grace',
    likes: 12
  },
  {
    id: 4,
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    author: 'Alan',
    likes: 2
  },
  {
    id: 5,
    content: 'Ut enim ad minim veniam',
    author: 'Ada',
    likes: 20
  }
]

  tweets.forEach((tweet) => {
    // Pour chaque objet de la liste tweets, je créé un élément <li>
    const li = document.createElement("li")
    li.classList.add("tweet")

    // Je créé un élément <p> pour stocker "content"
    const p_content = document.createElement("p")
    p_content.classList.add("content")
    p_content.textContent = tweet.content
    li.appendChild(p_content)

    // Je créé un élément <p> pour stocker "likes"
    const p_likes = document.createElement("p")
    p_likes.classList.add("likes")
    p_likes.textContent = tweet.likes
    li.appendChild(p_likes)

    // Je créé un élément <p> pour stocker "author"
    const p_author = document.createElement("p")
    p_author.classList.add("author")
    p_author.textContent = tweet.author
    li.appendChild(p_author)

    // Je récupère l'élément "tweets-list" dans le HTML
    const ul = document.getElementById("tweets-list")

    // Je lie mon élément <li> à la tweets-list dans le HTML
    ul.appendChild(li)
    
    // J'ajoute la classe "favorite" aux tweets dont le nombre de likes est sup à 10
    if (tweet.likes > 10) {
      li.classList.add("favorite");
    }

  });
