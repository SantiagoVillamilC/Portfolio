const bdark = document.querySelector('#mode-icon');
const body = document.querySelector('body');
const modeIcon = document.getElementById('mode-icon');

load();

bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode');
    store(body.classList.contains('darkmode'));

    if (modeIcon.src.endsWith("luna.png")) {
        modeIcon.src = "assets/sol.png";
    } else {
        modeIcon.src = "assets/luna.png";
    }

});

function load(){
    const darkmode = localStorage.getItem('darkmode');

    if(!darkmode){
        store('false');
        modeIcon.src = "assets/luna.png";
    }else if(darkmode == 'true'){
        body.classList.add('darkmode');
        modeIcon.src = "assets/sol.png";
    }
};

function store(value){
    localStorage.setItem('darkmode', value);
};


let cards = document.querySelectorAll('.card-tech');

cards.forEach(card => {
    card.addEventListener('mouseover', function() {
        this.classList.add('hovered');
        document.body.classList.remove('no-hover');
        cards.forEach(otherCard => {
            if (otherCard !== this) {
                otherCard.classList.remove('hovered');
            }
        });
    });

    card.addEventListener('mouseout', function() {
        this.classList.remove('hovered');
        if (!cards.some(card => card.classList.contains('hovered'))) {
            document.body.classList.add('no-hover');
        }
    });
});
