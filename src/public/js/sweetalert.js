function sweetalert_success(mess = "Thành công !") {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: mess,
        showConfirmButton: false,
        timer: 1500
    }, reload())
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