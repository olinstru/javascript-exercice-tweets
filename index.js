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

// Je créé mon élément <li> pour afficher le tweet
const li = document.createElement("li")
li.classList.add("tweet")

// Je créé un élément <p> pour stocker "content"
const p_content = document.createElement("p")
p_content.classList.add("content")
p_content.textContent = tweets[0].content
li.appendChild(p_content)

// Je créé un élément <p> pour stocker "likes"
const p_likes = document.createElement("p")
p_likes.classList.add("likes")
p_likes.textContent = tweets[0].likes
li.appendChild(p_likes)

// Je créé un élément <p> pour stocker "author"
const p_author = document.createElement("p")
p_author.classList.add("author")
p_author.textContent = tweets[0].author
li.appendChild(p_author)

// Je récupère l'élément "tweets-list" dans le HTML
const ul = document.getElementById("tweets-list")

// Je lie mon élément <li> à la tweets-list dans le HTML
ul.appendChild(li)