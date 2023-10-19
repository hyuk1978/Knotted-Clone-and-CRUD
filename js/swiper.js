new Swiper('.swiper', {
    // 다양한 옵션 설정, 
    // 아래에서 설명하는 옵션들은 해당 위치에 들어갑니다!!
    slidesPerView : 'auto',
    spaceBetween : 2, 

     direction: 'horizontal', // 슬라이드 진행 방향, 기본값 horizontal(가로) vertical(세로)

  // autoplay: true 도 가능하지만 객체 데이터로 할당하면 추가적인 옵션 설정 가능
    autoplay: {
    // 자동재생 여부
    delay: 5000, // 시작시간 설정
    },
    loop: true, // 반복재생 여부
    slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 0, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기

 // 페이저 버튼 사용자 설정
    pagination: {
    // 페이지 번호 요소 선택자
    el: '.promotion .swiper-pagination',
    
    // 사용자의 페이지 번호 요소 제어 가능 요소 (사용자가 단순히 시각적으로만 보는것 뿐만아니라 눌러서 제어할 수 있는지에 대한 여부)
    clickable: true,
  },
      // nav 화살표 출력 시 추가
//   navigation: {
//     prevEl: '.swiper-prev',
//     nextEl: '.swiper-next',
//   },
  // pagination 설정을 추가
  pagination: {
    el: '.swiper-pagination', // 페이지 피커 엘리먼트의 CSS 선택자
    clickable: true, // 사용자가 페이지를 클릭하여 슬라이드를 변경할 수 있도록 활성화
  },
//   scrollbar: {
//     el: '.swiper-scrollbar', // 스크롤바 엘리먼트의 CSS 선택자
//     hide: false, // 스크롤바를 숨길지 여부 (true 또는 false)
// },

})