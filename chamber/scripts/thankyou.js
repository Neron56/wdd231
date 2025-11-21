const params = new URLSearchParams(window.location.search);

const fullName = `${params.get('firstName')} ${params.get("lastName")}`;
const organizationalTitle = params.get("organizationalTitle");
const email = params.get("email");
const phoneNumber = params.get("phoneNumber");
const organization = params.get("businessName");
const membershipLevel = params.get("membershipLevel");
const description = params.get("textarea");
const timestamp = params.get("timestamp");

const information = document.querySelector("#information");


information.innerHTML = `
    Thank you ${organizationalTitle} ${fullName} from ${organization} for your application! Heres the information you gave:<br><br>
    email: ${email}<br><br>
    phone number: ${phoneNumber}<br><br>
    membership level: ${membershipLevel}<br><br>
    description: ${description}<br><br>
    The form was loaded at: ${timestamp}<br><br>
    Thank You!
`
