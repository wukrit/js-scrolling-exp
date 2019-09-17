// Fetch Articles
document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.querySelector('.timeline-wrapper')

  fetch("https://news-agg-api.herokuapp.com/stories")
    .then(function(response) {
      return response.json()
    })
    .then(function(myJson) {
      myJson.forEach(function(object){
        let newDiv = document.createElement("div")
        let title = document.createElement("h3")
        let author = document.createElement("h4")
        let url = document.createElement("a")

        newDiv.classList.add("story")

        title.innerText = object["title"]
        author.innerText = `by: ${object["author"]}`
        url.href = object["url"]
        url.innerText = "Original Article"


        timeline.append(newDiv)
        newDiv.append(title)
        newDiv.append(author)
        newDiv.append(url)
      })
    })

  timeline.addEventListener("click", function(){
    if (event.target.classList.contains("story") && event.target.classList.contains("expanded")) {
      event.target.classList.remove("expanded")
    } else if (event.target.classList.contains("story")) {
      event.target.classList.add("expanded")
    }
  })

});

// Expand Divs
