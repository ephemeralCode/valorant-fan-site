const boxAgent = document.getElementsByClassName('boxAgent');
const imgAgent = document.getElementsByClassName('imgAgent');
const agentName = document.getElementsByClassName('agentName');
const agentSpells = document.getElementsByClassName('agentSpells');

for (let i = 0; i < boxAgent.length; i++) {
    boxAgent[i].addEventListener('mouseover', () => {
        imgAgent[i].classList.add('active')
        agentName[i].classList.add('active')
        agentSpells[i].classList.add('active')
    })
}

for (let i = 0; i < boxAgent.length; i++) {
    boxAgent[i].addEventListener('mouseout', () => {
        imgAgent[i].classList.remove('active')
        agentName[i].classList.remove('active')
        agentSpells[i].classList.remove('active')
    })
}