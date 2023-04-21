let btn = document.querySelector('.text button')
let main = document.querySelector('main')
let text = " just wanted to tell you Eid Fiter Mubarak. I will never forget to tell you this again😢. I hope you love this gift. You will be my wife oneday so please always remember that I love you more than anyone can do. Please, always forgive me when I do anything wrong. In the near future, We will get married and make our own family. I love you🙈💙💜💙💜, but I hate Mostafa and Ziad 😡😡. Last Thing, Do you accept to be my wife 💍? My Sweet Heart Yasmine Mohsen😘❤😘❤💋. From your Lover, Omar Marey✌"
let elText = document.createElement('p')
let txt = document.createElement('div')
let i = 0;

txt.append(elText)
txt.classList.add('text')
elText.classList.add('mineText')
elText.textContent = 'I'
btn.onclick = () => {
    main.children[0].remove()
    main.prepend(txt)
    setTimeout(() => {
        addingCharacters()
    }, 1000)
}
function addingCharacters() {
    let add = setInterval(() => {
        if (i < text.length) {
            elText.textContent += text[i];
            i++;
        } else {
            clearInterval(add)
        }
    }, 100)
}