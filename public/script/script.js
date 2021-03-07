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
    url.value = ""
    fetchURL(link)
})