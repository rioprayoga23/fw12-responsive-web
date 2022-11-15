if (window.location.pathname === "/sign-in.html") {
  const formLogin = document.getElementById("form-login");
  const alertInvalid = document.getElementById("invalid");
  const alertSuccess = document.getElementById("success");
  const btnClose = document.getElementById("btn-close-alert");
  const btnEye = document.getElementById("btn-eye");
  const inputPass = document.getElementById("password");
  const wrapGPass = document.getElementById("wrap-gPassword");

  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === "admin@gmail.com" && password === "admin123") {
      alertSuccess.style.display = "block";
      setTimeout(() => {
        window.location.replace("/home.html");
      }, 2000);
    } else {
      alertInvalid.style.display = "block";
      setTimeout(() => {
        alertInvalid.style.display = "none";
      }, 5000);
    }
  });
  btnClose.addEventListener("click", () => {
    alertInvalid.style.display = "none";
  });

  btnEye.addEventListener("click", (event) => {
    if (inputPass.getAttribute("type") == "password") {
      inputPass.setAttribute("type", "text");

      const newIcon = feather.icons["eye"].toSvg();
      wrapGPass.children[1].innerHTML = newIcon;
    } else {
      inputPass.setAttribute("type", "password");

      const newIcon = feather.icons["eye-off"].toSvg();
      wrapGPass.children[1].innerHTML = newIcon;
    }
    // console.log(inputPass.getAttribute('type'));
  });
} else {
       const dataMovie = [
         {
           id: 1,
           title: "Spider-Man: Homecoming",
           genre: "Action, Adventure, Sci-Fi",
           img: "./assets/spidermen.png",
         },
         {
           id: 2,
           title: "Witcher",
           genre: "Action, Adventure, Sci-Fi",
           img: "./assets/witcher.png",
         },
         {
           id: 3,
           title: "Lion King",
           genre: "Action, Adventure, Sci-Fi",
           img: "./assets/lionking.png",
         },
         {
           id: 4,
           title: "Jhon Wick",
           genre: "Action, Adventure, Sci-Fi",
           img: "./assets/jhon.png",
         },
         {
           id: 5,
           title: "Spider-Man: Homecoming",
           genre: "Action, Adventure, Sci-Fi",
           img: "./assets/spidermen.png",
         },
         {
           id: 6,
           title: "Witcher",
           genre: "Action, Adventure, Sci-Fi",
           img: "./assets/witcher.png",
         },
         {
           id: 7,
           title: "Lion King",
           genre: "Action, Adventure, Sci-Fi",
           img: "./assets/lionking.png",
         },
         {
           id: 8,
           title: "Jhon Wick",
           genre: "Action, Adventure, Sci-Fi",
           img: "./assets/jhon.png",
         },
       ];
       const containerList = document.getElementById("container-list-movie");
       const containerListUpcoming = document.getElementById(
         "container-list-upcoming"
       );
       const movieNowShowing = dataMovie.map((movie) => {
         return `<div class="card-movies" id="card-movies">
                    <img src="${movie.img}" alt="">
                    <div class="detail-hover" id="detail-hover">
                        <h3>${movie.title}</h3>
                        <p>${movie.genre}</p>
                        <a href="movie-details.html">
                            <div>Details</div>
                        </a>
                    </div>
                </div>`;
       });
       containerList.innerHTML = movieNowShowing.join(" ");

       const movieUpcoming = dataMovie.map((movie) => {
         return `
        <div class="card-movies">
            <img src="${movie.img}" alt="">
                <h3>${movie.title}</h3>
                <p>${movie.genre}</p>
                <a href="movie-details.html">
                    <div>Details</div>
                </a>
        </div>`;
       });

       containerListUpcoming.innerHTML = movieUpcoming.join(" ");

}
