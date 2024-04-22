async function getPrayerTimes() {
    const city = document.getElementById('city').value.trim();
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.aladhan.com/v1/timingsByAddress/09-03-2015?address=Dubai,UAE&method=8&tune=2,3,4,5,2,3,4,5,-3`
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.code !== 200) {
            throw new Error(data.status);
        }

        const timings = data.data.timings;
        const output = `
            <h1>Prayer Times for ${city}</h1> 
            <div class ="para">
            <p>Fajr: ${timings.Fajr}</p>
            <p>Dhuhr: ${timings.Dhuhr}</p>
            <p>Asr: ${timings.Asr}</p>
            <p>Maghrib: ${timings.Maghrib}</p>
            <p>Isha: ${timings.Isha}</p>
            </div>
            `;

        document.getElementById('prayer-times').innerHTML = output;
    } catch (error) {
        console.error("Error fetching prayer times:", error);
        alert("Could not retrieve prayer times. Please ensure the city name is correct.");
    }
}













































// async function getPrayerTimes() {
//     const city = document.getElementById('city').value.trim();
//     if (!city) {
//         alert("Please enter a city name.");
//         return;
//     }

//     const apiUrl = `https://api.aladhan.com/v1/timingsByAddress/09-03-2015?address=Dubai,UAE&method=8&tune=2,3,4,5,2,3,4,5,-3`
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         if (data.code !== 200) {
//             throw new Error(data.status);
//         }

//         const timings = data.data.timings;
//         const output = `
//             <h1>Prayer Times for ${city}</h1> 
//             <div class ="para">
//             <p>Fajr: ${timings.Fajr}</p>
//             <p>Dhuhr: ${timings.Dhuhr}</p>
//             <p>Asr: ${timings.Asr}</p>
//             <p>Maghrib: ${timings.Maghrib}</p>
//             <p>Isha: ${timings.Isha}</p>
//             </div>
//             `;

//         document.getElementById('prayer-times').innerHTML = output;
//     } catch (error) {
//         console.error("Error fetching prayer times:", error);
//         alert("Could not retrieve prayer times. Please ensure the city name is correct.");
//     }
// }