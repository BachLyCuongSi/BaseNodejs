function sweetalert_success(mess = "Thành công !") {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: mess,
        showConfirmButton: false,
        timer: 1500
    })
}

function sweetalert_err(mess = "Thất bại !") {
    Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: mess,
        showConfirmButton: false,
        timer: 1500
    })
}

function login() {
    let userlogin = {
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value
    }

    $.ajax({
        url: '/login',
        method: 'POST',
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify(userlogin),
        success: function(res) {
            if (res.status == 1) {
                sweetalert_success(res.message);
            } else {
                sweetalert_err(res.message)
            }
        },
        error: function(request, status, error) {
            alert("Not Call API");
        }
    })
}