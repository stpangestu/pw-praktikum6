  const Pelanggan = document.getElementById("Pelanggan")
 
  var a= 2;
  let cat = document.querySelector("#kat");
  let jp = document.querySelector("#jp");
  let x =document.querySelector("#np");

  Pelanggan.addEventListener("submit",(e)=>{
    e.preventDefault();

   if (x.value == ""){
     alert("‘isi kolom nama!’");
     return false;
   }
   if (cat.value == ""){
     alert("‘isi kolom kategori!’");
     return false;
   }
   if (jp.value == ""){
     alert("‘isi jumlah pemakaian!’");
     return false;
   }
   if (jp.value > 31){
     alert("‘Jumlah hari melebihi kenyataan!!!’,");
     return false;
   }

////////////////////////////////////////////////////////////////////////////////////////////////////////

 if (cat.value == "rumah" || cat.value == "Rumah" && x.value != ""){
    console.log("cat.value");
     var s = ''
     var n  = ''
     var a = ''
     var t = ''
     
     for(var i = 1; i <= jp.value; i++) {
    
      n += i;

      n += '<br>';
      var hasil = document.getElementById("no");

      hasil.innerHTML = n;
    }
     for(var i = 1; i <= jp.value; i++) {
    
        s += (i)*500;
    
        s += '<br>';
        var hasil = document.getElementById("out");

        hasil.innerHTML = s;
     }
     for(var i = 1; i <= jp.value; i++) {
    
      a += 30000;

      a += '<br>';
      var hasil = document.getElementById("abodemen");

      hasil.innerHTML = a;
      

   }
   for(var i = 1; i <= jp.value; i++) {
    
    t += (i)*500+30000;

    t += '<br>';
    var hasil = document.getElementById("subTot");

    hasil.innerHTML = t;
    
  }
  var no = document.getElementById("nama");
  var h
  h = x.value;
  no.innerHTML = h;
  var hasilsubtotal = (jp.value*500)+30000;
  var st = document.getElementById("hSubTot");

    st.innerHTML = hasilsubtotal;
  
  var hasilpajak =  hasilsubtotal*(10/100);
  var pjk = document.getElementById("hPajak");

    pjk.innerHTML = hasilpajak;
  
  var hasilbayar =  hasilsubtotal+hasilpajak;
  var hb = document.getElementById("hBayar");

    hb.innerHTML = hasilbayar;
}
  
  



////////////////////////////////////////////////////////////////////////////////////////////////////////


   else if (cat.value == "apartemen" || cat.value == "Apertemen" && x.value != ""){
    console.log(cat.value);
     var s = ''
     var n  = ''
     var a = ''
     var t = ''
     
     for(var i = 1; i <= jp.value; i++) {
    
      n += i;

      n += '<br>';
      var hasil = document.getElementById("no");

      hasil.innerHTML = n;
    }
     for(var i = 1; i <= jp.value; i++) {
    
        s += (i)*750;
    
        s += '<br>';
        var hasil = document.getElementById("out");

        hasil.innerHTML = s;
     }
     for(var i = 1; i <= jp.value; i++) {
    
      a += 50000;

      a += '<br>';
      var hasil = document.getElementById("abodemen");

      hasil.innerHTML = a;
      

   }
   for(var i = 1; i <= jp.value; i++) {
    
    t += (i)*750+50000;

    t += '<br>';
    var hasil = document.getElementById("subTot");

    hasil.innerHTML = t;
    
  }
  var no = document.getElementById("nama");
  var h
  h = x.value;
  no.innerHTML = h;
  var hasilsubtotal = (jp.value*750)+50000;
  var st = document.getElementById("hSubTot");

    st.innerHTML = hasilsubtotal;
  
  var hasilpajak =  hasilsubtotal*(15/100);
  var pjk = document.getElementById("hPajak");

    pjk.innerHTML = hasilpajak;
  
  var hasilbayar =  hasilsubtotal+hasilpajak;
  var hb = document.getElementById("hBayar");

    hb.innerHTML = hasilbayar;
}
  

   
////////////////////////////////////////////////////////////////////////////////////////////////////////


   else if (cat.value == "industri" || cat.value == "Industri" && x.value != ""){
    console.log(cat.value);
     var s = ''
     var n  = ''
     var a = ''
     var t = ''
     
     for(var i = 1; i <= jp.value; i++) {
    
      n += i;

      n += '<br>';
      var hasil = document.getElementById("no");

      hasil.innerHTML = n;
    }
     for(var i = 1; i <= jp.value; i++) {
    
        s += (i)*1000;
    
        s += '<br>';
        var hasil = document.getElementById("out");

        hasil.innerHTML = s;
     }
     for(var i = 1; i <= jp.value; i++) {
    
      a += 75000;

      a += '<br>';
      var hasil = document.getElementById("abodemen");

      hasil.innerHTML = a;
      

   }
   for(var i = 1; i <= jp.value; i++) {
    
    t += (i)*1000+75000;

    t += '<br>';
    var hasil = document.getElementById("subTot");

    hasil.innerHTML = t;
    
  }
  var no = document.getElementById("nama");
  var h
  h = x.value;
  no.innerHTML = h;
  var hasilsubtotal = (jp.value*1000)+75000;
  var st = document.getElementById("hasilsubtotal");

    st.innerHTML = hasilsubtotal;
  
  var hasilpajak =  hasilsubtotal*(20/100);
  var pjk = document.getElementById("hPajak");

    pjk.innerHTML = hasilpajak;
  
  var hasilbayar =  hasilsubtotal+hasilpajak;
  var hb = document.getElementById("hBayar");

    hb.innerHTML = hasilbayar;
   }


////////////////////////////////////////////////////////////////////////////////////////////////////////
   else if (cat.value == "villa" || cat.value == "Villa" && x.value != ""){
    console.log(cat.value);
     var s = ''
     var n  = ''
     var a = ''
     var t = ''
     
     for(var i = 1; i <= jp.value; i++) {
    
      n += i;

      n += '<br>';
      var hasil = document.getElementById("no");

      hasil.innerHTML = n;
    }
     for(var i = 1; i <= jp.value; i++) {
    
        s += (i)*1250;
    
        s += '<br>';
        var hasil = document.getElementById("out");

        hasil.innerHTML = s;
     }
     for(var i = 1; i <= jp.value; i++) {
    
      a += 100000;

      a += '<br>';
      var hasil = document.getElementById("abodemen");

      hasil.innerHTML = a;
      

   }
   for(var i = 1; i <= jp.value; i++) {
    
    t += (i)*1250+100000;

    t += '<br>';
    var hasil = document.getElementById("subTot");

    hasil.innerHTML = t;
    
  }
  var no = document.getElementById("nama");
  var h
  h = x.value;
  no.innerHTML = h;
  var hasilsubtotal = (jp.value*1250)+100000;
  var st = document.getElementById("hSubTot");

    st.innerHTML = hasilsubtotal;
  
  var hasilpajak =  hasilsubtotal*(25/100);
  var pjk = document.getElementById("hPajak");

    pjk.innerHTML = hasilpajak;
  
  var hasilbayar =  hasilsubtotal+hasilpajak;
  var hb = document.getElementById("hBayar");

    hb.innerHTML = hasilbayar;
   }
 
  });