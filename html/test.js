// let vh = window.innerHeight * 0.01;
// let vw =window.innerWidth *0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);
// document.documentElement.style.setProperty('--vw', `${vw}px`);
// window.toggleEventListener('resize', () => {
//     // We execute the same script as before
//     let vh = window.innerHeight * 0.01;
//     let vw =window.innerWidth *0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
//     document.documentElement.style.setProperty('--vw', `${vw}px`);
//   });
/*Setting scrollbar*/
let scroll = window.innerWidth - document.body.offsetWidth;
let isScrolling;
let chevron = document.getElementById('chevron-up');
console.log(chevron);
let fullwidth = document.getElementsByClassName('fullWidth');
for (let i = 0; i < fullwidth.length; i++) {
  fullwidth[i].style.width = `calc(100vw - ${scroll}px)`;
  // fullwidth[i].style.margin="0";
}
////////////
//animating titles
let inViewP = (top) => {
  return (top < window.innerHeight - 100);
};
let liners2 = document.querySelectorAll('.liners2 span');
let liners3 = document.querySelectorAll('.liners3 span');
let liners4 = document.querySelectorAll('.liners4 span');
let liners5 = document.querySelectorAll('.liners5 span');
let liners = document.querySelectorAll('.liners span');
let titlesAnim = (el) => {
  if (inViewP(el[0].getBoundingClientRect().top)) {
    for (let i = 0; i < el.length; i++) {
      el[i].style.display = 'inline-block';
      el[i].style.animationDelay = i * 250 + 'ms';
      el[i].classList.add('titlesAnim');
    }
  }
}
titlesAnim(liners);

/*cards animation*/

let fCards = document.getElementsByClassName('fCard');
let el = document.getElementById('fCards');
let pos = [0, 0, 0, 0, 0, 0];
let addClss = (el1) => {
  if (inViewP(el1[0].top)) {
    if (!fCards[0].classList.contains('anim')) {
      for (let i = 0; i < fCards.length; i++)
        fCards[i].classList.add('anim');
    }
  }
}

for (let i = 0; i < fCards.length; i++) {
  fCards[i].style.animationDelay = i * 500 + 'ms';
}
/*End od Card anim*/

/*card hover*/
let hCards = document.getElementsByClassName('HfCard');
fCards[0].addEventListener('animationstart', () => {
  for (let i = 0; i < fCards.length; i++) {
    hCards[i].style.display = "none";
  }
});
for (let i = 0; i < fCards.length; i++) {
  fCards[i].addEventListener('animationend', () => {
    hCards[i].style.display = '';
  })
}
for (let i = 0; i < fCards.length; i++) {
  document.addEventListener('scroll', () => {
    window.clearTimeout(isScrolling);
    pos[i] = fCards[i].getBoundingClientRect();
    addClss(pos);
    titlesAnim(liners2);
    titlesAnim(liners3);
    titlesAnim(liners4);
    titlesAnim(liners5);
    chevron.style.opacity = "0"; // hide chevron when scrolling
    chevron.style.transition = "opacity 0.3s";
    isScrolling = setTimeout(() => {
      chevron.style.opacity = "1";
      chevron.style.transition = "opacity 0.7s";
    }, 100);
  });
  chevron.style.visibility = "visible";
  window.addEventListener('resize', () => {
    pos[i] = fCards[i].getBoundingClientRect();
    addClss(pos);

  });
  //setting position of hCards
  let rmvclss = () => {
    hCards[i].classList.remove('actHcard');
  }
  let addclss = () => {
    hCards[i].style.top = window.pageYOffset + pos[i].top - 100;
    hCards[i].style.left = pos[i].left - pos[i].width / 4;
    if (!(hCards[i].classList.contains('actHcard')))
      hCards[i].classList.add('actHcard');
  }
  fCards[i].addEventListener('mouseover', addclss);
  fCards[i].addEventListener('mouseout', () => {
    rmvclss();
    fCards[i].addEventListener('mouseover', addclss);
  });
  hCards[i].addEventListener('mouseover', () => {
    addclss();
    fCards[i].removeEventListener('mouseout', rmvclss);
  });
  hCards[i].addEventListener('mouseout', () => {
    hCards[i].classList.remove('actHcard');
    // fCards[i].removeEventListener('mouseout', rmvclss);
  });
}
/* this part is for controlling the navMenu side*/
let navMenuBtn = document.getElementById('navMenuBtn');
let navList = document.getElementById('navList');
let navContent = document.getElementById('navContent');
let mTitle = document.getElementById('mTitle');
let navUl = document.getElementById('navUl');
let navBox = document.querySelectorAll('.navBox');
let toggleNav = () => {
  navList.classList.toggle("act");
  navList.classList.toggle("nonAct");
  navContent.classList.toggle('act');
  navContent.classList.toggle("nonAct");
  mTitle.classList.toggle('act');
  mTitle.classList.toggle("nonAct");
  navUl.classList.toggle("act");
  navUl.classList.toggle("nonAct");
}
navMenuBtn.addEventListener('click', () => {
  toggleNav();
});
navList.addEventListener('click', (e) => {
  toggleNav();
});
navContent.addEventListener('click', e => {
  e.stopPropagation();
});
for (let i = 0; i < navBox.length; i++) {
  navBox[i].addEventListener('click', () => {
    toggleNav();
  })
}


/*Doctors quotes animation*/
let dCards = document.getElementsByClassName('dCard');
let quoteMT = document.querySelectorAll('.qIconTop');
let quoteMB = document.querySelectorAll('.qIconBtm');
for (let i = 0; i < dCards.length; i++) {
  dCards[i].addEventListener('mouseover', () => {
    quoteMT[i].classList.add('qAnim');
    quoteMB[i].classList.add('qAnim');
  });
  dCards[i].addEventListener('mouseout', () => {
    quoteMT[i].classList.remove('qAnim');
    quoteMB[i].classList.remove('qAnim');
  });
}
console.log("doc h = " + document.documentElement.clientHeight)
// let top4 = document.getElementById('top4')
//  end of setting slide block
// let specialite = document.getElementById('specialité');
// let specialitesList = specialite.childNodes;
// for (const i in specialitesList) {
//   if (Object.hasOwnProperty.call(specialitesList, i)) {
//     const specialites = specialitesList[i].innerText;
//   }
// }
/* forms */
let inscr = document.getElementsByClassName('inscr');
let fContr = document.getElementById('fContainer');
let input = document.getElementsByTagName('input');
let pAttr = [];
let mp = document.getElementById('mp');
let cmp = document.getElementById('cmp');
let x = document.getElementsByClassName('x');
for (let i = 0; i < inscr.length; i++) {
  inscr[i].addEventListener('click', (e) => {
    e.preventDefault();
    fContr.style.top = `${window.pageYOffset}px`;
    document.body.style.overflow = "hidden";
    for (let i = 0; i < fullwidth.length; i++) {
      fullwidth[i].style.width = `100vw`;
    }
    fContr.querySelector('form:nth-child(2)').style.display = 'none';
    fContr.style.display = "block";
    fContr.style.opacity = "1";
  });
}
let opct;
for (let j = 0; j < x.length; j++) {
  x[j].addEventListener('click', () => {
    window.clearTimeout(opct);
    fContr.style.opacity = "0";
    opct = setTimeout(() => {
      fContr.style.display = "none";
      fContr.firstElementChild.style.display = 'block';
      fContr.querySelector('form:nth-child(2)').style.display = 'block';
    }, 500);
    document.body.style.overflow = "auto";


    for (let i = 0; i < fullwidth.length; i++) {
      fullwidth[i].style.width = `calc(100vw - ${scroll}px)`;
    }
  })
}
for (let i = 0; i < input.length; i++) {
  input[i].addEventListener('focus', () => {
    input[i].nextElementSibling.classList.toggle('iFocus');
  });
  input[i].addEventListener('blur', () => {
    input[i].nextElementSibling.classList.toggle('iFocus');
  })
}
let cnn = document.getElementById('conn');
cnn.addEventListener('click', (e) => {
  e.preventDefault();
  fContr.style.top = `${window.pageYOffset}px`;
  document.body.style.overflow = "hidden";
  for (let i = 0; i < fullwidth.length; i++) {
    fullwidth[i].style.width = `100vw`;
  }
  fContr.style.display = "block";
  fContr.firstElementChild.style.display = 'none';
  fContr.style.opacity = "1";
});