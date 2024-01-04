function signup(event) {
  event.preventDefault();

  var TenDN = document.getElementById("TenDN").value;
  var sdt = document.getElementById("sdt").value;
  var matkhau = document.getElementById("matkhau").value;
  var nhaplaimatkhau = document.getElementById("nhaplaimatkhau").value;

  var user = {
      TenDN: TenDN,
      Sdt: sdt,
      Matkhau: matkhau,
      nhaplaimatkhau: nhaplaimatkhau,
  };

  if (matkhau !== nhaplaimatkhau) {
      document.getElementById("nhaplaimatkhau").style.border = "1px solid red";
      document.getElementById("unmatch").style.visibility = "visible";
  } else if (TenDN.trim() === "") {
      document.getElementById("TenDNerror").style.visibility = "visible";
      document.getElementById("TenDN").style.border = "1px solid red";
  } else if (sdt.trim() === "") {
      document.getElementById("Sdterror").style.visibility = "visible";
      document.getElementById("sdt").style.border = "1px solid red";
  } else if (matkhau.trim() === "") {
      document.getElementById("Passerror").style.visibility = "visible";
      document.getElementById("matkhau").style.border = "1px solid red";
  } else if (nhaplaimatkhau.trim() === "") {
      document.getElementById("unmatch").style.visibility = "visible";
      document.getElementById("nhaplaimatkhau").style.border = "1px solid red";
  } else {
      var json = JSON.stringify(user);
      localStorage.setItem(TenDN, json);
      alert("Đăng Ký Thành Công");
      window.location.href="login.html";
  }
}
/*-------------------------------------------------------------*/
function login(event) {
  event.preventDefault();

  var TenDN = document.getElementById("TenDN").value;
  var passDN = document.getElementById("passDN").value;

  var user = localStorage.getItem(TenDN);

  if (user === null) {
      alert("Tên đăng nhập hoặc Mật khẩu sai");
  } else {
      var data = JSON.parse(user);

      if (TenDN === data.TenDN && passDN === data.Matkhau) {
          alert("Đăng nhập thành công");
          window.location.href = "admin-SP.html";
      } else {
          alert("Đăng nhập thất bại");
      }
  }
}