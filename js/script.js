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

    //!get value dari input
    const email = event.target.email.value;
    const password = event.target.password.value;

    //!cek apakah email dan password sesuai
    if (email === "admin@gmail.com" && password === "admin123") {
      alertSuccess.style.display = "block";

      //!setelah 2 detik di redirect ke halaman home
      setTimeout(() => {
        window.location.replace("/home.html");
      }, 2000);
    } else {
      alertInvalid.style.display = "block";

      //!setelah 5 detik alert di hilangkan
      setTimeout(() => {
        alertInvalid.style.display = "none";
      }, 5000);
    }
  });
  btnClose.addEventListener("click", () => {
    alertInvalid.style.display = "none";
  });

  btnEye.addEventListener("click", (event) => {
    //! cek type dari input
    if (inputPass.getAttribute("type") == "password") {
      inputPass.setAttribute("type", "text");

      //! ubah feather icon
      const newIcon = feather.icons["eye"].toSvg();
      //! timpah element icon
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
      genre: ["Action", "Adventure", "Sci - Fi"],
      img: "./assets/spidermen.png",
    },
    {
      id: 2,
      title: "Witcher",
      genre: ["Action", "Adventure", "Sci - Fi"],
      img: "./assets/witcher.png",
    },
    {
      id: 3,
      title: "Lion King",
      genre: ["Action", "Adventure", "Sci - Fi"],
      img: "./assets/lionking.png",
    },
    {
      id: 4,
      title: "Jhon Wick",
      genre: ["Action", "Adventure", "Sci - Fi"],
      img: "./assets/jhon.png",
    },
    {
      id: 5,
      title: "Spider-Man: Homecoming",
      genre: ["Action", "Adventure", "Sci - Fi"],
      img: "./assets/spidermen.png",
    },
    {
      id: 6,
      title: "Witcher",
      genre: ["Action", "Adventure", "Sci - Fi"],
      img: "./assets/witcher.png",
    },
    {
      id: 7,
      title: "Lion King",
      genre: ["Action", "Adventure", "Sci - Fi"],
      img: "./assets/lionking.png",
    },
    {
      id: 8,
      title: "Jhon Wick",
      genre: ["Action", "Adventure", "Sci - Fi"],
      img: "./assets/jhon.png",
    },
  ];
  const containerList = document.getElementById("container-list-movie");
  const containerListUpcoming = document.getElementById(
    "container-list-upcoming"
  );
  //! mapping data
  const movieNowShowing = dataMovie.map((movie) => {
    const { title, genre, img } = movie;
    return `<div class="card-movies" id="card-movies">
                    <img src="${img}" alt="">
                    <div class="detail-hover" id="detail-hover">
                 <div class="wrap-title">
                 ${title}
                 </div>
                        <p>${genre.join(", ")}</p>
                        <a href="movie-details.html">
                            <div>Details</div>
                        </a>
                    </div>
                </div>`;
  });
  containerList.innerHTML = movieNowShowing.join(" ");

  // const movieUpcoming = dataMovie.map((movie) => {
  //   const { title, genre, img } = movie;

  //   return `
  //       <div class="card-movies">
  //           <img src="${img}" alt="">
  //               <h3>${title}</h3>
  //               <p>${genre.join(", ")}</p>
  //               <a href="movie-details.html">
  //                   <div>Details</div>
  //               </a>
  //       </div>`;
  // });

  const getMovie = async () => {
    const req = await fetch(
      "https://www.omdbapi.com/?apikey=1e23b4b9&s=marvel"
    );
    const res = await req.json();

    //!destruct properti Search
    const { Search } = res;

    //!Maping data
    const template = Search.map((data) => {
      const { Title, Poster, Year } = data;

      return `<div class="card-movies">
             <img src="${Poster}" alt="">
                 <div class="wrap-title">
                 ${Title}
                 </div>
                 <p>${Year}</p>
                 <a href="movie-details.html">
                     <div>Details</div>
                 </a>
         </div>`;
    });

    containerListUpcoming.innerHTML = template.join("");
  };

  getMovie();
}
