// 샘플 데이터 생성
const data = [
  { image: "./image/realrock.jpg", url: "", title: "1" },
  { image: "./image/event_damjang.jpg", url: "", title: "2" },
  { image: "./image/event2.jpg", url: "", title: "3" },
  { image: "./image/event3.png", url: "", title: "4" },
  { image: "./image/event4.jpg", url: "", title: "5" },
  { image: "./image/event5.jpg", url: "", title: "6" },
  { image: "./image/offthewall.jpg", url: "", title: "7" },
  { image: "./image/heibai.jpeg", url: "", title: "8" },
  { image: "./image/newgym3.jpg", url: "", title: "9" },
];

const data2 = [
  { image: "./image/event1.jpg", url: "", title: "1" },
  { image: "./image/event2.jpg", url: "", title: "2" },
  { image: "./image/event3.png", url: "", title: "3" },
  { image: "./image/event4.jpg", url: "", title: "4" },
  { image: "./image/event5.jpg", url: "", title: "5" },
  { image: "./image/event6.jpg", url: "", title: "6" },
];

const data3 = [
  { image: "./image/classimg6.jpg", url: "", title: "1" },
  { image: "./image/classimg2.jpg", url: "", title: "2" },
  { image: "./image/classimg3.jpg", url: "", title: "3" },
  { image: "./image/classimg4.jpg", url: "", title: "4" },
  { image: "./image/classimg5.jpg", url: "", title: "5" },
  { image: "./image/classimg1.jpg", url: "", title: "6" },
];

const data4 = [
  { image: "./image/newgym1.png", url: "", title: "킨디 클라이밍" },
  { image: "./image/newgym2.png", url: "", title: "더클라임 이수" },
  { image: "./image/newgym3.jpg", url: "", title: "더클라임 문래" },
  { image: "./image/newgym4.jpg", url: "", title: "이태원 오프더월" },
  { image: "./image/nonhy_1.jpg", url: "", title: "더클라임 논현" },
  { image: "./image/nonhy_2.jpg", url: "", title: "더클라임 논현" },
];

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
//// 슬라이드 복붙

const slider = document.querySelector(".my_slider");
const slides = document.querySelectorAll(".my_slide");
const slideLen = slides.length - 2;
const currentState = { page: 1 };
const playState = { isMove: false };
const pointState = { startPoint: 0, distance: 0 };

// 이미지 드래그 방지
const images = document.querySelectorAll(".my_slide img");
images.forEach((img) => {
  img.addEventListener("dragstart", (e) => e.preventDefault());
});

function goToSlide(page, transition = true) {
  slider.style.transition = transition ? "transform 0.3s ease" : "none";
  slider.style.transform = `translateX(${-100 * page}%)`;
}

// 초기 위치 설정
goToSlide(currentState.page, false);

// 드래그 시작
slider.addEventListener("mousedown", (e) => {
  playState.isMove = true;
  slider.style.transition = "none";
  pointState.startPoint = e.clientX;
});

// 드래그 중
slider.addEventListener("mousemove", (e) => {
  if (!playState.isMove) return;
  const moveDistance =
    e.clientX - pointState.startPoint + -100 * currentState.page;
  slider.style.transform = `translateX(${moveDistance}px)`;
});

// 드래그 종료
slider.addEventListener("mouseup", (e) => {
  playState.isMove = false;
  const distance = e.clientX - pointState.startPoint;

  // 좌우 슬라이드 이동 조건
  if (distance > 100 && currentState.page > 0) {
    currentState.page--;
  } else if (distance < -100 && currentState.page < slideLen + 1) {
    currentState.page++;
  }

  goToSlide(currentState.page);

  // 루프 처리
  slider.addEventListener("transitionend", () => {
    if (currentState.page === 0) {
      currentState.page = slideLen;
      goToSlide(currentState.page, false);
    } else if (currentState.page === slideLen + 1) {
      currentState.page = 1;
      goToSlide(currentState.page, false);
    }
  });
});

// 터치 이벤트 지원 (모바일)
slider.addEventListener("touchstart", (e) => {
  playState.isMove = true;
  pointState.startPoint = e.touches[0].clientX;
});

slider.addEventListener("touchmove", (e) => {
  if (!playState.isMove) return;
  const moveDistance =
    e.touches[0].clientX - pointState.startPoint + -100 * currentState.page;
  slider.style.transform = `translateX(${moveDistance}px)`;
});

slider.addEventListener("touchend", (e) => {
  playState.isMove = false;
  const distance = e.changedTouches[0].clientX - pointState.startPoint;

  if (distance > 100 && currentState.page > 0) {
    currentState.page--;
  } else if (distance < -100 && currentState.page < slideLen + 1) {
    currentState.page++;
  }

  goToSlide(currentState.page);

  slider.addEventListener("transitionend", () => {
    if (currentState.page === 0) {
      currentState.page = slideLen;
      goToSlide(currentState.page, false);
    } else if (currentState.page === slideLen + 1) {
      currentState.page = 1;
      goToSlide(currentState.page, false);
    }
  });
});

// 이미지 스르륵 효과
// 이미지 스르륵 효과
// 이미지 컨테이너
const boxContainer = document.querySelector(".boxnine");

// 데이터를 렌더링하는 함수
const renderData = (dataType) => {
  // 기존 콘텐츠 제거
  boxContainer.innerHTML = "";

  // 새 콘텐츠 추가
  dataType.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "imgBox";
    div.innerHTML = `
      <img src="${item.image}" alt="image ${index + 1}" />
      <div class='title'>${item.title}</div>
    `;
    boxContainer.appendChild(div);
  });

  // Observer 초기화
  initializeObserver();
};

// Intersection Observer 초기화 함수
const initializeObserver = () => {
  const imgBoxes = document.querySelectorAll(".imgBox");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  imgBoxes.forEach((box) => observer.observe(box));
};
// 버튼 클릭 시 데이터 변경 함수
const moveHeader2 = (type) => {
  if (type === "전체") {
    renderData(data);
  } else if (type === "Event") {
    renderData(data2);
  } else if (type === "Class") {
    renderData(data3);
  } else if (type === "New Gym") {
    renderData(data4);
  }
};

// 초기 데이터 렌더링
moveHeader2("전체");
