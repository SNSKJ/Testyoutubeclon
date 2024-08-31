document.addEventListener("DOMContentLoaded", function () {
    const videoContainer = document.getElementById('video-container');

    const videos = [
        { id: 'PW1exlnbh3s', title: 'Murder Drones Alternate Universe' },
        { id: 'caR9ouipm8o', title: 'ДРОНЫ-УБИЙЦЫ 8 СЕРИЯ: Абсолютный Конец' },
        { id: 'EOqw86OGIB0&t', title: 'ДРОНЫ-УБИЙЦЫ - Серия 7: Судный День' }
        { id: 'a9bZ21muRf0', title: '😱 Майнкрафт, но Мы Попали В ГЕНШИН [Сюжет: Мультиплеер] + Фиксплей' }
    ];

    videos.forEach(video => {
        // Создание элементов
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${video.id}`;
        iframe.frameBorder = "0";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        const title = document.createElement('div');
        title.classList.add('title');
        title.innerText = video.title;

        const likesDislikes = document.createElement('div');
        likesDislikes.classList.add('likes-dislikes');

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-button');
        likeButton.innerHTML = '👍 <span class="like-count">0</span>';

        const dislikeButton = document.createElement('button');
        dislikeButton.classList.add('dislike-button');
        dislikeButton.innerHTML = '👎 <span class="dislike-count">0</span>';

        // Локальные переменные для счёта лайков и дизлайков
        let likeCount = 0;
        let dislikeCount = 0;

        // Обработчики событий для кнопок
        likeButton.addEventListener('click', () => {
            likeCount++;
            likeButton.querySelector('.like-count').innerText = likeCount;
        });

        dislikeButton.addEventListener('click', () => {
            dislikeCount++;
            dislikeButton.querySelector('.dislike-count').innerText = dislikeCount;
        });

        // Добавление элементов в DOM
        likesDislikes.appendChild(likeButton);
        likesDislikes.appendChild(dislikeButton);

        videoItem.appendChild(iframe);
        videoItem.appendChild(title);
        videoItem.appendChild(likesDislikes);
        videoContainer.appendChild(videoItem);
    });
});
