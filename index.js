// Bài 1
var btnTinh =  document.getElementById("btnRun");
btnTinh.onclick = function(){
    console.log("Đã tính");
    //giá trị người dùng nhập vào Số Ngày Làm
    
    var inputSoNgayLam = document.getElementById("soNgayLam");
    var valueSoNgayLam = inputSoNgayLam.value;
    console.log("valueSoNgayLam: ", valueSoNgayLam);

    //tính tiền lương nhân viên
    var tienLuongNhanVien = 0;
    valueLuongMotNgay = 100000;
    var tienLuongNhanVien = valueSoNgayLam * valueLuongMotNgay;
    console.log("Tiền lương nhân viên là: ", tienLuongNhanVien);

     //hiển thị kết quả ra màn hình
     var spanTienLuongNhanVien = document.getElementById("spanTienLuongNhanVien");
     spanTienLuongNhanVien.innerHTML = tienLuongNhanVien;
};


//Bài 2
var btnTinh =  document.getElementById("btnChay");
btnTinh.onclick = function(){
    console.log("Đã tính ra kết quả");
    //giá trị người dùng nhập vào 5 số thực
    var inputSoThucThuNhat = document.getElementById("soThucThuNhat");
    var valueSoThucThuNhat = inputSoThucThuNhat.value;
    console.log("valueSoThucThuNhat", valueSoThucThuNhat);

    var inputSoThucThuHai = document.getElementById("soThucThuHai");
    var valueSoThucThuHai = inputSoThucThuHai.value;
    console.log("valueSoThucThuHai", valueSoThucThuHai);

    var inputSoThucThuBa = document.getElementById("soThucThuBa");
    var valueSoThucThuBa = inputSoThucThuBa.value;
    console.log("valueSoThucThuBa", valueSoThucThuBa);

    var inputSoThucThuTu = document.getElementById("soThucThuTu");
    var valueSoThucThuTu = inputSoThucThuTu.value;
    console.log("valueSoThucThuTu", valueSoThucThuTu);

    var inputSoThucThuNam = document.getElementById("soThucThuNam");
    var valueSoThucThuNam = inputSoThucThuNam.value;
    console.log("valueSoThucThuNam", valueSoThucThuNam);

    //tính giá trị trung bình của 5 số thực:
    var giaTriTrungBinh = Number(parseFloat(valueSoThucThuNhat)+parseFloat(valueSoThucThuHai)+parseFloat(valueSoThucThuBa)+parseFloat(valueSoThucThuTu)+parseFloat(valueSoThucThuNam))/5;
    console.log("Giá trị Trung Bình của 5 số thực là: ", giaTriTrungBinh);

     //hiển thị kết quả ra màn hình
     var spanGiaTriTrungBinh = document.getElementById("spanGiaTriTrungBinh");
     spanGiaTriTrungBinh.innerHTML = giaTriTrungBinh;
};


//Bài 3
var btnTinh =  document.getElementById("btn-run");
btnTinh.onclick = function(){
    console.log("Đã quy đổi");
    //giá trị người dùng nhập vào Số tiền USD
    var valueSoTienUSD = document.getElementById("soTienUSD").value;
    console.log("valueSoTienUSD", valueSoTienUSD);

    //tính số tiển sau quy đổi từ USD sang VND
    var soTienQuyDoi = 0;
    valueGiaUSDHienNay = 23500;
    var soTienQuyDoi = valueSoTienUSD * valueGiaUSDHienNay;
    console.log("Số Tiền Sau Quy Đổi Từ USD Sang VND là:", soTienQuyDoi);

    //hiển thị kết quả ra màn hình
    var spanSoTienQuyDoi = document.getElementById("spanSoTienQuyDoi");
    spanSoTienQuyDoi.innerHTML = soTienQuyDoi;
};


//Bài 4
var btnTinh =  document.getElementById("btn-chay");
btnTinh.onclick = function(){
    console.log("Đã tính ra được là");
    //giá trị người dùng nhập vào chiều dài và chiều rộng
    var valueChieuDai = document.getElementById("chieuDai").value;
    console.log("valueChieuDai", valueChieuDai);
    var valueChieuRong = document.getElementById("chieuRong").value;
    console.log("valueChieuRong", valueChieuRong);

    //tính chu vi và diện tích hình Chữ Nhật
    var ChuVi = parseFloat(parseFloat(valueChieuDai)+parseFloat(valueChieuRong)) * 2;
    console.log("Chu vi Hình Chữ Nhật là ", ChuVi);

    var DienTich = (parseFloat(valueChieuDai) * parseFloat(valueChieuRong));
    console.log("Diện tích Hình Chữ Nhật là ", DienTich);

    //hiển thị kết quả ra màn hình
    var spanKetQuaChuVi = document.getElementById("spanKetQuaChuVi");
    spanKetQuaChuVi.innerHTML = ChuVi;
    
    var spanKetQuaDienTich = document.getElementById("spanKetQuaDienTich");
    spanKetQuaDienTich.innerHTML = DienTich;
};


//Bài 5
var btnThucHien = document.getElementById("btn-thuchien");
btnThucHien.onclick = function (){
    console.log("Đã tính tổng ra được là");
    //giá trị người dùng nhập vào Một số có 2 chữ số
    var valueSoHaiChuSo = document.getElementById("soHaiChuSo").value;
    console.log("valueSoHaiChuSo",valueSoHaiChuSo);
   
    //tính tổng 2 ký số của số vừa nhập
    var soHangChuc = Math.floor(parseFloat(valueSoHaiChuSo) % 100 /10);
    var soHangDonVi = parseFloat(valueSoHaiChuSo) % 10;
    var Sum = soHangChuc + soHangDonVi;
    console.log("Sum", Sum );
    //hiển thị kết quả ra màn hình
    var spanTongHaiKySo = document.getElementById("spanTongHaiKySo");
    spanTongHaiKySo.innerHTML = Sum;   
}


