
require('normalize.css/normalize.css');
require('./styles/index.scss');

(function(){

    function init() {
        console.log('Initial');

        let mod = document.querySelector('.news-box');
        let labelPopular = mod.querySelector('.news-box__label--popular');
        let labelNewest = mod.querySelector('.news-box__label--newest');
        let listPopular = mod.querySelector('.news-box__list--popular');
        let listNewest = mod.querySelector('.news-box__list--newest');

        labelPopular.addEventListener('click', function(){
            labelNewest.classList.remove('news-box__label--active');
            labelPopular.classList.add('news-box__label--active');

            listNewest.classList.remove('news-box__list--active');
            listPopular.classList.add('news-box__list--active');
        });

        labelNewest.addEventListener('click', function(){
            labelPopular.classList.remove('news-box__label--active');
            labelNewest.classList.add('news-box__label--active');

            listPopular.classList.remove('news-box__list--active');
            listNewest.classList.add('news-box__list--active');
        });
    }

    init();

})()
