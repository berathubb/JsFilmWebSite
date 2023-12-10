const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");

//! Slider
arrows.forEach((arrow, i) => {
    let clickCounter = 0;
    const imageItem = movieLists[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        clickCounter++;
        if (imageItem - (4 + clickCounter) >= 0) {
            movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`
        } else {
            movieLists[i].style.transform = "translateX(0)"
        }
    });
});

//! Slider

//!Dark Mod
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.menu-list-item a,.movie-list-filter select,.toggle,.toggle-ball,.dropbtn,.dropdown-content");

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"));
});

//!Dark Mod

//! Arama Butonu

searchBtn.addEventListener("click", function () {
    searchForm.classList.toggle("active");
    document.addEventListener("click", function (e) {
        if (
            !e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searchForm)
        ) {
            searchForm.classList.remove("active");
        }
    })
});

//! Arama Butonu
