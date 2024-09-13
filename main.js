// script.js

// Hiển thị form khi bấm nút "Tạo Hồ Sơ"
function showForm() {
    document.getElementById('profile-form').style.display = 'block';
}

// Thu thập dữ liệu từ form và tạo file JSON khi bấm nút "Tạo Hồ Sơ"
function createProfile() {
    // Thu thập dữ liệu từ form
    const profile = {
        patient: {
            name: document.getElementById('name').value,
            dateOfBirth: document.getElementById('dob').value,
            gender: document.getElementById('gender').value,
            address: document.getElementById('address').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        }
    };

    // Chuyển đổi dữ liệu thành chuỗi JSON
    const json = JSON.stringify(profile, null, 4);

    // Tạo file JSON và tải về
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'profile.json';
    a.click();
    URL.revokeObjectURL(url);

    // Thông báo hoàn tất và ẩn form
    alert("Hồ sơ đã được tạo và lưu dưới dạng file JSON.");
    document.getElementById('profile-form').style.display = 'none';
}

function createNFT() {
    alert("Tạo NFT đã được chọn.");
    // Thực hiện hành động để tạo NFT
}

function connectAccount() {
    alert("Kết nối tài khoản đã được chọn.");
    // Thực hiện hành động để kết nối tài khoản
}
