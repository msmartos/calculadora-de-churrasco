# Calculadora para churrasco
Projeto simples que sugere o que comprar para um churrasco, realizando os cálculos baseado no número de pessoas informado.

## Utilização:
Abrir o index.html no navegador, informar a quantidade de pessoas e clicar em calcular.

## Calculando os ítens
O arquivo responsável pela realização dos cálculos é o js/script.js. Nele podem ser ponderadas as influências que a quantidade de pessoas exercerá sobre os ítens a serem comprados. Por padrão, o cálculo dos ítens da lista são feitos seguindo as seguintes regras:

### Carnes
Homens: 400g
Mulheres: 320g
Crianças: 200g

### Cervejas
Pessoas que bebem: 3 cervejas

### Sal Grosso
0.03g por pessoa (independente se é H, M ou C)

### Refrigerante
Homens e Mulheres: 2L
Crianças: 1L

### Água
0.5L por pessoa (independente se é H, M ou C)

### Carvão
Homens: 400g
Mulheres: 320g
Crianças: 200g
Mesmo cálculo da carne, arredondando para o número inteiro acima

### Gelo
5Kg a cada 5 pessoas (independente se é H, M ou C)
Exemplos:
 - de 1 a 5 pessoas: 5Kg
 - de 6 a 10 pessoas: 10Kg
 - de 21 a 25 pessoas: 25Kg

### Pão de Alho
2 por pessoa (independente se é H, M ou C)
