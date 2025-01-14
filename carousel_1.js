// 데이터 생성
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
let move = "전체"; // 초기값 = "전체"

const returnData = (dataType) => {
  dataType.forEach((item, index) => {
    const div = document.createElement("div"); // 추가할 요소 설정 div 추가
    div.className = "imgBox"; // 추가하는 요소의 class 설정 imgBox로 클래스 부여
    div.onclick = () => {
      // 해당하는 div 클릭시 발생할 onClick 이벤트 설정

      if (item.url) {
        // url이 있으면
        window.location.href = item.url; // 해당하는 주소로 이동
      }
      // 없으면 아무것도 하지 않음
    };

    div.innerHTML = `<img src="${item.image}" alt="image ${
      index + 1
    }" /> <div class='title titlenames'>${item.title}</div>`; // 해당 div 안에 이미지, 타이틀 추가
    container.appendChild(div); // .boxnine에 반복문으로 추가
  });
};

// 해더 값 받아오는 함수
const moveHeader = (type) => {
  move = type; // 현재 선택된 카테고리 업데이트

  container.innerHTML = ""; // 기존 콘텐츠 초기화

  // 여기
};
moveHeader("전체"); // 초기엔 "전체" 실행

//// 슬라이드

const slider = document.querySelector(".my_slider"); // 컨테이너 요소 선택
const slides = document.querySelectorAll(".my_slide"); //슬라이드 요소 선택
const slideLen = slides.length - 2; // 5장 중 5번, 1번 중복으로 되어있음 : -2
const currentState = { page: 1 }; // 현재 이미지 페이지 1로 정하여 둠
const playState = { isMove: false }; // 현재 움직이는지 : 초기값 false로 설정
const pointState = { startPoint: 0, distance: 0 }; // 드래그나 터치 동작 저장 : 현재 0
let autoSlideInterval; // 자동 슬라이드 변수

// 이미지 드래그 방지
const images = document.querySelectorAll(".my_slide img"); // 이미지들
images.forEach((img) => {
  img.addEventListener("dragstart", (e) => e.preventDefault()); // 슬라이더의 터치와 이미지 드래그가 겹치지 않도록 함
});

// 슬라이드 이동 함수
function goToSlide(page, transition = true) {
  //슬라이드 페이지 이동 / 애니매이션 효과
  slider.style.transition = transition ? "transform 0.3s ease" : "none"; //애니매이션 효과 ease 0.3초
  slider.style.transform = `translateX(${-100 * page}%)`; // x축 이동 (수평)
}

// 초기 페이지 위치 설정
goToSlide(currentState.page, false); // 슬라이드 첫번째 페이지로 위치 설정

// 루프 처리
slider.addEventListener("transitionend", () => {
  //슬라이더의 transition이 종료될 때 호출
  if (currentState.page === 0) {
    // 페이지가 끝났을 때
    currentState.page = slideLen; // 마지막 페이지로 이동 ( 가짜 첫번째 페이지 )
    goToSlide(currentState.page, false); // 해당 위치로 이동
  } else if (currentState.page === slideLen + 1) {
    // 복제된 첫번째 페이지로 이동(마지막)
    currentState.page = 1; // 진짜 첫번째 페이지로 이동
    goToSlide(currentState.page, false); // 해당 위치로 이동
  }
});

// 자동 슬라이드 함수
function startAutoSlide() {
  stopAutoSlide(); //기존의 자동 슬라이드 동작을 중지하여 중복 실행 방지
  autoSlideInterval = setInterval(() => {
    //일정 시간마다 실행 함수 setInterval()
    currentState.page++; //페이지 증가
    goToSlide(currentState.page); // 슬라이드 이동

    slider.addEventListener("transitionend", () => {
      // 슬라이드가 끝나면
      if (currentState.page === slideLen + 1) {
        // 현재 페이지가 마지막 페이지(가짜 첫번째)면
        currentState.page = 1; // 진짜 첫번째 페이지
        goToSlide(currentState.page, false); // 진짜 첫번째 페이지로 이동
      }
    });
  }, 3000); // 3초마다 슬라이드 이동
}

// 자동 슬라이드 정지 함수
function stopAutoSlide() {
  clearInterval(autoSlideInterval); //기존의 자동 슬라이드 동작을 중지하여 중복 실행 방지(반복 중단)
}

// 드래그 시작
slider.addEventListener("mousedown", (e) => {
  // 마우스 클릭 = mousedown
  playState.isMove = true; // 드래그 활성화
  slider.style.transition = "none"; // 애니메이션 효과 제거
  pointState.startPoint = e.clientX; // 드래그 시작 위치 저장
  stopAutoSlide(); // 드래그 중 자동 슬라이드 정지
});
// 드래그 중
slider.addEventListener("mousemove", (e) => {
  if (!playState.isMove) return; // 드래그 중이 아닐 경우 함수 종료
  const moveDistance =
    e.clientX - pointState.startPoint + -100 * currentState.page; // 드래그한 거리만큼 현재 슬라이드 위치 조정
  slider.style.transform = `translateX(${moveDistance}px)`; // 슬라이더 이동
});
// 드래그 종료
slider.addEventListener("mouseup", (e) => {
  playState.isMove = false; // 드래그 종료
  const distance = e.clientX - pointState.startPoint; // 드래그한 거리

  if (distance > 100 && currentState.page > 0) {
    //거리가 100이상
    currentState.page--; //페이지 왼쪽 이동(X)
  } else if (distance < -100 && currentState.page < slideLen + 1) {
    //거리가 -100이상
    currentState.page++; //페이지 오른쪽 이동(X)
  }

  goToSlide(currentState.page); //해당 페이지로
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

  initializeObserver(); // Observer 초기화
};

// Intersection Observer 초기화 함수
const initializeObserver = () => {
  const imgBoxes = document.querySelectorAll(".imgBox");
  const observer = new IntersectionObserver(
    (entries) => {
      // 관찰 중인 요소 배열.
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //요소가 화면에 보이는지 여부.
          entry.target.classList.add("visible"); // 화면에 보이면 visible 클래스 추가
          observer.unobserve(entry.target); // 관찰 중단
        }
      });
    },
    { threshold: 0.3 } // 30% 이상이 화면에 나타났을 때 올라옴
  );

  imgBoxes.forEach((box) => observer.observe(box)); // 각 imgBox Observer에
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
const slideCount = slides.length - 2; // 슬라이드 수 (복제된 슬라이드 제외 5개)

// 점 생성
function createDots() {
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active"); // 첫 번째 슬라이드 활성화
    dot.dataset.index = i + 1; // 점에 슬라이드 인덱스 저장
    dotNavigation.appendChild(dot); // 자식 요소로 점 추가
  }
}

// 점 활성화 업데이트
function updateDots(page) {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, index) => {
    if (index === page - 1) {
      //현재 슬라이드 인덱스(page - 1)와 점의 인덱스를 비교
      dot.classList.add("active");
    } else {
      dot.classList.remove("active"); //일치하는 점에 active 클래스 추가, 나머지는 제거
    }
  });
}

// 점 클릭 이벤트
dotNavigation.addEventListener("click", (e) => {
  if (e.target.classList.contains("dot")) {
    const targetPage = Number(e.target.dataset.index); // 클릭한 점의 인덱스
    currentState.page = targetPage; // 슬라이드 상태 업데이트
    goToSlide(currentState.page); // 해당 슬라이드로 이동
    updateDots(currentState.page); // 점 색깔 변경
  }
});

// 슬라이드 이동 시 점 업데이트
slider.addEventListener("transitionend", () => {
  // 페이지 끝나면
  if (currentState.page === 0) {
    // 마지막 페이지면
    currentState.page = slideLen; // 마지막 페이지 뒤 가짜 첫번째로 이동
    goToSlide(currentState.page, false);
  } else if (currentState.page === slideLen + 1) {
    currentState.page = 1; // 첫 번째 슬라이드에서 마지막으로 루프
    goToSlide(currentState.page, false);
  }
  updateDots(currentState.page);
});

// 초기 설정
createDots();
startAutoSlide();
