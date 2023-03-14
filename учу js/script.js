let tab = function () {
    let tabNav = document.querySelectorAll('.item'),
        tabContent = document.querySelectorAll('.content'),
        tabName;


        tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');

        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) 
            ? item.classList.add('is-active') : 
            item.classList.remove('is-active');
        })
    }
};

tab();


/* ********************************************** */
let closeWindow = document.querySelector('.close-modal-window'),
    openModal = document.querySelector('.modal-window-btn'),
    windowMoodal = document.querySelector('.wrapper-moodal-wiindow');

closeWindow.addEventListener('click', function () {
    windowMoodal.style.display = 'none';
    windowMoodal.classList.remove('wrapper-moodal-wiindow');
    document.body.style.overflow = '';
});

openModal.addEventListener('click', function () {
    windowMoodal.style.display = 'block';
    this.classList.add = ('wrapper-moodal-wiindow');
    document.body.style.overflow = 'hidden';
});


/* ************************************************* */                             
