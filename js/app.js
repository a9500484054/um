document.addEventListener('click', (event) => {
    if(event.target.closest('.sell__item')) {
        console.log('21321321',);
        event.target.closest('.sell__item').classList.toggle('sell__item--active');
    };
});