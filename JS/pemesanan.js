var btn = document.getElementById("kirim");
btn.addEventListener("click", addpemesanan);

function addpemesanan() {
    var aname = document.getElementById("name");
	var aemail = document.getElementById("email");
	var acheckin = document.getElementById("checkin");
	var acheckout = document.getElementById("checkout");
	var aadults = document.getElementById("adults");
	var achild = document.getElementById("child");
	var aroom = document.getElementById("room");
	var atype_room = document.getElementById("type_room");

    const formData = new FormData();
    formData.append('name', aname.value);
    formData.append('email', aemail.value);
    formData.append('checkin', acheckin.value);
    formData.append('checkout', acheckout.value);
    formData.append('adults', aadults.value);
    formData.append('child', achild.value);
    formData.append('room', aroom.value);
    formData.append('type_room', atype_room.value);
    console.log(formData)


    isSending = true;
    fetch(`be-2-bandung-16-production-b5ba.up.railway.app/pemesanan`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: aname.value,
            email: aemail.value,
            checkin: acheckin.value,
            checkout: acheckout.value,
            adults: aadults.value,
            child: achild.value,
            room: aroom.value,
            type_room: atype_room.value
        }),
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data, body) {
        console.log(data)      
        const list = document.getElementById("berhasil2"); 
        list.innerHTML += `
        <h1 class="heading">Thank You ${aname.value}, Your booking was successful!</h1>
        <div class="berhasil">
            Name: ${aname.value}<br>
            Email: ${aemail.value}<br>
            Check In: ${acheckin.value}<br>
            Check Out: ${acheckout.value}<br>
            Adults: ${aadults.value}<br>
            Chid: ${achild.value}<br>
            Room: ${aroom.value}<br>
            Type: ${atype_room.value}<br>
        </div>
        `;  
        
    })
    .catch(function (error) {
        console.log(error);
    });
}

