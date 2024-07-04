function signIn() {
    var user = document.getElementById("user").value;
    var pw = document.getElementById("pw").value;

    if (user === "" || pw === "") {
        alert("請輸入帳號和密碼");
        return false;
      }

    fetch('user.json')
      .then(response => response.json())
      .then(data => {
        var validUser = false;
        for (var i = 0; i < data.length; i++) {
          if (user === data[i].user && pw === data[i].pw) {
            validUser = true;
            break;
          }
        }

        if (!validUser) {
          alert("帳號和密碼不正確");
        } else {
          window.location.href = "cutscene.html";
        }
      })
      .catch(error => {
        console.error('讀取 JSON 檔案時發生錯誤：', error);
      });
  }