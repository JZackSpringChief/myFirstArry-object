const array = [
    {Name: 'Kyle', class: 'Druid', specialization: 'Dark Magic'},
    {Name: 'Zack', class: 'Samuria', specialization: 'Sword Magic'},
    {name: 'Daniel', class: 'Sniper', specialization: 'Sharp Shooting'},
    {name: 'Luke', class: 'Necromancer', specialization: 'Forbidden Magic'},
    {name: 'Aric', class: 'Stategist', specialization: 'Tactitian'},
]

function randomEntry(myArray){
    let randomIndex = Math.random()*myArray.length
    randomIndex = Math.floor(randomIndex)
    //console.log(randomIndex)
    

    return myArray[randomIndex]
}
console.log(randomEntry(array))