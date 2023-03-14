let tab = function () {
    let tabNavigation = document.querySelectorAll('.button'),
        tabCont = document.querySelectorAll('.tab-content-text'),
        tabName;

        
        tabNavigation.forEach(item => {
            item.addEventListener('click', selectTabNavig)
        });

        function selectTabNavig() {
            tabNavigation.forEach(item => {
                item.classList.remove('active');
            });

            this.classList.add('active');
            tabName = this.getAttribute('data-set-tab');
            selectTabContent(tabName);
        }

        function selectTabContent(tabName) {          
            tabCont.forEach(item => {          
                item.classList.contains(tabName) ?           
                item.classList.add('active') :           
                item.classList.remove('active');          
            })
        }
}

tab();





