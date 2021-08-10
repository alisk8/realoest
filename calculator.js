var paid_loan = false;
var income = 0
var did_rehab = false;
var monthly_cash_flow = 0;
total_money_invested = 0;
var payment = 0;
var feeses_calculated = 0;
var down_in_dollars = 0;
var principal = 0;
var interest_rate_for_loan = 0;
var loan_years_term = 0;
var monthly_interst_rate_per = 0;
var full_expenses = 0;
var cash_on_cash = 0;
var cap_rate = 0;
var noi_with_cap = 0;
var noi_without_cap = 0;
var pro_forma = 0;
var propval_after_one = 0
var propval_after_five = 0
var propval_after_ten = 0
var propval_after_fifteen = 0 
var propval_after_thirty = 0
var loan_after_year_one = 0;
var loan_after_year_five = 0;
var loan_after_year_ten = 0;
var loan_after_year_fif = 0;
var loan_after_year_th = 0;
var eq_af_one = 0;
var eq_af_five = 0;
var eq_af_ten = 0;
var eq_af_fif = 0;
var eq_af_thi = 0;

function show_loan_info(){
    document.getElementById("loan_info").style.display = "grid";
    document.getElementById("loan_but").style.display = "none";
    document.getElementById("hide_loan_info").style.display = "block";
    paid_loan = true;
    document.getElementById('report').style.display = "none";
}

function hide_loan_infos(){
    document.getElementById("loan_info").style.display = "none";
    document.getElementById("loan_but").style.display = "block";
    document.getElementById("hide_loan_info").style.display = "none";
    paid_loan = false;
    document.getElementById('report').style.display = "none";
}

function show_repair(){
    document.getElementById("rep_info").style.display = "grid";
    document.getElementById("no_repair").style.display = "block";
    document.getElementById("yes_repair").style.display = "none";
    did_rehab = true;
    document.getElementById('report').style.display = "none";
}

function hide_repair(){
    document.getElementById("rep_info").style.display = "none";
    document.getElementById("no_repair").style.display = "none";
    document.getElementById("yes_repair").style.display = "block";
    did_rehab = false;
    document.getElementById('report').style.display = "none";
}

function add_income(){
    // ask for income source
    sourc = prompt("Add the source of your income");
    if (sourc === null){
        return;
    }
    else{
        // create a new div 
    let newDiv = document.createElement("div");
    // give it class lab_inp
    newDiv.classList.add("lab_inp");
    // create a label 
    let label = document.createElement("label");
    // add the styling class
    label.classList.add("label");
    label.classList.add("required");
    // create textode for what user said 
    what_label_should_say = document.createTextNode(sourc);
    // make the label say what we took in as an input  
    label.appendChild(what_label_should_say);
    // add label to the newly created div
    newDiv.appendChild(label);
    // make a new input field
    new_input = document.createElement("input");
    // add class to input field 
    new_input.classList.add("hundpix");
    // new input to number type
    new_input.type = "number";
    new_input.value = 0;
    // add input field to new div
    newDiv.appendChild(new_input);

    // after making the div, add the div to the real body of text
    currentDiv = document.getElementById("incomes");
    currentDiv.appendChild(newDiv);

    document.getElementById('report').style.display = "none";

    }
}

function add_new_expense(){
    // ask for expense source
    sour = prompt("Add the source of your expense");
    if (sour === null){
        return;
    }
    else{
        // create a new div 
    let newDiv = document.createElement("div");
    // give it class lab_inp
    newDiv.classList.add("lab_inp");
    // create a label 
    let label = document.createElement("label");
    // add the styling class
    label.classList.add("label");
    label.classList.add("required");
    // create textode for what user said 
    what_label_should_say = document.createTextNode(sour);
    // make the label say what we took in as an input  
    label.appendChild(what_label_should_say);
    // add label to the newly created div
    newDiv.appendChild(label);
    // make a new input field
    new_input = document.createElement("input");
    // add class to input field 
    new_input.classList.add("hundpix");
    // new input to number type
    new_input.type = "number";
    new_input.value = 0
    // add input field to new div
    newDiv.appendChild(new_input);

    // after making the div, add the div to the real body of text
    currentDiv = document.getElementById("added_expenses");
    currentDiv.appendChild(newDiv);

    document.getElementById('report').style.display = "none";

    }
    
}

function add_fees(){
    // ask for expense source
    sou = prompt("Add the source of your fees");
    if (sou === null){
        return;
    }
    else{
        // create a new div 
    let newDiv = document.createElement("div");
    // give it class lab_inp
    newDiv.classList.add("lab_inp");
    // create a label 
    let label = document.createElement("label");
    // add the styling class
    label.classList.add("label");
    label.classList.add("required");
    label.classList.add("check_req")
    // create textode for what user said 
    what_label_should_say = document.createTextNode(sou);
    // make the label say what we took in as an input  
    label.appendChild(what_label_should_say);
    // add label to the newly created div
    newDiv.appendChild(label);
    // make a new input field
    new_input = document.createElement("input");
    // add class to input field 
    new_input.classList.add("hundpix");
    // new input to number type
    new_input.type = "number";
    new_input.value = 0
    // add input field to new div
    newDiv.appendChild(new_input);

    // after making the div, add the div to the real body of text
    currentDiv = document.getElementById("feeses");
    currentDiv.appendChild(newDiv);

    document.getElementById('report').style.display = "none";

    }
}

var loadFile = function(event) {
	var image = document.getElementById('output');
    image.style.display = "block"
    var rep_image = document.getElementById("rep_img");
    rep_image.src = URL.createObjectURL(event.target.files[0]);    
	image.src = URL.createObjectURL(event.target.files[0]);
    document.getElementById("pic_lab").style.display = "none";
};

window.smoothScroll = function(target) {

    if (document.getElementById("rep_name_inp").value == "" || document.getElementById("st_name_inp").value == "" || document.getElementById("city_inp").value == "" || document.getElementById("state_inp").value == "" || document.getElementById("zip_inp").value == "" || document.getElementById("country").value == "" || document.getElementById("price").value == "" || document.getElementById("closing_costs").value == "" || document.getElementById("rent").value == "" || document.getElementById("insurance").value == "" || document.getElementById("prop_tax").value == "" || document.getElementById("HOA").value == "" || document.getElementById("vacancy").value == "" || document.getElementById("repairs").value == "" || document.getElementById("cap_repairs").value == "" || document.getElementById("prop_man").value == "" || document.getElementById("prop_grow").value == ""){
        alert("Please Fill Out all Fields to continue")
        return false;
    }

    if (paid_loan == true){
        if (document.getElementById("down_payment").value == "" || document.getElementById("interest").value == "" || document.getElementById("loan_len").value == "" || document.getElementById("loan_points").value == ""){
            alert("Please Fill Out all Fields to continue, Check out the Loan Information section specifically.")
            return false;
        }
    }

    if(did_rehab == true){
        if(document.getElementById("arv").value == "" || document.getElementById("rehab").value == "" ){
            alert("Please Fill Out all Fields to continue, Check out the Rehab Information section specifically.")
            return false;
        }
    }
        // running Numbers Part

        //  getting the report name and address and first section 
        var rep_name = document.getElementById("rep_name_inp").value;
        var st_name = document.getElementById("st_name_inp").value;
        var city = document.getElementById("city_inp").value;
        var state = document.getElementById("state_inp").value;    
        var zip = document.getElementById("zip_inp").value;    
        
        // setting first section 
        document.getElementById("add_and_first_sec").innerHTML = rep_name + ": " + st_name + ", " + city + ", " + state + ", " + zip;

        // monthly income
        var values = $("#incomes input").map(function() {
            return $(this).val()
        }).get().join(",");

        income = values.split(",").reduce(function(prev, curr){
            return parseInt(prev,10) + parseInt(curr,10);
        });
        
        // setting income 
        document.getElementById("mon_inc").innerHTML = "$" + income;

        // CHECK OUT FOR NEW WORK if loan_paid is false, that means person paid pully in cash and has no mortgage payment or anything, the cashflow will include no expense known as mortgage.
        
        // calculating expenses 

        // first block 
        var values_for_exp = $("#first_expenses_block input").map(function() {
            return $(this).val()
        }).get().join(","); 

        var expenses_first = values_for_exp.split(",").reduce(function(prev, curr){
            return parseInt(prev,10) + parseInt(curr,10);
        });

        var ins_exp = document.getElementById("insurance").value;
        var tax_exp = document.getElementById("prop_tax").value;
        var hoa = document.getElementById("HOA").value;

        document.getElementById("ins_dis").innerHTML = "$" + ins_exp;
        document.getElementById("property_tax_dis").innerHTML = "$" + tax_exp;
        document.getElementById("hoa_fees_dis").innerHTML = "$" + hoa;

        // second block

        var vacancy_perc = document.getElementById("vacancy").value;
        var rep_main_perc = document.getElementById("repairs").value;
        var cap_fees_perc = document.getElementById("cap_repairs").value;
        var prop_man_perc = document.getElementById("prop_man").value;

        // get values from expenses 

        var vacancy_doll = parseInt((income * vacancy_perc / 100).toFixed(0))
        var rep_main_doll = parseInt((income * rep_main_perc / 100).toFixed(0))
        var cap_fees_doll = parseInt((income * cap_fees_perc / 100).toFixed(0))
        var prop_man_doll = parseInt((income * prop_man_perc / 100).toFixed(0))

        document.getElementById("vacancy_exp_dis").innerHTML = vacancy_perc + "%: $" + vacancy_doll
        document.getElementById("main_rep_dis").innerHTML = rep_main_perc + "%: $" + rep_main_doll
        document.getElementById("capital_expen_dis").innerHTML = cap_fees_perc + "%: $" + cap_fees_doll
        document.getElementById("property_man_dis").innerHTML = prop_man_perc + "%: $" + prop_man_doll

        var expenses_second = 0 
        var expenses_second = vacancy_doll + rep_main_doll + cap_fees_doll + prop_man_doll;

        // third block 
        var values_for_exp_added = $("#added_expenses input").map(function() {
            return $(this).val()
        }).get().join(","); 

        var expenses_third = 0
        expenses_third = values_for_exp_added.split(",").reduce(function(prev, curr){
            return parseInt(prev,10) + parseInt(curr,10);
        });
        

        if (Number.isNaN(parseInt(expenses_third)) === true){
            expenses_third = 0
        }

        var expenses_second_in_int = parseInt(expenses_second)
        var expenses_first_in_int = parseInt(expenses_first)
        var expenses_third_in_int = parseInt(expenses_third)
        document.getElementById("others_expen_dis").innerHTML = "$" + expenses_third_in_int;
        full_expenses = expenses_first_in_int + expenses_second_in_int + expenses_third_in_int;

        var values_for_fees = $("#feeses input").map(function() {
            return $(this).val()
        }).get().join(","); 

        feeses_calculated = values_for_fees.split(",").reduce(function(prev, curr){
            return parseInt(prev,10) + parseInt(curr,10);
        });

        var total_money_invested = values_for_fees.split(",").reduce(function(prev, curr){
            return parseInt(prev,10) + parseInt(curr,10);
        });


        if (paid_loan === true){
                // loan is paid
                // calculating the mortgage payment

            // the eq is payment = principal*((interest*(1+interest)**n) / ((1+interest)**n-1))
            // n > loan term n months
            // principal is the amount of loan after the down payment, so purchase price - down payment 
            // intrerst is in months so annual /12 and then divide by 100 cuz its percentage

            // get the things needed
            loan_years_term = document.getElementById("loan_len").value
            interest_rate_for_loan = document.getElementById("interest").value
            purchase_price_for_loan = document.getElementById("price").value
            down_payment_per_for_loan = document.getElementById("down_payment").value

            // convert loan years to months 
            loan_months = loan_years_term * 12;

            // convert interest rate to month
            monthly_interst_rate_per = interest_rate_for_loan / 12;
            // convert from percentage by diving by hundred
            interest_for_eq = monthly_interst_rate_per / 100;

            // find the principal 
            down_in_dollars = purchase_price_for_loan * down_payment_per_for_loan / 100;
            principal = purchase_price_for_loan - down_in_dollars;

            payments = principal*((interest_for_eq*(1+interest_for_eq)**loan_months) / ((1+interest_for_eq)**loan_months-1))

            payment = payments.toFixed(2);

            document.getElementById("month_mor_pay").innerHTML = "$" + payment;
            document.getElementById("mort_exp_dis").innerHTML = "$" + payment;
            document.getElementById("mort_princ_dis").innerHTML = "$" + principal;
            document.getElementById("down_pay_dis").innerHTML = down_payment_per_for_loan + "%: $" + down_in_dollars;
            document.getElementById("ann_inte").innerHTML = interest_rate_for_loan + "%";
            document.getElementById("monthly_inte").innerHTML = monthly_interst_rate_per.toFixed(2) + "%";

            // full expenses in int 
            full_expenses_int = parseInt(full_expenses)
            payment_int = parseInt(payment)
            full_expenses = full_expenses_int + payment_int;

            var total_money_invested_bef_down = parseInt(total_money_invested);
            var down_in_dollars_int = parseInt(down_in_dollars)
            total_money_invested = total_money_invested_bef_down + down_in_dollars_int;

            // check for loan points
            loan_points = document.getElementById("loan_points").value;
            if(loan_points.length == 0){
                console.log("No loan points")
            }

            else{
                loan_points_in_dollars = parseInt((principal * loan_points / 100).toFixed(0))
                var total_money_invested_bef_loan_points = parseInt(total_money_invested);
                total_money_invested = total_money_invested_bef_loan_points + loan_points_in_dollars
            }

            // calculate loan paid after years eq: 
            // first_part = (original_balance*(1+(montly_rate/100))**number_of_payments)
            // second part = payment/monthly_rate/100*((1+(rate/100))**number_of_payments - 1)

            var num_of_pay_aft_yr_one = 12;
            var num_of_pay_aft_yr_five = 12 * 5;
            var num_of_pay_aft_yr_ten = 12 * 10;
            var num_of_pay_aft_yr_fif = 12 * 15;
            var num_of_pay_aft_yr_thirty = 12 * 30;
            var montly_over_hund = interest_for_eq
            var original_balance = principal

            // after year one
            var first_for_one = original_balance*(1+ montly_over_hund)**num_of_pay_aft_yr_one
            var second_for_one = payment / montly_over_hund * ((1 + montly_over_hund)**num_of_pay_aft_yr_one - 1)
            loan_after_year_one = (first_for_one - second_for_one).toFixed(0)
            if (loan_after_year_one < 5){
                loan_after_year_one = 0
                document.getElementById("af_year_one").innerHTML = "$" + 0;
            }
            else{
                document.getElementById("af_year_one").innerHTML = "$" + loan_after_year_one;
            }

            // after year five
            var first_for_five = original_balance*(1+ montly_over_hund)**num_of_pay_aft_yr_five
            var second_for_five = payment / montly_over_hund * ((1 + montly_over_hund)**num_of_pay_aft_yr_five - 1)
            loan_after_year_five = (first_for_five - second_for_five).toFixed(0)
            if (loan_after_year_five < 5){
                loan_after_year_five = 0
                document.getElementById("af_year_five").innerHTML = "$" + 0;
            }
            else{
                document.getElementById("af_year_five").innerHTML = "$" + loan_after_year_five;
            }

            // after year ten
            var first_for_ten = original_balance*(1+ montly_over_hund)**num_of_pay_aft_yr_ten
            var second_for_ten = payment / montly_over_hund * ((1 + montly_over_hund)**num_of_pay_aft_yr_ten - 1)
            loan_after_year_ten = (first_for_ten - second_for_ten).toFixed(0)
            if (loan_after_year_ten < 5){
                loan_after_year_ten = 0
                document.getElementById("af_year_ten").innerHTML = "$" + 0;
            }
            else{
                document.getElementById("af_year_ten").innerHTML = "$" + loan_after_year_ten;
            }
        
            // after year fifteen
            var first_for_fif = original_balance*(1+ montly_over_hund)**num_of_pay_aft_yr_fif
            var second_for_fif = payment / montly_over_hund * ((1 + montly_over_hund)**num_of_pay_aft_yr_fif - 1)
            loan_after_year_fif = (first_for_fif - second_for_fif).toFixed(0)
            if(loan_after_year_fif < 5){
                loan_after_year_fif = 0
                document.getElementById("af_year_fifteen").innerHTML = "$" + 0;
            }
            else{
                document.getElementById("af_year_fifteen").innerHTML = "$" + loan_after_year_fif;
            }

            // after year thirty
            var first_for_th = original_balance*(1+ montly_over_hund)**num_of_pay_aft_yr_thirty
            var second_for_th = payment / montly_over_hund * ((1 + montly_over_hund)**num_of_pay_aft_yr_thirty - 1)
            loan_after_year_th = (first_for_th - second_for_th).toFixed(0)
            if(loan_after_year_th < 5){
                loan_after_year_th = 0
                document.getElementById("af_year_thirty").innerHTML = "$" + 0;
            }
            else{
                document.getElementById("af_year_thirty").innerHTML = "$" + loan_after_year_th;
            }

        } 

        else{
            document.getElementById("month_mor_pay").innerHTML = "No Mortgage Payment";
            document.getElementById("mort_princ_dis").innerHTML = "No Mortgage";
            document.getElementById("down_pay_dis").innerHTML = "No Mortgage";
            document.getElementById("ann_inte").innerHTML = "No Mortgage";
            document.getElementById("monthly_inte").innerHTML = "No Mortgage";

            document.getElementById("mort_exp_dis").innerHTML = "$" + 0;

            var total_money_invested_bef_purchase_price = parseInt(total_money_invested);
            purchase_price_for_loan = document.getElementById("price").value;
            var purchase_for_coc = parseInt(purchase_price_for_loan);

            total_money_invested = total_money_invested_bef_purchase_price + purchase_for_coc;

            loan_after_year_one = 0;
            loan_after_year_five = 0;
            loan_after_year_fif = 0;
            loan_after_year_ten = 0;
            loan_after_year_th = 0;

            document.getElementById("af_year_one").innerHTML = "$" + 0;
            document.getElementById("af_year_five").innerHTML = "$" + 0;
            document.getElementById("af_year_ten").innerHTML = "$" + 0;
            document.getElementById("af_year_fifteen").innerHTML = "$" + 0;
            document.getElementById("af_year_thirty").innerHTML = "$" + 0;
        }

        document.getElementById("month_exp").innerHTML = "$" + full_expenses;
        document.getElementById("grand_total_exp").innerHTML = "Monthly Expenses Breakdown: $" + full_expenses;

        // calculating cash flow 

        monthly_cash_flow = income - full_expenses
        document.getElementById("cash_flow").innerHTML = "$" + monthly_cash_flow;

        // calculating the NOI with Cap ex
        var pay_int_for_noi = parseInt(payment);
        var cash_int_for_noi = parseInt(monthly_cash_flow);    
        noi_with_cap = (pay_int_for_noi + cash_int_for_noi) * 12;
        document.getElementById("net_oi_with_cap").innerHTML = "$" + noi_with_cap;

        // calculate the NOI without Cap ex
        var cap_ex_for_noi = parseInt(cap_fees_doll);
        noi_without_cap = (cash_int_for_noi + pay_int_for_noi + cap_ex_for_noi) *12
        document.getElementById("net_oi_without_cap").innerHTML = "$" + noi_without_cap;

        // hide_to_reset_graph
        document.getElementById("container").style.display = "none"
        document.getElementById("container").innerHTML = " "
        document.getElementById("mak_grap").style.display = "block"

        // income graph 
        document.getElementById("make_inc_but").style.display = "block"
        document.getElementById("income_break_graph").style.display = "none"
        document.getElementById("income_break_graph").innerHTML = " "

        // expense Graph
        document.getElementById("make_exp_but").style.display = "block"
        document.getElementById("expense_break_graph").style.display = "none"
        document.getElementById("expense_break_graph").innerHTML = " "

        var closing_cost = document.getElementById("closing_costs").value;
        document.getElementById("closing_cost_dis").innerHTML = "$" + closing_cost; 

        // check if you rehabbed 

        if (did_rehab === true){
            var rehab_cost = document.getElementById("rehab").value;
            rehab_costs = parseInt(rehab_cost);
            total_money_invested_bef_rehab = parseInt(total_money_invested)
            total_money_invested = rehab_costs + total_money_invested_bef_rehab;

            document.getElementById("rehab_costs_dis").innerHTML = "$" + rehab_costs;

            // Calculate the Pro Forma Cap Rate 
            // get the ARV 
            var arv = parseInt(document.getElementById("arv").value);
            document.getElementById("home_val_dis").innerHTML = "$" + arv
            var noi_with_cap_for_pro_cap = parseInt(noi_with_cap);

            pro_forma = ((noi_with_cap_for_pro_cap / arv) * 100).toFixed(2)
            document.getElementById("pro_cap_shown").innerHTML = pro_forma + "%"

            // equity after rehab 
            var pp_for_eq = document.getElementById("price").value;
            var eq = arv - pp_for_eq;
            document.getElementById("equity_after_rehab_dis").innerHTML = "$" + eq

            // property value growth 
            // get the growth rate
            var growth_rate = parseInt(document.getElementById("prop_grow").value);
            // P(i) * (1 + rate/100)^year
            var growth_rate_dec = growth_rate / 100 

            // first year 
            propval_after_one = (arv * (1 + growth_rate_dec)).toFixed(0)
            document.getElementById("prop_val_year_one").innerHTML = "$" + propval_after_one; 

            // fifth year 
            propval_after_five = (arv * (1 + growth_rate_dec) ** 5).toFixed(0)
            document.getElementById("prop_val_year_five").innerHTML = "$" + propval_after_five; 

            // year ten 
            propval_after_ten = (arv * (1 + growth_rate_dec) ** 10).toFixed(0)
            document.getElementById("prop_val_year_ten").innerHTML = "$" + propval_after_ten; 

            // year fifteen 
            propval_after_fifteen = (arv * (1 + growth_rate_dec) ** 15).toFixed(0)
            document.getElementById("prop_val_year_fifteen").innerHTML = "$" + propval_after_fifteen; 

            // year thirty
            propval_after_thirty = (arv * (1 + growth_rate_dec) ** 30).toFixed(0)
            document.getElementById("prop_val_year_thirty").innerHTML = "$" + propval_after_thirty;

        }   
        else{
            document.getElementById("rehab_costs_dis").innerHTML = "No Upfront Rehab Costs";
            document.getElementById("pro_cap_shown").innerHTML = "No Rehab";
            document.getElementById("home_val_dis").innerHTML = "No Rehab"
            document.getElementById("equity_after_rehab_dis").innerHTML = "No Rehab"

            // property value growth 
            // get the growth rate
            var growth_rate = parseInt(document.getElementById("prop_grow").value);
            // P(i) * (1 + rate/100)^year
            var growth_rate_dec = growth_rate / 100 

            var pp_for_growth = parseInt(document.getElementById("price").value)
            // first year 
            propval_after_one = (pp_for_growth * (1 + growth_rate_dec)).toFixed(0)
            document.getElementById("prop_val_year_one").innerHTML = "$" + propval_after_one; 

            // fifth year 
            propval_after_five = (pp_for_growth * (1 + growth_rate_dec) ** 5).toFixed(0)
            document.getElementById("prop_val_year_five").innerHTML = "$" + propval_after_five; 

            // year ten 
            propval_after_ten = (pp_for_growth * (1 + growth_rate_dec) ** 10).toFixed(0)
            document.getElementById("prop_val_year_ten").innerHTML = "$" + propval_after_ten; 

            // year fifteen 
            propval_after_fifteen = (pp_for_growth * (1 + growth_rate_dec) ** 15).toFixed(0)
            document.getElementById("prop_val_year_fifteen").innerHTML = "$" + propval_after_fifteen; 

            // year thirty
            propval_after_thirty = (pp_for_growth * (1 + growth_rate_dec) ** 30).toFixed(0)
            document.getElementById("prop_val_year_thirty").innerHTML = "$" + propval_after_thirty;
        }

        // finding cash on cash return 
        // COC = cashflow / total money invested 

        cash_on_cash = (((monthly_cash_flow *12) / total_money_invested) * 100).toFixed(2);

        document.getElementById("c_o_c").innerHTML = cash_on_cash + "%";

        // calculate the cap rate 
        var pp_for_cap_rate = parseInt(document.getElementById("price").value);
        var noi_for_cap_rate = parseInt(noi_with_cap);

        cap_rate = ((noi_for_cap_rate / pp_for_cap_rate) * 100).toFixed(2)
        document.getElementById("pur_cap_shown").innerHTML = cap_rate + "%"


        // setting the equity 
        eq_af_one = propval_after_one - loan_after_year_one;
        eq_af_five = propval_after_five - loan_after_year_five;
        eq_af_ten = propval_after_ten - loan_after_year_ten;
        eq_af_fif = propval_after_fifteen - loan_after_year_fif;
        eq_af_thi = propval_after_thirty - loan_after_year_th;

        document.getElementById("eq_one").innerHTML = "$" + eq_af_one
        document.getElementById("eq_five").innerHTML = "$" + eq_af_five
        document.getElementById("eq_ten").innerHTML = "$" + eq_af_ten
        document.getElementById("eq_fif").innerHTML = "$" + eq_af_fif
        document.getElementById("eq_thi").innerHTML = "$" + eq_af_thi

        // logic
        document.getElementById('report').style.display = "block";

        // scrolling part
        var scrollContainer = target;
        do { //find scroll container
            scrollContainer = scrollContainer.parentNode;
            if (!scrollContainer) return;
            scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop == 0);

        var targetY = 0;
        do { //find the top of target relatively to the container
            if (target == scrollContainer) break;
            targetY += target.offsetTop;
        } while (target = target.offsetParent);

        scroll = function(c, a, b, i) {
            i++; if (i > 30) return;
            c.scrollTop = a + (b - a) / 30 * i;
            setTimeout(function(){ scroll(c, a, b, i); }, 20);
        }
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);

}

function down_rep(){
    var doc = new jsPDF();

    // font 
    doc.setFont("Courier", "bold")

    // report name
    var heading = document.getElementById("rep_name_inp").value;
    doc.text(heading, 20, 20)
    doc.setTextColor(222, 95, 220);
    doc.text("A RealEst Report", 140, 20)
    doc.setTextColor(0,0,0);

    var st_name = "Street Name: " + document.getElementById("st_name_inp").value 
    var city_name = "City: " + document.getElementById("city_inp").value 
    var zip_name = "Zip Code: " + document.getElementById("zip_inp").value 
    var state_name = "State: " + document.getElementById("state_inp").value 
    var country_name = "Country: " + document.getElementById("country").value

    var bd_name = "Bedrooms: " + document.getElementById("bd").value
    var bth_name = "Bathrooms: " + document.getElementById("br").value
    var sq_name = "Square Feet: " + document.getElementById("sq").value + "ft"

    var pp_name = "Purchase Price: $" + document.getElementById("price").value
    var closing_name = "Others Fees and Closing Costs: $" + feeses_calculated;

    doc.setFont("Courier", "bold")
    doc.text("Adress", 20, 40)
    doc.setFont("Courier", "normal")
    doc.text(st_name, 25, 50)
    doc.text(city_name, 25, 55)
    doc.text(zip_name, 25, 60)
    doc.text(state_name, 25, 65)
    doc.text(country_name, 25, 70)

    doc.setFont("Courier", "bold")
    doc.text("Details", 20, 80)
    doc.setFont("Courier", "normal")
    doc.text(bd_name, 25, 90)
    doc.text(bth_name, 25, 95)
    doc.text(sq_name, 25, 100)

    doc.setFont("Courier", "bold")
    doc.text("Purchase Information", 20, 110)
    doc.setFont("Courier", "normal")
    doc.text(pp_name, 25, 120)
    doc.text(closing_name, 25, 125)

    doc.setFont("Courier", "bold")
    doc.text("Loan Information", 20, 135)
    doc.setFont("Courier", "normal")

    var x = 0

    if (paid_loan === true){
        var down_name = "Down Payment: $" + down_in_dollars
        var principal_name = "Loan Principal: $" + principal; 
        var interest_annual = "Annual Interest Rate: " + interest_rate_for_loan + "%"; 
        var interest_monthly = "Monthly Interest Rate: " + monthly_interst_rate_per + "%";
        var loan_points_name = "Loan Points: " + document.getElementById("loan_points").value;
        var mort_payment = "Monthly Mortgage Payment: $" + payment;
        var loan_term_name = "Loan Term: " + loan_years_term + " years"

        doc.text(down_name, 25, 145)
        doc.text(principal_name, 25, 150)
        doc.text(interest_annual, 25, 155)
        doc.text(interest_monthly, 25, 160)
        doc.text(loan_points_name, 25, 165)
        doc.setFont("Courier", "bold")
        doc.text(mort_payment, 25, 170)
        doc.setFont("Courier", "normal")
        doc.text(loan_term_name, 25, 175)

        x = 185
    }
    else{
        doc.text("No Loan Taken", 25, 145)
        x = 155
    }

    var income_heading_name = "Income: $" + income
    doc.setFont("Courier", "bold")
    doc.text(income_heading_name, 20, x)
    doc.setFont("Courier", "normal")

    var rent = document.getElementById("rent").value
    var rent_name = "Rent: $" + rent;
    var other_income_name = "Others: $" + (income - rent);

    doc.text(rent_name, 25, x + 10)
    doc.text(other_income_name, 25, x + 15)

    // expenses
    var expenses_heading_name = "Expenses: $" + full_expenses;
    doc.setFont("Courier", "bold")
    doc.text(expenses_heading_name, 20, x + 25)
    doc.setFont("Courier", "normal")


    var values_for_exp_added_name = $("#added_expenses input").map(function() {
        return $(this).val()
      }).get().join(","); 

    var expenses_third_name = values_for_exp_added_name.split(",").reduce(function(prev, curr){
        return parseInt(prev,10) + parseInt(curr,10);
     });

    // the others
    var others_name = "Others: $" + expenses_third_name;

    // numbers
     var insurance_name = "Insurance: $" + document.getElementById("insurance").value;
     var taxes_name = "Property Taxes: $" + document.getElementById("prop_tax").value;
     var hoa_name = "HOA fees: $" + document.getElementById("HOA").value;     

    // percentages  

    var vacancy_perc_name = document.getElementById("vacancy").value;
    var rep_main_perc_name = document.getElementById("repairs").value;
    var cap_fees_perc_name = document.getElementById("cap_repairs").value;
    var prop_man_perc_name = document.getElementById("prop_man").value;

    // get values from expenses 

    var vacancy_doll_name = "Vacancy: " + vacancy_perc_name + "%: $" + parseInt((income * vacancy_perc_name / 100).toFixed(0))
    var rep_main_doll_name = "Repairs and Maintainance: " + rep_main_perc_name + "%: $" + parseInt((income * rep_main_perc_name / 100).toFixed(0))
    var cap_fees_doll_name = "Capital Expenditures: " + cap_fees_perc_name + "%: $" + parseInt((income * cap_fees_perc_name / 100).toFixed(0))
    var prop_man_doll_name = "Property Management: " + prop_man_perc_name + "%: $" + parseInt((income * prop_man_perc_name / 100).toFixed(0))

    doc.text(vacancy_doll_name, 25, x + 35)
    doc.text(rep_main_doll_name, 25, x + 40)
    doc.text(cap_fees_doll_name, 25, x + 45)
    doc.text(prop_man_doll_name, 25, x + 50)

    var y = x + 55

    var mort_name = "Mortgage: $" + payment;

    if (paid_loan === true){
        doc.text(mort_name, 25, y)
        y = x + 60
    }
    
    doc.text(insurance_name, 25, y)
    doc.text(taxes_name, 25, y + 5)
    doc.text(hoa_name, 25, y + 10)

    doc.text(others_name, 25, y + 15)

    // cash flow 
    var cash_name = "Cash Flow: $" + monthly_cash_flow;
    doc.setFont("Courier", "bold")
    doc.text(cash_name, 20, y + 25)
    doc.setFont("Courier", "normal")

    doc.addPage();

    doc.setFont("Courier", "bold")

    doc.text("Some Important Numbers", 20, 20)

    doc.setFont("Courier", "normal")
    
    var coc_name = "- Cash On Cash Return On Investment"
    var coc_name_two = "  (COCROI): " + cash_on_cash + "%";

    var noi_with_cap_name = "- Net Opertaing Income with Capital" 
    var noi_for_cap_name_two = "  Expenditures: $" + noi_with_cap;

    var noi_without_cap_name = "- Net Opertaing Income without Capital"
    var noi_without_cap_name_two = "  Expenditures: $" + noi_without_cap

    var pur_cap_name = "- Purchase Cap Rate: " + cap_rate + "%";

    var pro_forma_norehab_name = "- Pro Forma Cap Rate: No Rehab"
    var pro_forma_name = "- Pro Forma Cap Rate: " + pro_forma + "%"

    doc.text(coc_name, 25, 30)
    doc.text(coc_name_two, 25, 35)

    doc.text(noi_with_cap_name, 25, 45)
    doc.text(noi_for_cap_name_two, 25, 50)

    doc.text(noi_without_cap_name, 25, 60)
    doc.text(noi_without_cap_name_two, 25, 65)

    doc.text(pur_cap_name, 25, 75)

    if (did_rehab === true){
        doc.text(pro_forma_name, 25, 85)
    }
    else{
        doc.text(pro_forma_norehab_name, 25, 85)
    }

    doc.setFont("Courier", "bold")
    doc.text("Rehab Information", 20, 95)
    doc.setFont("Courier", "normal")

    var arv_rep = document.getElementById("arv").value;
    var rehab_costs_rep = document.getElementById("rehab").value;
    var pp_rep = document.getElementById("price").value;
    var val_inc_rep = arv_rep - pp_rep;

    var arv_name = "After Repair Value (ARV): $" + arv_rep; 
    var eq_name = "Value Gained from Rehab: $" + val_inc_rep;
    var cost_of_rehab_name = "Rehab Costs: $" + rehab_costs_rep;

    var n = 105
    var k = 0;

    if (did_rehab === true){
        doc.text(cost_of_rehab_name, 25, n)
        doc.text(arv_name, 25, n + 5)
        doc.text(eq_name, 25, n + 10)
        k = n + 10 
    }
    else{
        doc.text("No Rehab was done to the property", 25, n)
        k = n 
    }

    doc.setFont("Courier", "bold")
    doc.text("Growth/Decline Over Time", 20, k + 10)

    doc.text("Property Value", 25, k + 20)
    doc.setFont("Courier", "normal")

    var prop_val_one_name = "After Year 1: $" + propval_after_one
    var prop_val_five_name = "After Year 5: $" + propval_after_five
    var prop_val_ten_name = "After Year 10: $" + propval_after_ten
    var prop_val_fifteen_name = "After Year 15: $" + propval_after_fifteen
    var prop_val_thirty_name = "After Year 30: $" + propval_after_thirty
    
    doc.text(prop_val_one_name, 30, k + 30)
    doc.text(prop_val_five_name, 30, k + 35)
    doc.text(prop_val_ten_name, 30, k + 40)
    doc.text(prop_val_fifteen_name, 30, k + 45)
    doc.text(prop_val_thirty_name, 30, k + 50)

    var loan_val_one_name = "After Year 1: $" + loan_after_year_one
    var loan_val_five_name = "After Year 5: $" + loan_after_year_five
    var loan_val_ten_name = "After Year 10: $" + loan_after_year_ten
    var loan_val_fifteen_name = "After Year 15: $" + loan_after_year_fif
    var loan_val_thirty_name = "After Year 30: $" + loan_after_year_th

    doc.setFont("Courier", "bold")
    doc.text("Loan Balance", 25, k + 60)
    doc.setFont("Courier", "normal")

    doc.text(loan_val_one_name, 30, k + 70)
    doc.text(loan_val_five_name, 30, k + 75)
    doc.text(loan_val_ten_name, 30, k + 80)
    doc.text(loan_val_fifteen_name, 30, k + 85)
    doc.text(loan_val_thirty_name, 30, k + 90)

    var eq_val_one_name = "After Year 1: $" + eq_af_one
    var eq_val_five_name = "After Year 5: $" + eq_af_five
    var eq_val_ten_name = "After Year 10: $" + eq_af_ten
    var eq_val_fifteen_name = "After Year 15: $" + eq_af_fif
    var eq_val_thirty_name = "After Year 30: $" + eq_af_thi

    doc.setFont("Courier", "bold")
    doc.text("Equity", 25, k + 100)
    doc.setFont("Courier", "normal")

    doc.text(eq_val_one_name, 30, k + 110)
    doc.text(eq_val_five_name, 30, k + 115)
    doc.text(eq_val_ten_name, 30, k + 120)
    doc.text(eq_val_fifteen_name, 30, k + 125)
    doc.text(eq_val_thirty_name, 30, k + 130)

    doc.setFontSize(9)
    doc.text("This report was generated by RealEst© 2021.", 20, k + 150)
    doc.text("Use of this calculator signifies that you have agreed to use this calculator just for", 20, k + 155)
    doc.text("informational and educational purposes. This is not financial advice. The numbers above", 20, k + 160)
    doc.text("may or may not reflect actual returns. RealEst will not be responsible for decision taken", 20, k + 165)
    doc.text("dependent on this calculator.", 20, k + 170)
    doc.text("Always seek advice before making any decision", 20, k + 175)
    
    doc.save("My_Report.pdf")
}


function rep_name_info(){
    alert("Enter the name of the report. It will later be used to display this specific report.")
}

function address_info(){
    alert("Enter the address information of the property below. It will later be displayed in the report.")
}

function st_name_info(){
    alert("What is the street your property is on")
}

function city_info(){
    alert("What city is your property in")
}

function zip_info(){
    alert("What Zip code does your property fall under")
}

function state_info(){
    alert("What state is your property in")
}

function country_info(){
    alert("What country is your property in");
}

function brief_des_info(){
    alert("Enter in a brief description of your property if you want. It will later be displayed on your report")
}

function bed_info(){
    alert("Enter the number of bathrooms your property has")
}

function bath_info(){
    alert("Enter the number of bathrooms your property has")
}

function sq_info(){
    alert("The square footage of your property. Square feet are used to measure the amount of area the property covers and can play in important role in the price of your property")
}

function pic_info(){
    alert("To make your report look more attractive, upload a piture of your property. It is optional though")
}

function by_price_info(){
    alert("Enter the price you bought/are planning to buy the property at")
}

function clos_pric(){
    alert("Closing costs are a fee that the bank/organization giving the loan requires to close the loan. Usually, the sellers of the propety pay the closing costs but it can be negotiated. The amount of this fees usually depends the mortgage amount and state.")
}

function inc_info(){
    alert("Under the Income section, add all the sources you may earn revenue from when you buy the property. Rent is definitely one but think about money earned from laundry rooms or vending machines in the property.")
}

function rent_info(){
    alert("The rent you will get when you buy the property")
}

function exp_info(){
    alert("What are you going to pay for when you buy the property. There are some expenses shown in the calculator below, you may add your own too")
}

function ins_info(){
    alert("Insurance is a usually a mandatory expense for homeowners and ensures financial protection in times of natural disaster and etc. It depends on the area you live in (ex: High flood risk areas) and the state")
}

function prop_tax(){
    alert("You are required by law to pay yearly taxes on the property you own. This amount depends on your state")
}

function hoa_info(){
    alert("The HOA (Home owners association) fees is the fees you pay when the property is located in a shared community. The HOA of the property collects money and uses it for maintaining lobbies, patios, landscaping, swimming pools, etc around the property.")
}

function vac_info(){
    alert("Vacancy is the amount of money you would potentially have to pay in rent when your tenant decides to move and the property sits vacant. This amount depends on how long your property sits vacant.")
}

function rep_info(){
    alert("These are the costs of small wear and tear or any maintainance that the property requires when the tenant is residing in there.")
}

function loan_len_info(){
    alert("How long will your loan persist. Usually home loans are 30 years long but they can be accomodated with the loan provider. Hard money and credit union loans can be shorter. Enter the number of years that the loan will go on for.")
}

function loan_points_info(){
    alert("Loan points are fees charged by the lender for the loan. Consider points like percentages. One point of a $100 loan is $1 and 2 points of a $100, 000 loan are $2000.")
}

function cap_info(){
    alert("These are large repairs that come up usually after several years and are costly; it is better to start saving this money so the expense doesn't pile up all at once. One example is replacing the roof.")
}

function int_info(){
    alert("The interest rate of your loan is given by the loan provider. Large Banks usually sell loans to corporations like Fannie May and Freddie Mac and hence take a lower interest rate. Other credit unions and private lenders and hard money loans usually have a higher interest rate. Ask your loan procider for your interest rate, it makes a large difference")
}

function prop_man_info(){
    alert("Since not all homeowners manage their properties themselves, they hire property managers to it for them and pay them a percentage of the monthly rent")
}

function arv_info(){
    alert("The after repair value of a property is the amount of money you can sell your property would sell for when you are done repairing it. This doesn't mean you have to sell your property.")
}

function reh_info(){
    alert("Enter the fees that you think the rehabilitation/renovation of the property would cost")
}

function an_prop_gro(){
    alert("The value of your property grows over time, mainly due to inflation and demand. Enter in a percentage you think the property value will grow at. Usually a safe guess is 2% but enter what you think is appropriate for your area.")
}

function down_pay(){
    alert("Enter the down payment percentage of the loan. Usually banks require you to put 20-30 percent down payment for them to give you a loan. It can be negotiated at times though.")
}

function run_nums(){
    alert("ok")
    return false
}

function make_graph(){

    document.getElementById("container").style.display = "block"
    document.getElementById("mak_grap").style.display = "none"
    // Making the income vs expense graph 
    var data = [
        {x: "Income", value: income},
        {x: "Expenses", value: full_expenses}
    ];

    // create the chart
    var chart = anychart.pie();

    // set the chart title
    chart.title("Income vs Expense Graph");

    // add the data
    chart.data(data);

    // display the chart in the container
    chart.container('container');
    chart.draw();
}

function make_inc_break_graph(){
    document.getElementById("make_inc_but").style.display = "none"
    document.getElementById("income_break_graph").style.display = "block"

    rent_for_inc_graph = document.getElementById("rent").value;

    var values = $("#incomes input").map(function() {
        return $(this).val()
      }).get().join(",");

    income = values.split(",").reduce(function(prev, curr){
        return parseInt(prev,10) + parseInt(curr,10);
     });

    var others = income - rent_for_inc_graph

    var data_for_inc_graph = [
        {x: "Rent", value: rent_for_inc_graph} ,
        {x: "Others", value: others}
    ];

    // create the chart
    var chart_inc_break = anychart.pie();

    // set the chart title
    chart_inc_break.title("Rent vs Other Incomes");

    // add the data
    chart_inc_break.data(data_for_inc_graph);

    // display the chart in the container
    chart_inc_break.container('income_break_graph');
    chart_inc_break.draw();

}

function make_exp_break_graph(){
    document.getElementById("make_exp_but").style.display = "none"
    document.getElementById("expense_break_graph").style.display = "block"

    var values_for_exp_added_for_graph = $("#added_expenses input").map(function() {
        return $(this).val()
      }).get().join(","); 

    expenses_third_for_graph = values_for_exp_added_for_graph.split(",").reduce(function(prev, curr){
        return parseInt(prev,10) + parseInt(curr,10);
     });

    // the others
    var others = expenses_third_for_graph;

    // numbers
     var insurance_for_graph = document.getElementById("insurance").value;
     var taxes_for_graph = document.getElementById("prop_tax").value;
     var hoa_for_graph = document.getElementById("HOA").value;     

    // percentages  

    var vacancy_perc_for_graph = document.getElementById("vacancy").value;
    var rep_main_perc_for_graph = document.getElementById("repairs").value;
    var cap_fees_perc_for_graph = document.getElementById("cap_repairs").value;
    var prop_man_perc_for_graph = document.getElementById("prop_man").value;

    // get values from expenses 

    var vacancy_doll_for_graph = parseInt((income * vacancy_perc_for_graph / 100).toFixed(0))
    var rep_main_doll_for_graph = parseInt((income * rep_main_perc_for_graph / 100).toFixed(0))
    var cap_fees_doll_for_graph = parseInt((income * cap_fees_perc_for_graph / 100).toFixed(0))
    var prop_man_doll_for_graph = parseInt((income * prop_man_perc_for_graph / 100).toFixed(0))

    // setting the data 
    var data_for_exp_graph = [];

    // check if paid loan and there is mortgage
    if(paid_loan === true){
        data_for_exp_graph = [
        {x: "Insurance", value: insurance_for_graph},
        {x: "Property Taxes", value: taxes_for_graph},
        {x: "HOA Fees", value: hoa_for_graph},
        {x: "Vacancy", value: vacancy_doll_for_graph},
        {x: "Mortgage", value: payment},
        {x: "Repairs/Maintainance", value: rep_main_doll_for_graph},
        {x: "Capital Expenditures", value: cap_fees_doll_for_graph},
        {x: "Property Management", value: prop_man_doll_for_graph},       
        {x: "Others", value: others}
        ];
    }
    else{
        data_for_exp_graph = [
            {x: "Insurance", value: insurance_for_graph},
            {x: "Property Taxes", value: taxes_for_graph},
            {x: "HOA Fees", value: hoa_for_graph},
            {x: "Vacancy", value: vacancy_doll_for_graph},
            {x: "Repairs/Maintainance", value: rep_main_doll_for_graph},
            {x: "Capital Expenditures", value: cap_fees_doll_for_graph},
            {x: "Property Management", value: prop_man_doll_for_graph},       
            {x: "Others", value: others}
            ];
    }

    // create the chart
    var chart_exp_break = anychart.pie();

    // set the chart title
    chart_exp_break.title("Expenses Breakdown Graph");

    // add the data
    chart_exp_break.data(data_for_exp_graph);

    // display the chart in the container
    chart_exp_break.container('expense_break_graph');
    chart_exp_break.draw();
}

function noi(){
    alert("The net operating income of a property is how much a property will potentially make in profits. An important thing is that the NOI is different from cash flow. The Cashflow includes and considers the mortgage payments and taxes other capital expenditures like a roof replacement while the NOI only considers recurring expenses like property management, other fixed expenses, and utilities and etc. This NOI considers Capital Expenditures.")
}

function noi_no(){
    alert("The net operating income of a property is how much a property will potentially make in profits. An important thing is that the NOI is different from cash flow. The Cashflow includes and considers the mortgage payments and taxes other capital expenditures like a roof replacement while the NOI only considers recurring expenses like property management, other fixed expenses, and utilities and etc. This NOI does not consider Capital Expenditures.")
}

function purchase_cap_info(){
    alert("The Purchase Cap/Cap Rate/Capitalization rate of a property is a measure used to compare different investments in real estate. It is calculated as a ratio of the net operating income (NOI) and the current market value. RealEst calculates the Cap rate using the Net Operating Income with Capital Expenditures to be conservative")
}

function pro_cap_info(){
    alert("The Pro Forma cap rate of a property is basically the Cap rate but after the property has been renovated and the current market value of the property has been increased. While the Cap rate is NOI/Purchase Price, the Pro Forma Cap rate is NOI/ARV. RealEst will only display the ProForma rate if the property has been rehabbed")
}

function inp_change(){
    document.getElementById('report').style.display = "none";
}