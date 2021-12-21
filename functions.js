'use strict';

// 1. isHometown

// Define your function here
function isHometown(town){
    if (town == 'San Francisco'){
        return true;
    }
    return false;
}

// 2. getFullName

// Define your function here
function get_full_name(first_name, last_name){
    console.log(first_name+" "+last_name);
}



// 3. calculateTotal

// Define your function here

function calculate_total(base_price, state, tax=0.05){
    let subtotal = base_price * (1 + tax);
    let fee = 0;
    if (state == "CA"){
        fee = 0.03 * subtotal;
    } else if (state =="PA") {
        fee=2;
    } else if (state == "MA") {
        if (base_price <= 100){
            fee = 1;
        } else {
            fee = 3;
        }
    
    }
    console.log(subtotal+fee);

    return subtotal + fee;
}

calculate_total(1000, "MA");