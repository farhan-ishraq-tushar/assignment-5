// Global functions
// input value into float number
function inputValue(id){
   let inputValue = parseFloat(document.getElementById(id).value);
   return inputValue;
}
// text value into float number
function textValue(id){
   let textValue = parseFloat(document.getElementById(id).innerText);
   return textValue;
}

// donation calculation 
function donationCalc(donateBtn, leftMoney, totalDonate, donation){
    document.getElementById(donateBtn).addEventListener("click", function(){
        let totalBalance = textValue(leftMoney);
        let totalDonation = textValue(totalDonate);
        let myDonation = inputValue(donation); 
        if(!isNaN(myDonation) && myDonation > 0 && totalBalance > myDonation){
             a = totalBalance - myDonation;
             totalBalance = a;
             totalDonation = myDonation + totalDonation;
             document.getElementById(leftMoney).innerText = totalBalance;
             document.getElementById(totalDonate).innerText = totalDonation;
             document.getElementById(donation).value = '';
        }
    
        else{
            alert("invalid")
        }
    })
    return(donateBtn, leftMoney, totalDonate, donation);
}


//  Noakhali donation calculation
donationCalc("donateBtn1", "left-money", "totalDonate1", "donation1");

// Feni donation calculation
donationCalc("donateBtn2", "left-money", "totalDonate2", "donation2");

// Quota Movement donation calculation
donationCalc("donateBtn3", "left-money", "totalDonate3", "donation3");






