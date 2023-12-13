var btn = document.getElementById("kirim");
btn.addEventListener("click", contact);

function contact() {
    var afirstname = document.getElementById("firstname");
	var alastname = document.getElementById("lastname");
	var aemail = document.getElementById("email");
	var amobile = document.getElementById("mobile");
	var amessage = document.getElementById("message");

    const formData = new FormData();
    formData.append('firstname', afirstname.value);
    formData.append('lastname', alastname.value);
    formData.append('email', aemail.value);
    formData.append('mobile', amobile.value);
    formData.append('message', amessage.value);

    fetch(`https://be-2-bandung-16-production-b5ba.up.railway.app//contact`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstname: afirstname.value,
            lastname: alastname.value,
            email: aemail.value,
            mobile: amobile.value,
            message: amessage.value
        }),
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)    
        const list = document.getElementById("berhasil2"); 
        list.innerHTML += `
        <h1 class="heading">Thank You for Your Input ${afirstname.value}!</h1>
        `;     
    })
    .catch(function (error) {
        console.log(error);
    });

}

