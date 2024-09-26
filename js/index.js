// Global functions

// total donation and lef money after donation

// function donationCalc(donateBtnId, donationInputId, totalDonationId, leftMoneyId){
    // let leftMoneyId = 5500;
function donationCalc(donateBtnId, donationInputId, totalDonationId){
    let totalDonation = parseFloat(document.getElementById(totalDonationId).innerText);
    
    
    // let leftMoney = parseFloat(document.getElementById("left-money").innerText); 
    // let initialMoney = leftMoney - totalDonation;

    let initialMoney = parseFloat(document.getElementById("left-money").innerText);
    let leftMoney = initialMoney;


    document.getElementById(donateBtnId).addEventListener('click', function(){
    const donationInput = parseFloat(document.getElementById(donationInputId).value);
    
    if (!isNaN(donationInput) && donationInput > 0 && initialMoney > donationInput){
        totalDonation += donationInput;
        document.getElementById(totalDonationId).innerText = totalDonation;
        document.getElementById(donationInputId).value = '';
        leftMoney = initialMoney - donationInput;
        document.getElementById("left-money").innerText = leftMoney;
        // [initialMoney,leftMoney] = [leftMoney,initialMoney];
        // leftMoney = initialMoney;
    }
    
    else{
        alert("Invalid Input");
    }
    
})
// return initialMoney;
// console.log(initialMoney);
}


// Total donation and left money
// Donate for Flood at Noakhali section
// let totalDonate1 = 0;
donationCalc("donateBtn1","donation1", 'totalDonate1');


// Donate for Flood Relief in Feni section
// let totalDonate2 = 600;
donationCalc("donateBtn2","donation2", 'totalDonate2');


// Aid for Injured in the Quota Movement section
// let totalDonate3 = 2400;
donationCalc("donateBtn3","donation3", 'totalDonate3');


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







