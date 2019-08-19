//accept only numbers
function isNumberKey(evt){
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false
  return true
}

//calc
function calcCarneCarvao(men, women, kids){
  return (men * 0.4 + women * 0.32 + kids * 0.2).toFixed(2)
}

function calcCerveja(drunk){
  return (drunk * 3)
}

function calcSal(men, women, kids){
  return ((men + women + kids) * 0.03).toFixed(2)
}

function calcRefrigerante(men, women, kids, drunk){
  //2 liters per man or woman, 1 per kids, minus 1 per drunk
  return (men + women) * 2 + kids - drunk
}

function calcAgua(men, women, kids){
  return (men + women + kids) * 0.5
}

function calcGelo(men, women, kids){
  var qtdSacos = (men + women + kids) / 5
  return (Math.ceil(qtdSacos)*5)
}

function calcPaoAlho(men, women, kids){
  return (men + women + kids) * 2
}

//function call other functions and returns the result
function calc(men, women, kids, drunk){
  var result = {
    'carne': ['Carnes', calcCarneCarvao(men, women, kids) + ' Kg'],
    'cerveja': ['Cervejas', calcCerveja(drunk)],
    'sal': ['Sal Grosso', calcSal(men, women, kids) + ' g'],
    'refrigerante': ['Refrigerante', calcRefrigerante(men, women, kids, drunk) + ' L'],
    'agua': ['Água', calcAgua(men, women, kids) + ' L'],
    'carvao': ['Carvão', Math.ceil(calcCarneCarvao(men, women, kids)) + ' Kg'],
    'gelo': ['Gelo', calcGelo(men, women, kids) + ' Kg'],
    'paoAlho': ['Pão de Alho', calcPaoAlho(men, women, kids)],
  }

  //creating the result table
  var table = '<table>'

  for (const [key, value] of Object.entries(result)){
    var cssClass = key
    var title = value[0]
    var qtd = value[1]

    table += '<tr><td><span class="result-title">'+title+'</span></td><td><span class="result-qtd qtd-'+cssClass+'">'+qtd+'</span></td></tr>';
  }

  table += '</table>'

  return table;
}

//click function
document.getElementById("calc").addEventListener("click", function(event){
  event.preventDefault()

  var result = document.getElementById("result")

  var men = parseInt(document.getElementById("men").value)
  var women = parseInt(document.getElementById("women").value)
  var kids = parseInt(document.getElementById("kids").value)
  var drunk = parseInt(document.getElementById("drunk").value)

  if(drunk > (men + women)){
    alert('Erro. A quantidade de pessoas que bebem deve ser menor ou igual a soma de homens e mulheres.')
  }
  else{
    result.innerHTML = calc(men, women, kids, drunk)
  }
})
