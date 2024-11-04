const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}
function openModalVid(videoUrl) {
    const modal = document.getElementById('imageVideoModal');
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoSource = document.getElementById('modalVideoSource');
    modalImage.classList.add('hidden');
    modalVideo.classList.remove('hidden');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    modalVideoSource.src = videoUrl;
    modalVideo.load();
    modalVideo.play();
}
function openModalImg(imageUrl) {
    const modal = document.getElementById('imageVideoModal');
    const modalImage = document.getElementById('modalImage');
    const modalVideo = document.getElementById('modalVideo');
    modalImage.classList.remove('hidden');
    modalVideo.classList.add('hidden');
    // Preloading
    const img = new Image();
    img.onload = () => {
        modalImage.src = imageUrl;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
    img.src = imageUrl;
}
function closeModal() {
    const modal = document.getElementById('imageVideoModal');
    const modalVideo = document.getElementById('modalVideo');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    modalVideo.pause();
    modalVideo.currentTime = 0; 
}

function moveCards(direction) {
    const leftCard = document.getElementById('left-card');
    const middleCard = document.getElementById('middle-card');
    const rightCard = document.getElementById('right-card');
    const leftArrow = document.getElementById('left-arrow');
    const rightArrow = document.getElementById('right-arrow');
    if (direction === 'left') {
        leftArrow.disabled = true;
        rightArrow.disabled = true;
        leftCard.classList.remove('z-[2]');
        rightCard.classList.add('animate-right-middle', 'z-[2]');
        middleCard.classList.add('animate-middle-left', 'z-[2]');
        leftCard.classList.add('animate-left-right');
        setTimeout(() => {
            rightCard.classList.remove('animate-right-middle');
            middleCard.classList.remove('animate-middle-left');
            leftCard.classList.remove('animate-left-right');
            const innerHTML = leftCard.innerHTML;
            const classList = leftCard.classList.value;
            leftCard.innerHTML = middleCard.innerHTML;
            leftCard.className = middleCard.className;
            middleCard.innerHTML = rightCard.innerHTML;
            middleCard.className = rightCard.className;
            rightCard.innerHTML = innerHTML;
            rightCard.className = classList;
            middleCard.classList.add('lg:scale-125');
            leftCard.classList.remove('lg:scale-125');
            leftArrow.disabled = false;
            rightArrow.disabled = false;
        }, 500);
    }
    else if (direction === 'right') {
        leftArrow.disabled = true;
        rightArrow.disabled = true;
        rightCard.classList.remove('z-[2]');
        rightCard.classList.add('animate-right-left');
        middleCard.classList.add('animate-middle-right', 'z-[2]');
        leftCard.classList.add('animate-left-middle', 'z-[2]');
        setTimeout(() => {
            rightCard.classList.remove('animate-right-left');
            middleCard.classList.remove('animate-middle-right');
            leftCard.classList.remove('animate-left-middle');
            const innerHTML = leftCard.innerHTML;
            const classList = leftCard.classList.value;
            leftCard.innerHTML = rightCard.innerHTML;
            leftCard.className = rightCard.className;
            rightCard.innerHTML = middleCard.innerHTML;
            rightCard.className = middleCard.className;
            middleCard.innerHTML = innerHTML;
            middleCard.className = classList;
            middleCard.classList.add('lg:scale-125');
            rightCard.classList.remove('lg:scale-125');
            leftArrow.disabled = false;
            rightArrow.disabled = false;
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', initApp)