document.addEventListener("DOMContentLoaded", function(){

    /* 공통 등장 효과 - 페이드인 */
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    fadeEls.forEach(el => observer.observe(el));

    /* 상세 팝업 슬라이드 */
    var swiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        //dynamicBullets: true,
      },
    });

});
