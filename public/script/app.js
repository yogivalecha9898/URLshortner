const form = document.querySelector('form')
const url = document.querySelector('#url')
const link1 = document.querySelector('#link1')
const link2 = document.querySelector('#link2')
const link3 = document.querySelector('#link3')

const fetchURL = (link)=>{
    fetch('/url?url='+link).then((res)=>{
        res.json().then((data)=>{
            if(data.error){
                link1.textContent = data.error
                link2.textContent = ""
                link3.textContent = ''
            }
            else{
                link1.textContent = data.link1
                link2.textContent = data.link2
                link3.textContent = data.link3
            }
        })
    })
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const link = url.value
    console.log(link)
    url.value = ""
    fetchURL(link)
})

const gayab = ()=> {
    const dis = document.querySelector('.attribution')
    const cen = document.querySelector('.central')

    cen.classList.add('vanish')
    setTimeout(() => {
        cen.style.display = "none"
        dis.style.zIndex = "-1"
    }, 3000);


    const ham = document.querySelector('.ham')
    const list = document.querySelector('.navbar-ham .list_2')

    ham.addEventListener('click', (e)=> {
        console.log(e.target)
        ham.classList.toggle('down')
        list.classList.toggle('back')
    })
}

