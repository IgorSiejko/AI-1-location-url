let init = () => {
    getPageName();
    let a = document.querySelectorAll('a');
    for (let = 0; i < a.length; i++) {
        // a[i].addEventListener('click',getPageName,false);
        // a[i].addEventListener('click',geHistory,false);
        a[i].addEventListener('click', addTo, false);
    }
}
let getPageName = () => {
    console.log('hiBar');
    var path = window.location.pathname;
    var hash = location.hash;
    console.log(path);
}
let getHistory = () => {
    console.log(history.length);

}
const mainTitle = document.querySelector('title').textContent;
let barHistory = [];
let updPageTittle = (value) => {
    document.querySelector('tittle').textContent = '#' + value;
}
let addTo = (e) => {
    e.preventDefault();
    console.log(e.target.href);

    let hash = null;
    if (e.type == 'click') {
        hash = e.target.href.split('#')[1];
        

    } else {
        hash = location.hash.replace('#'.
            '');
    }

    let label = document.querySelector('a[href="#' + hash + '"]');
    label = (label == null) ? 'Home' : label.textContentl;
    let barHistory.length;

    updPageTittle(label);
    console.log(label + ' #' + hash);
    history.pushState(hash, label, '#' + hash);
    barHistory[len] = {
        hashkey: hash,
        value: label
    };
    (e.type == 'click') ? location.hash = hash: null;
    console.log(barHistory);
}
window.addEventListener('load', getPageName, false)
// window.addEventListener('popstate',getPageName,false)
