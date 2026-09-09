/* =========================================
   PULSE MUSIC WEBSITE
   Interactive JavaScript
========================================= */


/* =========================================
   SEARCH
========================================= */

const searchInput =
  document.getElementById("searchInput");

const cards =
  [...document.querySelectorAll(".track-card")];

const emptyState =
  document.getElementById("emptyState");


searchInput.addEventListener("input", () => {

  const query =
    searchInput.value
      .toLowerCase()
      .trim();

  let visibleCards = 0;


  cards.forEach((card) => {

    const searchData =
      card.dataset.search.toLowerCase();

    const match =
      searchData.includes(query);


    if (match) {

      card.style.display = "";

      visibleCards++;

    } else {

      card.style.display = "none";

    }

  });


  if (visibleCards === 0) {

    emptyState.style.display = "block";

  } else {

    emptyState.style.display = "none";

  }

});


/* =========================================
   LIKE BUTTON
========================================= */

const likeButtons =
  document.querySelectorAll(".like");


likeButtons.forEach((button) => {

  button.addEventListener("click", () => {

    button.classList.toggle("liked");


    if (
      button.classList.contains("liked")
    ) {

      button.textContent = "♥";

      showToast(
        "Added to your library"
      );

    } else {

      button.textContent = "♡";

      showToast(
        "Removed from your library"
      );

    }

  });

});


/* =========================================
   MUSIC PLAYER
========================================= */

const nowTitle =
  document.getElementById("nowTitle");

const nowArtist =
  document.getElementById("nowArtist");

const playBtn =
  document.getElementById("playBtn");

const progressBar =
  document.getElementById("progressBar");


const artistMap = {

  "Midnight City": "M83",

  "Golden Hour": "JVKE",

  "After Dark": "Mr.Kitty",

  "Space Song": "Beach House"

};


/* =========================================
   PLAY SONG
========================================= */

const playActions =
  document.querySelectorAll(".play-action");


playActions.forEach((button) => {

  button.addEventListener("click", () => {

    const song =
      button.dataset.song;


    nowTitle.textContent =
      song;


    nowArtist.textContent =
      artistMap[song] ||
      "Pulse Artist";


    playBtn.textContent = "Ⅱ";


    progressBar.style.width =
      "35%";


    showToast(
      "Now playing: " + song
    );

  });

});


/* =========================================
   MAIN PLAY / PAUSE
========================================= */

let isPlaying = false;


playBtn.addEventListener("click", () => {

  isPlaying = !isPlaying;


  if (isPlaying) {

    playBtn.textContent = "Ⅱ";

    showToast("Playing");

  } else {

    playBtn.textContent = "▶";

    showToast("Paused");

  }

});


/* =========================================
   FOCUS MODE
========================================= */

const themeBtn =
  document.getElementById("themeBtn");


themeBtn.addEventListener("click", () => {

  document.body.classList.toggle(
    "focus"
  );


  if (
    document.body.classList.contains(
      "focus"
    )
  ) {

    showToast(
      "Focus mode on"
    );

  } else {

    showToast(
      "Focus mode off"
    );

  }

});


/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
  document.getElementById("menuBtn");

const sidebar =
  document.getElementById("sidebar");


menuBtn.addEventListener("click", () => {

  sidebar.classList.toggle("open");

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const sidebarLinks =
  document.querySelectorAll(
    ".sidebar a"
  );


sidebarLinks.forEach((link) => {

  link.addEventListener("click", () => {

    sidebar.classList.remove(
      "open"
    );

  });

});


/* =========================================
   SEE ALL
========================================= */

const seeAll =
  document.getElementById("seeAll");


seeAll.addEventListener("click", () => {

  searchInput.value = "";


  cards.forEach((card) => {

    card.style.display = "";

  });


  emptyState.style.display =
    "none";


  const discoverSection =
    document.getElementById(
      "discover"
    );


  window.scrollTo({

    top:
      discoverSection.offsetTop - 20,

    behavior: "smooth"

  });

});


/* =========================================
   TOAST MESSAGE
========================================= */

const toast =
  document.getElementById("toast");


function showToast(message) {

  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    window.toastTimer
  );


  window.toastTimer =
    setTimeout(() => {

      toast.classList.remove(
        "show"
      );

    }, 1800);

}