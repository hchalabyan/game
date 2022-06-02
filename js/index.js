const data = {
  rating: [
    {
      id: "123",
      name: "Владимир",
      lastName: "Ларионов",
      img: "assets/icons/blockElement.svg",
      points: "463",
    },
    {
      id: "9",
      name: "Владимир",
      lastName: "Сергеев",
      img: "assets/icons/blockElement.svg",
      points: "521",
    },
    {
      id: "231",
      name: "Вениамин",
      lastName: "Васильев",
      img: "assets/icons/blockElement.svg",
      points: "865",
    },
    {
      id: "321",
      name: "Мария",
      lastName: "Логинова",
      img: "assets/icons/blockElement.svg",
      points: "865",
    },
    {
      id: "492",
      name: "Борис",
      lastName: "Казанцев",
      img: "assets/icons/blockElement.svg",
      points: "784",
    },
    {
      id: "452",
      name: "Полина",
      lastName: "Калинина",
      img: "assets/icons/blockElement.svg",
      points: "225",
    },
    {
      id: "796",
      name: "Даниил",
      lastName: "Воробьёв",
      img: "assets/icons/blockElement.svg",
      points: "642",
    },
    {
      id: "4",
      name: "Эрик",
      lastName: "Аксёнов",
      img: "assets/icons/blockElement.svg",
      points: "150",
    },
    {
      id: "1155",
      name: "Иван",
      lastName: "Иванов",
      img: "assets/icons/blockElement.svg",
      points: "100",
    },
    {
      id: "12145",
      name: "Артем",
      lastName: "Алексеев",
      img: "assets/icons/blockElement.svg",
      points: "1000",
    },
  ],
  friends: [
    {
      id: "9",
      name: "Владимир",
      lastName: "Сергеев",
      img: "assets/icons/friendAvatar.png",
    },
    {
      id: "4",
      name: "Эрик",
      lastName: "Аксёнов",
      img: "assets/icons/friendAvatar.png",
    },
    {
      id: "15411",
      name: "Ирина",
      lastName: "Чеснокова",
      img: "assets/icons/friendAvatar.png",
    },
    {
      id: "15564",
      name: "Дарина",
      lastName: "Боброва",
      img: "assets/icons/friendAvatar.png",
    },
    {
      id: "",
      name: "",
      lastName: "",
      img: "",
    },
    {
      id: "4",
      name: "Эрик",
      lastName: "Аксёнов",
      img: "",
    },
    {
      id: "15411",
      name: "Ирина",
      lastName: "Чеснокова",
      img: "",
    },
    {
      id: "15564",
      name: "Дарина",
      lastName: "Боброва",
      img: "",
    },
    {
      id: "4",
      name: "Эрик",
      lastName: "Аксёнов",
      img: "",
    },
    {
      id: "15411",
      name: "Ирина",
      lastName: "Чеснокова",
      img: "",
    },
    {
      id: "15564",
      name: "Дарина",
      lastName: "Боброва",
      img: "",
    },

    {
      id: "4",
      name: "Эрик",
      lastName: "Аксёнов",
      img: "",
    },
    {
      id: "15411",
      name: "Ирина",
      lastName: "Чеснокова",
      img: "",
    },
    {
      id: "15564",
      name: "Дарина",
      lastName: "Боброва",
      img: "",
    },
  ],
};
const mainContainer = document.querySelector("#slider");

const containerElements = () => {
  data.friends.map((element) => {
    const containerElement = document.createElement("div");
    containerElement.classList.add("slide");
    const img = document.createElement("img");
    img.src = element.img;
    element.img ? containerElement.append(img) : null;
    mainContainer.append(containerElement);
  });
};
containerElements();

// Slider

let slider = document.getElementById("slider");
let slides = document.getElementsByClassName("slide").length;
let buttons = document.getElementsByClassName("arrow_icon");

let currentPosition = 0;
let currentMargin = 0;
let slidesPerPage = 0;
let slidesCount = slides - slidesPerPage;

function setParams() {
  slidesPerPage = 8;
  slidesCount = slides - slidesPerPage;
  if (currentPosition > slidesCount) {
    currentPosition -= slidesPerPage;
  }
  currentMargin = -currentPosition * (100 / slidesPerPage);
  slider.style.marginLeft = currentMargin + "%";
  if (currentPosition > 0) {
    buttons[0].classList.remove("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[1].classList.remove("inactive");
  }
  if (currentPosition >= slidesCount) {
    buttons[1].classList.add("inactive");
  }
}

setParams();

function slideRight() {
  if (currentPosition !== 0) {
    slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%";
    currentMargin += 100 / slidesPerPage;
    currentPosition--;
  }
  if (currentPosition === 0) {
    buttons[1].classList.add("inactive");
  }
  if (currentPosition < slidesCount) {
    buttons[0].classList.remove("inactive");
  }
}

function slideLeft() {
  if (currentPosition !== slidesCount) {
    slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
    currentMargin -= 100 / slidesPerPage;
    currentPosition++;
  }
  if (currentPosition === slidesCount) {
    buttons[0].classList.add("inactive");
  }
  if (currentPosition > 0) {
    buttons[1].classList.remove("inactive");
  }
}

//  move man icon
let clickCount = 0;
const manIcon = document.querySelector("#man_icon");
const moveElement = () => {
  if (clickCount === 0) {
  }
  switch (clickCount) {
    case 0:
      manIcon.classList.add("move_1");
      clickCount += 1;
      break;
    case 1:
      manIcon.classList.remove("move_1");
      manIcon.classList.add("move_2");
      clickCount += 1;
      break;
    case 2:
      manIcon.classList.remove("move_2");
      manIcon.classList.add("move_3");
      clickCount += 1;
      break;
    case 3:
      manIcon.classList.remove("move_3");
      manIcon.classList.add("move_4");
      clickCount += 1;
      break;
    case 4:
      manIcon.classList.remove("move_4");
      manIcon.classList.add("move_5");
      clickCount += 1;
      break;
    default:
  }
};

//open popUp

const openPopup = () => {
  const opnPopup = document.querySelector("#backdropPopup");
  const opnPopupContainer = document.querySelector("#popUpContainer");
  opnPopup.classList.add("backDrop-show");
  opnPopupContainer.classList.add("popUp-show");
};
const closePopup = () => {
  let closePopup = document.getElementById("backdropPopup");
  let opnPopupContainer = document.getElementById("popUpContainer");
  opnPopupContainer.classList.remove("popUp-show");
  closePopup.classList.remove("backDrop-show");
};

const mappingRating = () => {
  const friendsListWrapper = document.querySelector(".friends_list_wrapper");
  data.rating.map((rating, index) => {
    const friendsList = document.createElement("div");
    friendsListWrapper.append(friendsList);
    friendsList.classList.add("friends_list");
    const friendsListInfoPosition = document.createElement("p");
    friendsListInfoPosition.innerHTML = index;
    const friendsListInfoAvatar = document.createElement("img");
    friendsListInfoAvatar.src = rating.img;
    const friendsListName = document.createElement("p");
    friendsListName.innerHTML = rating.name + " " + rating.lastName;
    friendsListName.classList.add("friends_list_name");
    const friendsListInfoPoints = document.createElement("p");
    friendsListInfoPoints.innerHTML = rating.points;
    friendsList.append(friendsListInfoPosition);
    friendsList.append(friendsListInfoAvatar);
    friendsList.append(friendsListName);
    friendsList.append(friendsListInfoPoints);

    //check the same gamers

    data.friends.map((friend) => {
      if (friend.name === rating.name && friend.lastName === rating.lastName) {
        friendsList.classList.add("highlighted");
      }
    });
  });
};
mappingRating();
