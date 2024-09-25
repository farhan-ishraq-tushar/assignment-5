// Global functions

// total donation and lef money after donation

function donationCalc(donateBtnId, donationInputId, totalDonationId, leftMoneyId){
    let totalDonation = parseFloat(document.getElementById(totalDonationId).innerText);
    let leftMoney = parseFloat(document.getElementById(leftMoneyId).innerText);
    let leftMoneyId = parseFloat(document.getElementById(leftMoneyId).innerText);


    document.getElementById(donateBtnId).addEventListener('click', function(){
    const donationInput = parseFloat(document.getElementById(donationInputId).value);
    
    if (!isNaN(donationInput) && donationInput > 0 && leftMoney > donationInput){
        totalDonation += donationInput;
        document.getElementById(totalDonationId).innerText = totalDonation;
        document.getElementById(donationInputId).value = '';
        leftMoney = leftMoney - donationInput;
        document.getElementById(leftMoneyId).innerText = leftMoney;

    }
    
    else{
        alert("Invalid Input");
    }
})
}


// Total donation and left money
// Donate for Flood at Noakhali section
let totalDonate1 = 0;
donationCalc("donateBtn1","donation1", 'totalDonate1',"left-money");

// Donate for Flood Relief in Feni section
let totalDonate2 = 600;
donationCalc("donateBtn2","donation2", 'totalDonate2',"left-money");


// Aid for Injured in the Quota Movement section
let totalDonate3 = 2400;
donationCalc("donateBtn3","donation3", 'totalDonate3',"left-money");


// let totalDonation = 0;
//     const donationBtn = document.getElementById("donateBtn1").addEventListener('click', function(){
//     const donationInput = parseFloat(document.getElementById("donation1").value);
    
//     if (!isNaN(donationInput) && donationInput > 0){
//         totalDonation += donationInput;
//         document.getElementById('totalDonate1').innerText = totalDonation;
//         document.getElementById('donation1').value = '';
//     }
//     else{
//         alert("Error occured");
//     }
// })







