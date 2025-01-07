// 샘플 데이터 생성
const data = [
  { image: "./image/samjizom.png", url: "", title: "1" },
  { image: "./image/samjizom.png", url: "", title: "2" },
  { image: "./image/samjizom.png", url: "", title: "3" },
  { image: "./image/samjizom.png", url: "", title: "4" },
  { image: "./image/samjizom.png", url: "", title: "5" },
  { image: "./image/samjizom.png", url: "", title: "6" },
  { image: "./image/samjizom.png", url: "", title: "7" },
  { image: "./image/samjizom.png", url: "", title: "8" },
  { image: "./image/samjizom.png", url: "", title: "9" },
];

const data2 = [
  { image: "./image/insta_logo.png", url: "", title: "1" },
  { image: "./image/insta_logo.png", url: "", title: "2" },
  { image: "./image/insta_logo.png", url: "", title: "3" },
  { image: "./image/insta_logo.png", url: "", title: "4" },
  { image: "./image/insta_logo.png", url: "", title: "5" },
  { image: "./image/insta_logo.png", url: "", title: "6" },
];

const data3 = [
  { image: "./image/samjizom.png", url: "", title: "1" },
  { image: "./image/samjizom.png", url: "", title: "2" },
  { image: "./image/samjizom.png", url: "", title: "3" },
  { image: "./image/samjizom.png", url: "", title: "4" },
  { image: "./image/samjizom.png", url: "", title: "5" },
  { image: "./image/samjizom.png", url: "", title: "6" },
];

const data4 = [
  { image: "./image/insta_logo.png", url: "", title: "1" },
  { image: "./image/insta_logo.png", url: "", title: "2" },
  { image: "./image/insta_logo.png", url: "", title: "3" },
  { image: "./image/insta_logo.png", url: "", title: "4" },
  { image: "./image/insta_logo.png", url: "", title: "5" },
  { image: "./image/insta_logo.png", url: "", title: "6" },
];

const slider = document.querySelector(".my_slider");
const slides = document.querySelectorAll(".my_slide");
const slideLen = slides.length - 2; // 복제된 슬라이드 제외
const currentState = { page: 1 }; // 복제된 첫 번째 슬라이드 위치가 초기값
const playState = { isMove: false };
const pointState = { startPoint: 0, endPoint: 0, distance: 0 };

// 추가 할 요소 선택
const container = document.querySelector(".boxnine");
let move = "전체";

const returnData = (dataType) => {
  dataType.forEach((item, index) => {
    // 추가할 요소 설정 div 추가
    const div = document.createElement("div");

    // 추가하는 요소의 class 설정 imgBox로 클래스 부여
    div.className = "imgBox";

    // 해당하는 div 클릭시 발생할 onClick 이벤트 설정
    div.onclick = () => {
      // url이 있으면
      if (item.url) {
        // 해당하는 주소로 이동
        window.location.href = item.url;
      }
      // 없으면 아무것도 하지 않음
    };

    // 해당 div 안에 요소 추가  이미지, 타이틀 등
    div.innerHTML = `<img src="${item.image}" alt="image ${
      index + 1
    }" /> <div class='title'>${item.title}</div>`;

    // 해당하는 요소에 반복문으로 추가
    container.appendChild(div);
  });
};

// 해더 값 받아오는 함수
const moveHeader = (type) => {
  move = type;

  container.innerHTML = "";

  if (move === "전체") {
    returnData(data);
  } else if (move === "Event") {
    returnData(data2);
  } else if (move === "Class") {
    returnData(data3);
  } else if (move === "New Gym") {
    returnData(data4);
  }
};

moveHeader("전체");

////////// 슬라이드 이동 함수
function goToSlide(page, transition = true) {
  slider.style.transition = transition ? "transform 0.3s ease" : "none";
  slider.style.transform = `translateX(${-100 * page}%)`;
}

// 이벤트 핸들러
slider.addEventListener("mousedown", (e) => {
  playState.isMove = true;
  pointState.startPoint = e.clientX;
});

slider.addEventListener("mousemove", (e) => {
  if (!playState.isMove) return;
  pointState.distance = e.clientX - pointState.startPoint;
  handleMouseMove(e);
});

slider.addEventListener("mouseup", handleMouseUp);

slider.addEventListener("transitionend", () => {
  // 루프 효과 처리
  if (currentState.page === 0) {
    currentState.page = slideLen;
    goToSlide(currentState.page, false);
  }
  if (currentState.page === slideLen + 1) {
    currentState.page = 1;
    goToSlide(currentState.page, false);
  }
});

function handleMouseUp(e) {
  playState.isMove = false;
  pointState.endPoint = e.clientX;
  const distance = pointState.distance;
  if (distance > 100 && currentState.page > 0) {
    currentState.page--;
  }
  if (distance <= -100 && currentState.page < slideLen + 1) {
    currentState.page++;
  }
  goToSlide(currentState.page);
}

function handleMouseMove(e) {
  const moveDistance =
    e.clientX - pointState.startPoint + -100 * currentState.page;
  slider.style.transform = `translateX(${moveDistance}%)`;
}
