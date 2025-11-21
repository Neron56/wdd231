const params = new URLSearchParams(window.location.search);

const fullName = `${params.get('firstName')} ${params.get("lastName")}`;
const organizationalTitle = params.get("organizationalTitle");
const email = params.get("email");
const phoneNumber = params.get("phoneNumber");
const organization = params.get("businessName");
const description = params.get("organizationDescription");
const timestamp = params.get("timestamp");

const information = document.querySelector("#information");


information.innerHTML = `
    Thank you ${fullName} from ${organization} for your application! Heres the information you gave:<br><br>
    email: ${email}<br><br>
    phone number: ${phoneNumber}<br><br>
    The form was loaded at: ${timestamp}<br><br>
    Thank You!
`
