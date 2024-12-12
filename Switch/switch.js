// Chennai - Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city’s roots as a British military garrison and East India Company trading outpost, when it was called Madras. Religious sites include Kapaleeshwarar Temple, adorned with carved and painted gods, and St. Mary’s, a 17th-century Anglican church
//Vellore - Vellore is a city in the state of Tamil Nadu, in southern India. It's known for 16th-century Vellore Fort, with its imposing granite walls and surrounding moat. Inside the fort, the Jalakandeswarar Temple features many ornate sculptures. Nearby, the Government Museum has prehistoric relics and natural history displays. By the Palar River, the Muthu Mandapam memorial houses the tomb of a Tamil leader.
//Salem - Salem is a city on the Thirumanimuthar River, in the south Indian state of Tamil Nadu. The centuries-old Sugavaneswarar Temple, dedicated to the Hindu deity Shiva, features colorful gopurams (towers) and gardens. Nearby, colonial-era Christ Church is an Indo-Saracenic landmark consecrated in 1875. Jamiya Masjid is a mosque believed to have been built by Tipu Sultan, the 18th-century ruler of the Kingdom of Mysore.
//madurai - Madurai is an energetic, ancient city on the Vaigai River in the South Indian state of Tamil Nadu. Its skyline is dominated by the 14 colorful gopurams (gateway towers) of Meenakshi Amman Temple. Covered in bright carvings of Hindu gods, the Dravidian-style temple is a major pilgrimage site. Millions attend the processions and ceremonies of April's Chithirai Festival celebrating Meenakshi and Lord Vishnu.

const button = document.querySelector('button');
button.addEventListener('click', displayres);

function displayres() {
  const input = document.getElementById('input');
  const cityinput = input.options[input.selectedIndex].value;
  console.log(cityinput);
}


