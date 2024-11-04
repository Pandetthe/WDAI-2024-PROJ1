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
function openModal(imageUrl) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
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
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function moveCards(direction) {
    const leftCard = document.getElementById('left-card');
    const middleCard = document.getElementById('middle-card');
    const rightCard = document.getElementById('right-card');
    if (direction === 'left') {
        leftCard.classList.remove('z-[2]');
        rightCard.classList.add('animate-right-middle', 'z-[2]');
        middleCard.classList.add('animate-middle-left', 'z-[2]');
        leftCard.classList.add('animate-left-right');
        setTimeout(() => {
            rightCard.classList.remove('animate-right-middle');
            middleCard.classList.remove('animate-middle-left');
            leftCard.classList.remove('animate-left-right');
            let innerHTML = leftCard.innerHTML;
            let classList = leftCard.classList.value;
            leftCard.innerHTML = middleCard.innerHTML;
            leftCard.className = middleCard.className;
            middleCard.innerHTML = rightCard.innerHTML;
            middleCard.className = rightCard.className;
            rightCard.innerHTML = innerHTML;
            rightCard.className = classList;
            middleCard.classList.add('scale-125');
            leftCard.classList.remove('scale-125');
        }, 500);
    }
    else if (direction === 'right') {
        rightCard.classList.remove('z-[2]');
        rightCard.classList.add('animate-right-left');
        middleCard.classList.add('animate-middle-right', 'z-[2]');
        leftCard.classList.add('animate-left-middle', 'z-[2]');
        setTimeout(() => {
            rightCard.classList.remove('animate-right-left');
            middleCard.classList.remove('animate-middle-right');
            leftCard.classList.remove('animate-left-middle');
            let innerHTML = leftCard.innerHTML;
            let classList = leftCard.classList.value;
            leftCard.innerHTML = rightCard.innerHTML;
            leftCard.className = rightCard.className;
            rightCard.innerHTML = middleCard.innerHTML;
            rightCard.className = middleCard.className;
            middleCard.innerHTML = innerHTML;
            middleCard.className = classList;
            middleCard.classList.add('scale-125');
            rightCard.classList.remove('scale-125');
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', initApp)