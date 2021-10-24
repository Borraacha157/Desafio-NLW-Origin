
const linksSocialMedia = {
    github: "Borraacha157",
    youtube: "Games EduUu",
    facebook: "Gustavo Pupo",
    instagram: "Gustav0_pupo",
    twitter: "B0rr4cha",
}
/*function changeSocialMedialLinks() {
    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${LinksSocialMedia.[social]}`
        
        alert(li.children[0].href)
    }

}
    changeSocialMedialLinks()
*/

function getGitHubProfileInfos(){
    const url= `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        nome.textContent = data.name
        minhaBio.textContent = data.bio
    })
}

getGitHubProfileInfos()