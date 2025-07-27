 let calculation = localStorage.getItem('calculation') || ' ';



        function updateCalculation(value){
            calculation+=value;
            console.log(calculation);
            displayCalculation();
            localStorage.setItem('calculation',calculation);
        }

        function displayCalculation(){
            document.querySelector('.js-calculation')
            .innerHTML=calculation;
        }
