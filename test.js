hubspotEndPoint = "https://api.hsforms.com/submissions/v3/integration/submit/8105752/afa57692-3f18-42a9-9ab7-23576f558fbe";
formData = {
    fields: [
        {
            name: "firstname",
            value: "Beto"
        },
        {
            name: "lastname",
            value: "Oliveira"
        },
        {
            name: "company",
            value: "Amply"
        },
        {
            name: "email",
            value: "beto@joinamply.com"
        },
        {
            name: "message",
            value: "Testing"
        }
    ]
};
console.log("HubSpot Form Data:", formData);
// Make a POST request to HubSpot
fetch(hubspotEndPoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
})
    .then(response => response.json())
    .then(data => {
        console.log('HubSpot Form Submission Successful:', data);
    })
    .catch(error => {
        console.error('HubSpot Form Submission Error:', error);
        // Handle error, e.g., show an error message to the user
    });