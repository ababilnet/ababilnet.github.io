$(document).on('click','.send_form', function(){
    var input_blanter = document.getElementById('wa_email');
    
    /* Whatsapp Settings */
    var walink = 'https://web.whatsapp.com/send',
        phone = '6281325163798',
        walink2 = 'Saya ingin menjadi sahabat ABABIL ';
    
    /* Smartphone Support */
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
    }
    
    if("" != input_blanter.value){
    
     /* Call Input Form */
    /*var input_select1 = $("#wa_select :selected").text(),
        input_name1 = $("#wa_name").val(),
        input_email1 = $("#wa_email").val(),
        input_number1 = $("#wa_number").val(),
        input_url1 = $("#wa_url").val(),
        input_textarea1 = $("#wa_textarea").val();*/
    var input_nama = $("#nama").val(),
        input_email = $("#email").val(),
        input_nomor_wa = $("#nomorWA").val(),
        input_alamat = $("#alamat").val(),
        input_paket = $("#paket :selected").text(),
        input_pesan = $("#pesan").val();

    
    /* Final Whatsapp URL */
    /*var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
        '*Name* : ' + input_name1 + '%0A' +
        '*Email Address* : ' + input_email1 + '%0A' +
        '*Select Option* : ' + input_select1 + '%0A' +
        '*Input Number* : ' + input_number1 + '%0A' +
        '*URL/Link* : ' + input_url1 + '%0A' +
        '*Description* : ' + input_textarea1 + '%0A';*/
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
        'Nama* : ' + input_nama + '%0A' +
        'Alamat Email* : ' + input_email + '%0A' +
        'Nomor Whatsapp* : ' + input_nomor_wa + '%0A' +
        'Alamat* : ' + input_alamat + '%0A' +
        'Pilihan Paket* : ' + input_paket + '%0A' +
        'Pesan* : ' + input_pesan + '%0A';

    
    /* Whatsapp Window Open */
    window.open(blanter_whatsapp,'_blank');
    } 
    });