function gotowhatsapp() {
    
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var nomor_wa = document.getElementById("nomorWA").value;
    var alamat = document.getElementById("alamat").value;
    var paket = document.getElementById("paket").value;
    var pesan = document.getElementById("pesan").value;

    var url = "https://web.whatsapp.com/send/6281325163798?text= Selamat Pagi Tim Ababil " 
    + "Nama: " + nama + "%0a"
    + "Email: " + email + "%0a"
    + "Nomor Whatsapp: " + nomor_wa  + "%0a"
    + "Alamat: " + alamat + "%0a"
    + "Jenis Paket: " + paket + "%0a"
    + "Pesan Tambahan: " + pesan + "%0a"; 

    window.open(url, '_blank').focus();
}



