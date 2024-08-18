function createCard(title, cName, views, monthsOld, duration, thumbnail){
    document.querySelector("img").setAttribute("src", thumbnail)
    document.querySelector(".duration").innerText = duration
    document.querySelector(".title").firstElementChild.innerHTML = title
    document.querySelector(".cName").innerText = cName
    if(views <1000){
        document.querySelector(".number").innerText = views
    }
    else if(views < 1000001){
        let num = views/1000
        document.querySelector(".number").innerText = num.toPrecision(3) + "K"

    }
    else if(1000000 <= views){
        let num = views/1000000
        document.querySelector(".number").innerText = num.toPrecesion(2) + "M"
    }
    document.querySelector(".monthsOld").firstElementChild.innerText = monthsOld
}

createCard("JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73", "CodeWithHarry", "73", "8", "6:13" ,"https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLABJhdIBqlilwXKzJqa6StynbJT4Q")