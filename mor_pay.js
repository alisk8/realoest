function calc_mor(){

    var principal =  document.getElementById("principal").value;
    var ann_interest =  document.getElementById("an_in").value;
    var term_y = document.getElementById("y_term").value;
    
    var term_m = term_y * 12;
    var monthly_interest = ann_interest / 12;
    var interest_for_eq = monthly_interest / 100;

    var payments = principal*((interest_for_eq*(1+interest_for_eq)**term_m) / ((1+interest_for_eq)**term_m-1))
    var payment = payments.toFixed(2)

    document.getElementById("answer").innerHTML = "$" + payment;

    if (principal.length == 0 || ann_interest.length == 0 || term_y.length == 0){
        document.getElementById("answer").innerHTML = "Fill out all the Fields";
    }
}

function loan_am(){
    alert("Enter in the principal amount of your loan. Make sure that down payment is not included because that is not a part of the loan")
}

function an_inn(){
    alert("Enter in the annual interest rate of your loan. If you have your monthly interest rate then multiply it by 12 to make it the annual interest rate")
}

function loa_term(){
    alert("Enter in the number of years you have to pay your loan. If you have your months, divide it by 12 and enter it here.")
}