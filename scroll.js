window.addEventListener("scroll", () => {
  // 첫번째 스티키들
  let scrollHeight = document.documentElement.scrollTop;
  console.log(scrollHeight);
  let y1 = -0.00114 * scrollHeight + 2.257;
  let y2 = -0.001333 * scrollHeight + 3.3227;
  let y3 = -0.0016 * scrollHeight + 4.7472;
  document.querySelector(".libox1").style.opacity = y1;
  document.querySelector(".libox2").style.opacity = y2;
  document.querySelector(".libox3").style.opacity = y3;

  // // 두번째 스티키들

  // let y4 = -0.00114 * scrollHeight + 5.048;
  // let y5 = -0.0016 * scrollHeight + 7.792;
  // let y6 = -0.0016 * scrollHeight + 8.592;
  // let small1 = -0.0002857 * scrollHeight + 2.012;
  // let small2 = -0.0004 * scrollHeight + 2.698;
  // let small3 = -0.0004 * scrollHeight + 2.898;
  // document.querySelector(".appendimg1").style.opacity = y4;
  // document.querySelector(".appendimg2").style.opacity = y5;
  // document.querySelector(".appendimg3").style.opacity = y6;
  // document.querySelector(".appendimg1").style.scale = small1;
  // document.querySelector(".appendimg2").style.scale = small2;
  // document.querySelector(".appendimg3").style.scale = small3;
});
// y = a * 높이 * b
// let y = (-1 / 450) * scrollHeight + 23 / 9;
// let small = (-1 / 4500) * scrollHeight + 52 / 45;
// document.querySelectorAll(".card-box")[0].style.opacity = y;
// document.querySelectorAll(".card-box")[0].style.scale = small;
//1100 ~ 1800까지 스크롤바를 내리면, 첫째카드의 opacity 1~0으로 변경
