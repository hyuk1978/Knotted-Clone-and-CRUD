const slideInfos = document.querySelectorAll('.best_donut_info');
const slideImgs = document.querySelectorAll('.best_donut_img');
const leftBtn = document.querySelector('.prev');
const rightBtn = document.querySelector('.next');

let currentSlideIndex = 0;

console.log(currentSlideIndex);
function slideEvent(index){
    slideInfos.forEach((infoSlide, i) =>{
        if(i === index){ // 배열 아이템과 index가 일치할 경우
            infoSlide.style.display = 'block';
        }else {
            infoSlide.style.display = 'none';
        }
    });

    slideImgs.forEach((imgSlide, i) =>{
        if(i >= currentSlideIndex ){ 
            imgSlide.style.display = 'block';
        }else {
            imgSlide.style.display = 'none';
        }
    });
}



leftBtn.addEventListener('click', function() {
    currentSlideIndex--;
    if(currentSlideIndex < 0){
        currentSlideIndex = slideInfos.length - 1;
    }
    slideEvent(currentSlideIndex);
});

rightBtn.addEventListener('click', function() {
    currentSlideIndex++;
    if(currentSlideIndex > slideInfos.length-1){
        currentSlideIndex = 0; //다시 기본값으로 초기화
    }
    slideEvent(currentSlideIndex);
});

// a태그 이벤트 막기
const aEvent = document.querySelectorAll('a');

function notEvent(e) {
    if (e.currentTarget.getAttribute('href') === '#') {
        e.preventDefault();
    }
}

aEvent.forEach((a) => {
    a.addEventListener('click', notEvent);
});


const head = document.querySelector('header');

function showFixed() {
    if (window.scrollY > 0) {
        head.style.backgroundColor = 'rgba(253, 250, 247, 0.7)'; // 여기서 RGB 값과 투명도 조절
    } else {
        head.style.backgroundColor = 'rgba(253, 250, 247, 1)'; // 스크롤이 0 이상이 아닐 때 원래 배경색으로 복원
    }
}
window.addEventListener('scroll', showFixed);

// const infoSlides = document.querySelectorAll('.best_donut_info'); // ALL을 통해 배열에 담김
// const imgSlides = document.querySelectorAll('.best_donut_img'); // ALL을 통해 배열에 담김
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');

// let currentSlideIndex = 0; //초기값 설정 로딩시 초기값에 인덱스의 info , img가 보여짐

// function showSlide(index) {
//   infoSlides.forEach((infoSlide, i) => {
//     if (i === index) {
//       infoSlide.style.display = 'block';
//       infoSlide.style.left = '0';
//       console.log('현재 index' + index);
//       console.log('현재 i'+i);
//     } else {
//       infoSlide.style.display = 'none';
//       infoSlide.style.left = '400px';
//       console.log('i !== index'+i);
//     }
//   });

//   imgSlides.forEach((imgSlide, i) => {
//     if (i >= currentSlideIndex) {
//       imgSlide.style.display = 'block';
//     } else {
//       imgSlide.style.display = 'none';
//     }
//   });
// }



// prevButton.addEventListener('click', () => {
//   currentSlideIndex--;
//   if (currentSlideIndex < 0) { // 인덱스 값이 0보다 작은 경우 = 1번째 순서보다도 작을경우
//     currentSlideIndex = infoSlides.length - 1; // length -1 의 값으면 적용
//   }
//   showSlide(currentSlideIndex); // 이벤트 호출
// //   console.log(currentSlideIndex);
//   console.log('==============');
// });

// nextButton.addEventListener('click', () => {
//   currentSlideIndex++;
//   if (currentSlideIndex >= infoSlides.length) { // 인덱스 값이 length 보다 큰 경우
//     currentSlideIndex = 0; // 0으로 변경 즉 첫번째로 돌아옴
//   }
//   showSlide(currentSlideIndex); // 이벤트 호출
// //   console.log(currentSlideIndex);
// console.log('==============');
// });
// // 배열의 순서상 0부터 시작하여 현재 적용한 5개의 순서는 0,1,2,3,4임
// // 하지만 length는 1,2,3,4,5로 적용되어 -1과 0으로 값을 적용해줘야함

// // console.log(currentSlideIndex);
// // console.log(infoSlides.length);


// showSlide(currentSlideIndex);



// aEvent.forEach((a) => {
//     a.addEventListener('click', notEvent);
// });