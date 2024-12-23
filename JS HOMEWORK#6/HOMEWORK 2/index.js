
function homework(){
    
    
    let numberList = document.getElementById('list');
    let sumDisplay = document.getElementById('sum');
    let equationDisplay = document.getElementById('math');

    let numbers = [3,5,7,9];
    numberList.innerHTML = `<li>${numbers[0]}</li>, <li>${numbers[1]}</li>, <li>${numbers[2]}</li>, <li>${numbers[3]}</li>`

    let sum = 0;
       for (let i=0; i<numbers.length; i++){
            sum +=numbers[i]
        }
    sumDisplay.innerText = "The sum of the Numbers of the array:"+" "+sum;
    
    equationDisplay.innerText=`${numbers[0]}+${numbers[1]}+${numbers[2]}+${numbers[3]}= ${sum}`

}
homework()

