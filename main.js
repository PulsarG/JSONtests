fetch(
    'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
)
    .then((res) => res.json())
    .then(data => setSolo(data));



/* function setHeroes({ squadName, homeTown, formed, members }) {
    document.body.insertAdjacentHTML('afterbegin',
        `
        <h1>${squadName}</h1>
        <h2>${homeTown}//${formed}</h2>
        <div class="heroes">${setMembers(members)}</div>
        `
    );
} */

function setMembers(members) {
    return members
    .map(
        (hero) => `<div>
        <h3>${hero.name}</h3>
<p>${hero.age}</p>
<p>${hero.secretIdentity}</p>
<ul>
${hero.powers.map((power) => `
<li>${power}</li>
`).join(' ')}
</ul>
</div>`).join(' ');
}

function setSolo({ squadName, homeTown, formed, members }) {
    document.getElementById("zztop").insertAdjacentHTML('afterbegin',
        `
        <h1>${squadName}</h1>
        <h2>${homeTown}//${formed}</h2>
        <div class="heroes">${setMembers(members)}</div>
        `
    );
}