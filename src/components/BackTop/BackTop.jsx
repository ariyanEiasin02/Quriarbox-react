import React, { useEffect, useState } from 'react'

const BackTop = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scroll, setScroll] = useState(false);
  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };
    
  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };


  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  },[]);
  return (
    <>
        <div className={`${scroll ? "block z-[5]" : "hidden"}`}>
          <button onClick={scrollToTop} className="text-base font-raleway font-normal text-pramary right-4 bottom-[138px] fixed font-bold [writing-mode:vertical-lr]">To Top</button>

          <div className="progress-container w-[3px] h-16 right-[26px] bottom-16 fixed bg-[#f3f3f3]">
            <div className="progress-bar bg-pramary w-full h-0" style={{ height: `${scrollTop}%` }}></div>
          </div>
        </div>
    </>
  )
}

export default BackTop

// const tui = document.querySelector(".tui")
// console.log(tui);
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     show.style.display = "block";
//   } else {
//     show.style.display = "none";
//   }
// }