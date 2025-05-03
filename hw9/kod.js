// 1

const btnEl=document.querySelector('.btn');
const titleEl=document.querySelector('.title')
const contentEl=document.querySelector('.content');

    btnEl.addEventListener('click', function (e) {
        titleEl.classList.toggle('title-hide');
    })

// 2
const btn_colorEl=document.querySelector('.btn-color');

    btn_colorEl.addEventListener('click', function (e) {
        document.querySelector('.par').style.backgroundColor='#87185B';
    })

// 3
const btn_textEl=document.querySelector('.btn-text');

    btn_textEl.addEventListener('click', function (e) {
        titleEl.textContent='Привет, мир!';
    });

// 4, 5
const btn_alltextEl=document.querySelector('.btn-alltext');
const discriptionEl=document.querySelectorAll('.discription');

btn_alltextEl.addEventListener('click', function (e) {
    discriptionEl.forEach(description => {
   description.textContent = 'Новый текст';
   description.style.color='#CB97FF';
    })
});

// 6
const btn_newparEl=document.querySelector('.btn-newpar');

btn_newparEl.addEventListener('click', function (e) {
    const newParEl=document.createElement('p');
    newParEl.textContent='Новый параграф';
    newParEl.classList.add('newpar');
    contentEl.appendChild(newParEl);
    // contentEl.insertBefore(newParEl, btnEl);
});

// 7
const btn_del=document.querySelector('.btn-del');

btn_del.addEventListener('click', function (e) {
    const firstDiscr=document.querySelector('.discription');
    firstDiscr.remove();
});

