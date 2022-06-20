const teams = [
    {
        id: 1,
        proPic: 'https://unsplash.it/300/300?image=15',
        userName: 'Phil Mangion',
        date: '26/6/2022',
        pic: null,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        likeCount: '80',
    },
    {
        id: 2,
        proPic: 'https://unsplash.it/300/300?image=14',
        userName: 'Lucio Ghedina',
        date: '26/6/2022',
        pic: 'https://unsplash.it/600/300?image=171',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        likeCount: '120',
    }
];

const drawPost = allPostDraw(teams);
const allClickableElements = document.querySelectorAll('.like-button');
const allTextsElements = document.querySelectorAll('#like-counter-1');

for(let i = 0; i < allClickableElements.length; i++) {
    const thisClickableElement = allClickableElements[i];
    const thisTextElement = allTextsElements[i];
    thisClickableElement.addEventListener('click', function() {
        const relatedText = parseInt(allTextsElements[i].innerHTML);
        thisClickableElement.classList.add('like-button--liked');
        let newLike = 0;
        newLike = newLike + relatedText + 1;
        thisTextElement.innerHTML = '';
        thisTextElement.innerHTML += newLike
        console.log(newLike)
    });
}

// function
function allPostDraw(postArray) {
    const postContainer = document.getElementById('container');
    for(let i = 0; i < postArray.length; i++) {
        const thisPost = postArray[i];
        const postTemp = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${thisPost.proPic}" alt="${thisPost.userName}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${thisPost.userName}</div>
                        <div class="post-meta__time">${thisPost.date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${thisPost.text}</div>
            <div class="post__image">
                <img src=" ${thisPost.pic === null ? '' : thisPost.pic}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${thisPost.likeCount}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
        `
        postContainer.innerHTML += postTemp
    };
};