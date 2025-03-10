
# :climbing_woman: 클라이밍 정보 사이트 ALLROCK README
<div align="center">
  <img width="100%" alt="image" src="https://github.com/user-attachments/assets/67d78129-9752-4430-8b1d-c8366d9385df" /><br/><br/><br/>
  <img width="80%" alt="image" src="https://github.com/user-attachments/assets/2ba227bf-0bd8-4f64-9b53-f379a6af1638" />
</div>

## :page_facing_up: 프로젝트 소개
### 개발동기
#### 1. 주제 선정 배경
##### 1) 클라이밍 인구의 증가: 최근 몇 년간 실내 암벽 등반과 스포츠 클라이밍에 대한 관심이 크게 증가하며 관련 인구도 늘어나고 있습니다.
##### 2) 정보의 분산: 국내 클라이밍장 정보가 다양한 블로그, 커뮤니티, 소셜 미디어에 분산되어 있어 접근성이 낮습니다.
##### 3) 효율적인 정보 제공의 필요성: 초보자와 숙련자 모두에게 체계적이고 신뢰할 수 있는 정보를 제공할 플랫폼의 필요성이 대두되었습니다.
###### :point_right: 국내 클라이밍장 정보를 모아둔 웹사이트를 제작하게 되었습니다.<br/><br/><br/>

#### 2. 기획 및 서비스 목표
##### 1) 사용자 친화적인 플랫폼을 구축
##### 2) 데이터의 통합 및 표준화<br/><br/><br/>


## :high_brightness: 개발 환경
<div align="center"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></div>
<br/><br/>

## :hammer: 주요기능
### 1. 메인 페이지 - 1페이지
#### ✅ 슬라이드 - js <br/>
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/dc15f3ec-a406-4b60-b8c9-70da7c4738f9" />
<br/>

##### 1) 마우스로 이동이 가능하며, 점 버튼 클릭 시에도 이동합니다. 일정 시간 마다 작동합니다.
##### 2) addEventListener를 사용하였습니다. <br/><br/><br/>

#### ✅ 제목 클릭 시 게시판 이미지들 변경<br/>
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/38cea3f4-d3c5-452d-b668-34f396bca32e" />
<br/>

##### 1) 게시판 제목을 클릭하면 제목에 맞는 이미지로 변경됩니다. (onclick으로 text를 받아와서 변경)
##### 2) 이미지는 JavaScript로 text에 따라 배열을 가져옵니다.
##### 3) 각 이미지 크기는 grid로 한 줄에 3개씩 배치되며, 각 이미지의 비율은 4/3으로 설정하여 반응형을 고려하여 배치하였습니다.<br/>

#### ✅ hover시 이미지 확대 - CSS <br/><br/>

###  2. ABOUT 페이지 - 2페이지
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/67d78129-9752-4430-8b1d-c8366d9385df" /><br/>

#### ✅ 스크롤 시 이미지 겹쳐지면서 흐릿해지는 효과 - CSS - sticky <br/>

##### 1) 부모 요소 안에 이미지들을 넣고 position: sticky를 사용하였습니다.
##### 2) scroll 이벤트로 scrollTop 값을 받아와서 높이에 따라 투명도를 조절하였습니다.
#####   (1) 연립방정식을 사용하였습니다. ex. 1 = a * 700 + b, 0.9 = a * 1150 + b => a와 b값을 구하여 높이에 따라 투명도를 조절하였습니다.
#####   (2) ex. let y = -0.0016 * scrollHeight + 4.7472; / document.querySelector(".image").style.opacity = y;<br/><br/>


#### ✅ 이미지 반복 - 무한으로 흘러가는 효과 <br/>
##### 1) @keyframes 사용하여 애니메이션 효과를 주었습니다.
##### 2) 한 번만 흘러가면 끊기는 것처럼 보여서 이미지를 두 번 반복하여 사용하였습니다.<br/><br/>

#### ✅ 반응형 <br/>
##### 모든 페이지에 반응형을 적용하였습니다.
<img width="45%" height="450px" alt="image" src="https://github.com/user-attachments/assets/9eb324d2-c643-4092-9f93-4bdb28892b00" />
<img width="45%" height="450px" alt="image" src="https://github.com/user-attachments/assets/acb90712-6616-4ac7-bda2-33f9c52fabb2" />
<br/><br/>

## :hammer: 향후 계획
###### 1) 커뮤니티 활성화 <br/>
###### 2) 지도 기능 추가 <br/>
###### 3) 외국인 사용자 지원 <br/>
###### 4) 파트너십 확장 <br/>
###### 5) SHOP 추가 <br/>
###### :star: 하단 배너 광고, 판매 수수료, 홍보 수수료 -> :star: 수익성 확보 <br/><br/><br/>



