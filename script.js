var listContent = document.querySelector('#listContent')
var actionButton = document.querySelector('#actionButton')
var list = document.querySelector('#list')

actionButton.addEventListener('click',()=>{
    if(listContent.value === ''){
        alert('Enter your task !!!')
        return
    }

    let newItem = document.createElement("li")

    let newIcon = document.createElement("i")
    let newParagraph = document.createElement("p")
    let newButton = document.createElement("button")

    newIcon.classList.add("fa-regular")
    newIcon.classList.add("fa-square")
    newIcon.setAttribute("title","Mark Done")

    newParagraph.innerHTML = listContent.value

    newButton.setAttribute("title","Remove from list")
    newButton.innerHTML = "<i class='fa-solid fa-trash-can'></i>"

    newItem.append(newIcon)
    newItem.append(newParagraph)
    newItem.append(newButton)

    newIcon.addEventListener('click',()=>{
        if(newIcon.classList.contains('fa-square')){
            newIcon.classList.remove("fa-regular")
            newIcon.classList.remove("fa-square")
            newIcon.classList.add('fa-solid')
            newIcon.classList.add('fa-square-check')
            newItem.classList.add('done')
        }else{
            newIcon.classList.remove('fa-solid')
            newIcon.classList.remove('fa-square-check')
            newIcon.classList.add("fa-regular")
            newIcon.classList.add("fa-square")
            newItem.classList.remove('done')
        }
    })

    newButton.addEventListener('click',()=>{
        newItem.remove()
    })

    list.append(newItem)
    listContent.value=''
})