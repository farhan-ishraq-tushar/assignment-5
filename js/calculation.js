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
    
        // console.table(totalBalance,totalDonation,myDonation);
    })
    return(donateBtn, leftMoney, totalDonate, donation);
}

donationCalc("donateBtn1", "left-money", "totalDonate1", "donation1");
donationCalc("donateBtn2", "left-money", "totalDonate2", "donation2");
donationCalc("donateBtn3", "left-money", "totalDonate3", "donation3");





