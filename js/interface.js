// let t = document.getElementsByTagName('table');
// t[0].addEventListener('click', (e)=> {
//     let ctd = e.target;
//     let txt = document.createElement('input');
//     txt.setAttribute('type','text');
//     txt.style.width=ctd.style.width + 'px';
//     txt.style.height="100%";
//     ctd.innerHTML="";
//     ctd.appendChild(txt);
// });
////table links 

let table = document.getElementById('tables');
let tab = document.getElementsByClassName('tabs');
let tabCnt = document.getElementsByClassName('tabContent');
for (let i = 0; i < tab.length; i++) {
    tab[i].addEventListener('click', () => {
        for (let j = 0; j < tab.length; j++)
            if (tab[j].classList.contains('tabSelected')) {
                tab[j].classList.remove('tabSelected');
                tab[j].classList.add('Inactive');
                tabCnt[j].classList.add('tableInactive');
            }
        tab[i].classList.add('tabSelected');
        tab[i].classList.remove('Inactive');
        tabCnt[i].classList.remove('tableInactive');
    })
}
// //select column 
// let selectedC = document.getElementsByClassName('')
// //// supprimer colonne 
// let supClm = document.getElementsByClassName('supCln');
// for (let i = 0; i>supCln.length;i++) {
//     supCln[i].addEventListener('click', ()=> {

//     })
// }
let tables = document.getElementsByTagName('table');
let supR = function (target) {
    let supW = document.getElementsByClassName('supW')[0];
    supW.style.display = 'block';
    supW.addEventListener('click', (e) => {
        if (e.target.innerText == 'Oui') {
            if (target != target.parentNode.querySelector('tr:first-child')) {
                if (target.classList.contains('selectedRow')) {
                    target.nextElementSibling.setAttribute('class', 'selectedRow');
                    console.log(target.nextElementSibling);
                }
                target.remove();
            }
        }
        else if (e.target.innerText == 'Non')
                supW.style.display = 'none';
            supW.style.display = 'none';
    })
}
for (let i = 0; i < tables.length; i++) {
    tables[i].addEventListener('dblclick', (e) => {
        let target = e.target;
        //if its a row 
        if (target.nodeName == 'TD') {

        }
    });
    tables[i].addEventListener('click', (e) => {
        let target = e.target;
        switch (target.nodeName) {
            case 'IMG':
                ///if we click on trash to delete
                if (target.parentNode.classList.contains('supCln')) {
                    target = target.parentNode.parentNode.parentNode;
                    supR(target);
                }
                break;
            case 'TD':
                tables[i].getElementsByClassName('selectedRow')[0].classList.remove('selectedRow');
                target.parentNode.classList.add('selectedRow');
                break;
        }
    })
}
///suivant et precedent

let suivant = document.getElementsByClassName('suivant');
let precedent = document.getElementsByClassName('precedent');

for (let i = 0; i < suivant.length; i++) {
    suivant[i].addEventListener('click', (e) => {
        let selected = e.target.parentNode.nextElementSibling.getElementsByClassName('selectedRow')[0];
        if (e.target.nodeName == 'IMG') {
            selected = e.target.parentNode.parentNode.nextElementSibling.getElementsByClassName('selectedRow')[0];
        }
        selected.nextElementSibling.classList.add('selectedRow');
        selected.classList.remove('selectedRow');
    }, true)
}
for (let i = 0; i < precedent.length; i++) {
    precedent[i].addEventListener('click', (e) => {
        let selected = e.target.parentNode.nextElementSibling.getElementsByClassName('selectedRow')[0];
        if (e.target.nodeName == 'IMG') {
            selected = e.target.parentNode.parentNode.nextElementSibling.getElementsByClassName('selectedRow')[0];
        }
        selected.previousElementSibling.classList.add('selectedRow');
        selected.classList.remove('selectedRow');
    })
}
/// trash in tools bar 
let supprimer = document.getElementsByClassName('supprimer');
for (let i = 0; i < supprimer.length; i++) {
    supprimer[i].addEventListener('click', (e) => {
        let selected = e.target.parentNode.nextElementSibling.
            getElementsByClassName('selectedRow')[0];
        if (e.target.nodeName == 'IMG') {
            selected = e.target.parentNode.parentNode.nextElementSibling.getElementsByClassName('selectedRow')[0];
        }
        supR(selected);

    })
}
////// rechercher
let rechBar = document.querySelectorAll('.searchBar input');
let sTd;
for (let i =0;i<rechBar.length;i++) {
    rechBar[i].addEventListener('focus', (e)=> {
        let table = e.target.parentNode.parentNode.nextElementSibling;
        let td = table.querySelectorAll('td:nth-child(2),td:nth-child(3),td:nth-child(4)');
        sTd = td;
    });
    rechBar[i].addEventListener('keyup', (e)=> {
        if (e.keyCode == '13'){
        let reg = RegExp(rechBar[i].value.toUpperCase());
        console.log(reg)
        for (let j=0;j<sTd.length;j++) {
            if (reg.test(sTd[j].innerText.toUpperCase())) {
                sTd[j].parentNode.classList.add('matchedTr');
            }
        }
    }
    });
    rechBar[i].addEventListener('blur',()=> {
        let matched = document.getElementsByClassName('matchedTr');

        for (let j =0 ;j<matched.length;j++) {
            matched[j].classList.remove('matchedTr');
        }
        matched = document.querySelectorAll('tr.matchedTr');

        for (let j =0 ;j<matched.length;j++) {
            matched[j].classList.remove('matchedTr');
        }
        rechBar[i].value ='';
    })
}
//// explorer
let expl = document.querySelectorAll('#explorer li');
for (let i= 0; i<expl.length;i++) {
    expl[i].addEventListener('click',()=> {
        console.log(i);
        for (let j = 0; j < tab.length; j++)
        if (tab[j].classList.contains('tabSelected')) {
            tab[j].classList.remove('tabSelected');
            tab[j].classList.add('Inactive');
            tabCnt[j].classList.add('tableInactive');
        }
    tab[i].classList.add('tabSelected');
    tab[i].classList.remove('Inactive');
    tabCnt[i].classList.remove('tableInactive');
    if(i>1) {
        for (let k=2;k<tab.length;k++) {
            tab[k].classList.remove('disabled');
        }
        for (let k=1; k>=0; k--) {
            tab[k].classList.add('disabled');
        }
    }
    else {
        for (let k=2;k<tab.length;k++) {
            tab[k].classList.add('disabled');
        }
        for (let k=1; k>=0; k--) {
            tab[k].classList.remove('disabled');
        }
    }
        
    })
}
//////ajouter 
let ajtP = document.getElementsByClassName('ajouterP');
for (let i = 0; i < ajtP.length; i++) {
    ajtP[i].addEventListener('click', ()=> {
       let ajoutf =  document.getElementsByClassName('ajoutF');
       ajoutf[i].classList.add('active');
       let ipt = ajoutf[i].getElementsByTagName('input');
       for (let j=0; j<ipt.length;j++) {
           ipt[j].value = '';
       }
       ipt[0].focus();
    })    
}
let closeX = document.getElementsByClassName('x');
for (let i = 0; i < closeX.length; i++) {
    closeX[i].addEventListener('click', (e)=> {
        if(e.target.nodeName == 'IMG') {
            e.target.parentNode.parentNode.parentNode.classList.remove('active');
            console.log('img');
        }
        else 
        e.target.parentNode.parentNode.classList.remove('active');
    })    
}