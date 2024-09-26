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
            
            // Donation amount calcualtion
             leftBalance = totalBalance - myDonation;
             totalBalance = leftBalance;
             totalDonation = myDonation + totalDonation;
             document.getElementById(leftMoney).innerText = totalBalance;
             document.getElementById(totalDonate).innerText = totalDonation;
             document.getElementById(donation).value = '';

            //  History part
            const historyItem = document.createElement("div");
            historyItem.className = 'bg-white p-3 rounded-md border-l-2 border-indigo-500';

            // let donationReason = '';
            if(donation === "donation1"){
                // donationReason === "Taka is Donated for Flood Relief in Noakhali,Bangladesh";
                historyItem.innerHTML = `
                <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>

                <p class="text-base md:text-xl text-black font-semibold">
                ${myDonation} Taka is Donated for Flood Relief in Noakhali,Bangladesh
                </p>

                `;
            }

            else if(donation === "donation2"){
                historyItem.innerHTML = `
                <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>

                <p class="text-base md:text-xl text-black font-semibold">
                ${myDonation} Taka is Donated for Flood Relief in Feni,Bangladesh
                </p>

                `;
            }
            
            else{
                historyItem.innerHTML = `
                <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>

                <p class="text-base md:text-xl text-black font-semibold">
                ${myDonation} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
                </p>
                `;
            };

            const historyContainer = document.getElementById("transaction-list");
            historyContainer.insertBefore(historyItem, historyContainer.firstChild);

        }
    
        else{
            alert("Invalid input")
        }
    })
    return(donateBtn, leftMoney, totalDonate, donation);
}


// History and Donation Button functionality

    // History button functionality
    document.getElementById("history-btn").addEventListener("click",function(){

        // donation-btn design change
        document.getElementById("donation-btn").classList.add('border','border-gray-700');
        document.getElementById("donation-btn").classList.remove('bg-[#B4F461]');

        // history-btn design change
        document.getElementById("history-btn").classList.add('bg-[#B4F461]');
        document.getElementById("history-btn").classList.remove('border');

        // making unnecessary elements hidden
        document.getElementById("main").classList.add('hidden');
        
        // making necessary part visible
        document.getElementById("footer").classList.remove('hidden');
        
    })


    // Donation button functionality
    document.getElementById("donation-btn").addEventListener("click",function(){

        // donation-btn design change
        document.getElementById("donation-btn").classList.remove('border','border-gray-700');
        document.getElementById("donation-btn").classList.add('bg-[#B4F461]');

        // history-btn design change
        document.getElementById("history-btn").classList.remove('bg-[#B4F461]');
        document.getElementById("history-btn").classList.add('border');

        // making necessary elements visible
        document.getElementById("main").classList.remove('hidden');
        
        // making unnecessary elements hidden
        document.getElementById("footer").classList.add('hidden');

    })


// Local calculations

//  Noakhali donation calculation
donationCalc("donateBtn1", "left-money", "totalDonate1", "donation1");

// Feni donation calculation
donationCalc("donateBtn2", "left-money", "totalDonate2", "donation2");

// Quota Movement donation calculation
donationCalc("donateBtn3", "left-money", "totalDonate3", "donation3");






