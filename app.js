const gayab = ()=> {
    const dis = document.querySelector('.attribution')
    const cen = document.querySelector('.central')

    cen.classList.add('vanish')
    setTimeout(() => {
        cen.style.display = "none"
        dis.style.zIndex = "-1"
    }, 3000);
}

