
# :climbing_woman: 클라이밍 정보 사이트 ALLROCK README
<div align="center">
  <img src="https://github.com/user-attachments/assets/f10c62a0-d386-4844-bfa8-641f7e960f0a" alt="mainpageimage" />
</div>

## :page_facing_up: 프로젝트 소개
### 1. 개발동기
#### 1) 주제 선정 배경
##### (1) 클라이밍 인구의 증가: 최근 몇 년간 실내 암벽 등반과 스포츠 클라이밍에 대한 관심이 크게 증가하며 관련 인구도 늘어나고 있음.
##### (2) 정보의 분산: 국내 클라이밍장 정보가 다양한 블로그, 커뮤니티, 소셜 미디어에 분산되어 있어 접근성이 낮음.
##### (3) 효율적인 정보 제공의 필요성: 초보자와 숙련자 모두에게 체계적이고 신뢰할 수 있는 정보를 제공할 플랫폼의 필요성 대두.
###### :point_right: 국내 클라이밍장 정보를 모아둔 웹사이트 제작.<br/><br/><br/>

#### 2) 기획 및 서비스 목표
##### (1) 사용자 친화적인 플랫폼 구축: 누구나 쉽게 국내 클라이밍장 정보를 검색하고 열람할 수 있는 환경 조성.
##### (2) 데이터의 통합 및 표준화: 클라이밍장 정보를 한 곳에 모아 체계적으로 정리.<br/><br/><br/>

## :high_brightness: 개발 환경
<div align="center"><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/></div>
<br/><br/>

## :hammer: 주요기능
###  1. 메인 페이지
#### :star: 슬라이드 - js <br/>
<img width="939" alt="image" src="https://github.com/user-attachments/assets/dc15f3ec-a406-4b60-b8c9-70da7c4738f9" />
##### (1) 마우스로 이동, 점 버튼 클릭 시 이동, 일정 시간 마다 작동.<br/><br/><br/>
<br/>
<br/>

###  2. SHOP 메인 페이지 
#### :star: 등록한 상품 - 메인 페이지에서 확인 가능<br/>
1. 메인 쇼핑몰 페이지에서 등록한 상품 확인 가능(로컬스토리지)<br/>
2. 각 메뉴명을 누르면 등록 시 설정한 카테고리별 상품 확인 가능<br/>
3. 상품의 좋아요 버튼 누르면 새로고침 후에도 유지(로컬스토리지)<br/>
4. 상품을 클릭하면 상품 상세페이지로 이동 (URL 파라미터)<br/>
5. 캐러셀 - 부트스트랩과 스와이퍼로 구현<br/>
6. hover시 이미지 크기 변환 및 밑줄 효과<br/><br/>
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/f473d9c3-615f-4fd8-b97a-08dc5c37a26a" />
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/1dd05649-381a-4c8e-bb6b-28b14cb30170" />
<br/><br/>

###  3. SHOP 상세 페이지 
#### :star: 장바구니 담기 및 새로운 상품 추천<br/>

1. 상세페이지에서 장바구니 담기 버튼을 누르면 장바구니에 담김<br/>
2. 하단에 새로운 상품들 추천 이미지 - hover시 다른 이미지로 변경<br/>
3. 메인 페이지의 좋아요 버튼 클릭 여부 유지 및 변경 가능 (로컬스토리지)<br/>
4. 준비 중인 기능들은 sweetalert 사용하여 "준비 중입니다." 안내창 띄움<br/>
5. 같은 상품은 장바구니에 담기지 않도록 설정, 중복 시 안내창 띄움 <br/>
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/e3f70eba-cc9e-4d45-892f-6f00ea84bfaa" />

<img width="100%" alt="image" src="https://github.com/user-attachments/assets/fb67d8f4-25da-4e8f-bf75-b2ec20eaaf00" />
<br/><br/>

###  4. SHOP 장바구니 페이지 
#### :star: 총 금액 계산 및 장바구니 상품 삭제<br/>
1. 장바구니 총 금액 및 개수 계산<br/>
2. 휴지통 버튼 클릭 시 해당 상품 삭제 및 총 금액 변경<br/>
3. 장바구니 비우기 버튼 클릭 시 alert창 -> 삭제 누르면 전체 상품 삭제<br/>
4. 전체 상품 삭제 시 "장바구니가 비어있습니다." 이미지 보이게 설정<br/>
<img width="100%" alt="image" src="https://github.com/user-attachments/assets/6e587b78-61db-4d6c-9d8b-fe75b8addc4a" />


<img width="100%" alt="image" src="https://github.com/user-attachments/assets/cf6ab2f2-4dfc-4214-aaad-4fe57cac3d25" />
<br/><br/>
