document.getElementById('card').style.setProperty('display', 'none','important')

function search(){
    document.getElementById('card').style.setProperty('display', 'block','important')
    let country = document.getElementById('country').value
    let flagI = document.getElementById('flag')
    let nameI = document.getElementById('nameI')
    let popI = document.getElementById('popI')
    let capI = document.getElementById('capI')
    let contI = document.getElementById('contI')
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data[0])
        flag = data[0].flags.svg
        name1 = data[0].name.common
        cont1 = data[0].continents[0]
        pop = data[0].population
        cap = data[0].capital[0]

        flagI.src=flag
        nameI.innerHTML = name1
        popI.innerHTML = pop
        capI.innerHTML = cap
        contI.innerHTML = cont1
    })
}