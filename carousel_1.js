// 샘플 데이터 생성
const data = [
  {
    image: "./image/realrock.jpg",
    url: "",
    title: "REAL ROCK JINAN : ROCK TREE",
  },
  {
    image: "./image/event_damjang.jpg",
    url: "",
    title: "HELLO SUPER POWER",
  },
  { image: "./image/event2.jpg", url: "", title: "YEAR END PARTY : THE CLIMB" },
  { image: "./image/event3.png", url: "", title: "JINGLEBELL : WAVEROCK" },
  {
    image: "./image/event4.jpg",
    url: "",
    title: "CAMPUSING MASTERS : DAMJANG",
  },
  { image: "./image/event5.jpg", url: "", title: "HALLOWEEN PARTY : WAVEROCK" },
  { image: "./image/offthewall.jpg", url: "", title: "OFF THE WALL : DAMJANG" },
  { image: "./image/heibai.jpeg", url: "", title: "BLACK & WHITE : PEAKERS" },
  {
    image: "./image/newgym3.jpg",
    url: "",
    title: "NEW GYM! THE CLIMB : MULLAE",
  },
];

const data2 = [
  { image: "./image/event1.jpg", url: "", title: "신년운세 : THE CLIMB" },
  { image: "./image/event2.jpg", url: "", title: "YEAR END PARTY : THE CLIMB" },
  { image: "./image/event3.png", url: "", title: "JINGLEBELL : WAVEROCK" },
  {
    image: "./image/event4.jpg",
    url: "",
    title: "CAMPUSING MASTERS : DAMJANG",
  },
  { image: "./image/event5.jpg", url: "", title: "HALLOWEEN PARTY : WAVEROCK" },
  {
    image: "./image/event6.jpg",
    url: "",
    title: "BLACK TAPE CLUB4 : THE PLASTIK",
  },
];

const data3 = [
  { image: "./image/classimg6.jpg", url: "", title: "스타터 : 알레 클라임" },
  { image: "./image/classimg2.jpg", url: "", title: "쪼꼬미 : 담장" },
  { image: "./image/classimg3.jpg", url: "", title: "SUPER'S TEACH : 담장" },
  { image: "./image/classimg4.jpg", url: "", title: "MONDAY PROJECT : 담장" },
  { image: "./image/classimg5.jpg", url: "", title: "자연 암벽 : 담장" },
  { image: "./image/classimg1.jpg", url: "", title: "찍먹 강습 : 더플라스틱" },
];

const data4 = [
  { image: "./image/newgym1.png", url: "", title: "킨디 클라이밍 : 수원" },
  { image: "./image/newgym2.png", url: "", title: "더클라임 : 이수" },
  { image: "./image/newgym3.jpg", url: "", title: "더클라임 : 문래" },
  { image: "./image/newgym4.jpg", url: "", title: "오프더월 : 이태원" },
  { image: "./image/nonhy_1.jpg", url: "", title: "더클라임 :  논현" },
  { image: "./image/nonhy_2.jpg", url: "", title: "더클라임 : 논현" },
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
    }" /> <div class='title titlenames'>${item.title}</div>`;

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
//// 슬라이드

const slider = document.querySelector(".my_slider");
const slides = document.querySelectorAll(".my_slide");
const slideLen = slides.length - 2;
const currentState = { page: 1 };
const playState = { isMove: false };
const pointState = { startPoint: 0, distance: 0 };
let autoSlideInterval;

// 이미지 드래그 방지
const images = document.querySelectorAll(".my_slide img");
images.forEach((img) => {
  img.addEventListener("dragstart", (e) => e.preventDefault());
});

// 슬라이드 이동 함수
function goToSlide(page, transition = true) {
  slider.style.transition = transition ? "transform 0.3s ease" : "none";
  slider.style.transform = `translateX(${-100 * page}%)`;
}

// 초기 위치 설정
goToSlide(currentState.page, false);

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

// 자동 슬라이드 함수
function startAutoSlide() {
  stopAutoSlide(); // 기존 타이머 초기화
  autoSlideInterval = setInterval(() => {
    currentState.page++;
    goToSlide(currentState.page);

    slider.addEventListener("transitionend", () => {
      if (currentState.page === slideLen + 1) {
        currentState.page = 1;
        goToSlide(currentState.page, false);
      }
    });
  }, 3000); // 3초마다 슬라이드 이동
}

// 자동 슬라이드 정지 함수
function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// 드래그 시작
slider.addEventListener("mousedown", (e) => {
  playState.isMove = true;
  slider.style.transition = "none";
  pointState.startPoint = e.clientX;
  stopAutoSlide(); // 드래그 중 자동 슬라이드 정지
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

  if (distance > 100 && currentState.page > 0) {
    currentState.page--;
  } else if (distance < -100 && currentState.page < slideLen + 1) {
    currentState.page++;
  }

  goToSlide(currentState.page);
  startAutoSlide(); // 드래그 종료 후 자동 슬라이드 재개
});

// 터치 이벤트 지원 (모바일)
slider.addEventListener("touchstart", (e) => {
  playState.isMove = true;
  pointState.startPoint = e.touches[0].clientX;
  stopAutoSlide(); // 터치 중 자동 슬라이드 정지
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
  startAutoSlide(); // 터치 종료 후 자동 슬라이드 재개
});

// 자동 슬라이드 시작
startAutoSlide();
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
      <div class='title titlenames'>${item.title}</div>
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

// 슬라이더 점
const dotNavigation = document.querySelector(".dot_navigation");
const slideCount = slides.length - 2; // 슬라이드 수 (복제된 슬라이드 제외)

// 점 생성
function createDots() {
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active"); // 첫 번째 슬라이드 활성화
    dot.dataset.index = i + 1; // 점에 슬라이드 인덱스 저장
    dotNavigation.appendChild(dot);
  }
}

// 점 활성화 업데이트
function updateDots(page) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === page - 1) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// 점 클릭 이벤트
dotNavigation.addEventListener("click", (e) => {
  if (e.target.classList.contains("dot")) {
    const targetPage = Number(e.target.dataset.index);
    currentState.page = targetPage;
    goToSlide(currentState.page);
    updateDots(currentState.page);
  }
});

// 슬라이드 이동 시 점 업데이트
slider.addEventListener("transitionend", () => {
  if (currentState.page === 0) {
    currentState.page = slideLen;
    goToSlide(currentState.page, false);
  } else if (currentState.page === slideLen + 1) {
    currentState.page = 1;
    goToSlide(currentState.page, false);
  }
  updateDots(currentState.page);
});

// 초기 설정
createDots();
startAutoSlide();

// 가로 스크롤 JS 수정
document.addEventListener("DOMContentLoaded", () => {
  const scrollbox1 = document.querySelector(".scrollbox1");
  const initialOffsetTop = scrollbox1.offsetTop;
  const movingRightDistance = 200; // 오른쪽으로 이동할 거리

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (scrollTop >= initialOffsetTop) {
      // 스크롤이 .scrollbox1의 초기 위치 이상일 때 상단 고정
      scrollbox1.classList.add("sticky");

      // 추가로 더 스크롤 시 오른쪽으로 이동
      const moveOffset = scrollTop - initialOffsetTop;
      if (moveOffset > movingRightDistance) {
        scrollbox1.classList.add("moving-right");
      } else {
        scrollbox1.classList.remove("moving-right");
      }
    } else {
      // 초기 위치보다 위로 스크롤하면 고정 해제
      scrollbox1.classList.remove("sticky", "moving-right");
    }
  });
});
