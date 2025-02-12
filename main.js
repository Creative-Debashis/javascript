// function generateOTP() {
//     // Generate a random number between 100000 and 999999 (inclusive)
//     const otp = Math.floor(100000 + Math.random() * 900000);
//     return otp;
// }

// console.log(generateOTP());

function generateOTP(length = 6) {
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += Math.floor(Math.random() * 10); // Adds a random digit (0-9)
    }
    document.getElementById("show").innerText = `Your Otp is ${otp}`
    console.log(otp); // Logs the complete OTP after the loop
    return otp; // You can return the OTP if needed
    
}

generateOTP(); // Call the function

