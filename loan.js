function calc_loan(){

    var original_balance =  document.getElementById("or_b").value;
    var monthly_interest =  document.getElementById("mon_in").value;
    var payments_completed = document.getElementById("comp").value;
    var payment = document.getElementById("mon_pay").value;
    var montly_over_hund = monthly_interest / 100;

    var first = parseInt(original_balance*(1+ montly_over_hund)**payments_completed)
    var second = parseInt(payment / montly_over_hund * ((1 + montly_over_hund)**payments_completed - 1))
    var loan_remaining = (first - second).toFixed(0)

    if (loan_remaining < 5){
        loan_remaining = 0
    }

    document.getElementById("answer").innerHTML = "$" + loan_remaining;

    if (original_balance.length == 0 || monthly_interest.length == 0 || payments_completed.length == 0 || payment.length ==0){
        document.getElementById("answer").innerHTML = "Fill out all the Fields";
    }
}

function orig_bal(){
    alert("What was the orginal balance of the loan that you are trying to pay off. Enter the loan balance when zero payments were made.")
}

function mon_int(){
    alert("Enter in the monthly interest rate of your loan. Normally lenders will provide you with your annual interest rate which usually fluctuates around 3-4%. You, however, have to enter the monthly interest rate. Divide the annual interest rate by 12 and enter it here.")
}

function mont_pay(){
    alert("How much are you paying monthly for the loan. Enter in your monthly payment here. If you don't know your monthly paymen, check it out here: https://realoest.netlify.app/mor_pay.html")
}

function num_of_pay(){
    alert("Enter in the number of payments you have already made. Enter the amount in months.")
}