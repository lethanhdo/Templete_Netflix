//questions
$('#ques1').click(function(){
    $('.ans2').removeClass('ans-show');
    $('.ans3').removeClass('ans-show');
    $('.ans4').removeClass('ans-show');
    $('.ans5').removeClass('ans-show');
    $('.ans1').toggleClass('ans-show');

    $('#plus1').toggleClass('i-rotate');
    $('#plus2').removeClass('i-rotate');
    $('#plus3').removeClass('i-rotate');
    $('#plus4').removeClass('i-rotate');
    $('#plus5').removeClass('i-rotate');

})

$('#ques2').click(function(){
    $('.ans1').removeClass('ans-show');
    $('.ans3').removeClass('ans-show');
    $('.ans4').removeClass('ans-show');
    $('.ans5').removeClass('ans-show');
    $('.ans2').toggleClass('ans-show');

    $('#plus2').toggleClass('i-rotate');
    $('#plus1').removeClass('i-rotate');
    $('#plus3').removeClass('i-rotate');
    $('#plus4').removeClass('i-rotate');
    $('#plus5').removeClass('i-rotate');
})

$('#ques3').click(function(){
    $('.ans2').removeClass('ans-show');
    $('.ans1').removeClass('ans-show');
    $('.ans4').removeClass('ans-show');
    $('.ans5').removeClass('ans-show');
    $('.ans3').toggleClass('ans-show');

    $('#plus3').toggleClass('i-rotate');
    $('#plus2').removeClass('i-rotate');
    $('#plus1').removeClass('i-rotate');
    $('#plus4').removeClass('i-rotate');
    $('#plus5').removeClass('i-rotate');
})

$('#ques4').click(function(){
    $('.ans2').removeClass('ans-show');
    $('.ans3').removeClass('ans-show');
    $('.ans1').removeClass('ans-show');
    $('.ans5').removeClass('ans-show');
    $('.ans4').toggleClass('ans-show');

    $('#plus4').toggleClass('i-rotate');
    $('#plus2').removeClass('i-rotate');
    $('#plus3').removeClass('i-rotate');
    $('#plus1').removeClass('i-rotate');
    $('#plus5').removeClass('i-rotate');
})

$('#ques5').click(function(){
    $('.ans2').removeClass('ans-show');
    $('.ans3').removeClass('ans-show');
    $('.ans4').removeClass('ans-show');
    $('.ans1').removeClass('ans-show');
    $('.ans5').toggleClass('ans-show');

    $('#plus5').toggleClass('i-rotate');
    $('#plus2').removeClass('i-rotate');
    $('#plus3').removeClass('i-rotate');
    $('#plus4').removeClass('i-rotate');
    $('#plus1').removeClass('i-rotate');
})

//change languages
$('.globe-button').click(function(){
    $('.globe-options').toggleClass('globe-options-show');
})

$('.vietnam').hover(function(){
    $('.english').removeClass('active');
    $('.vietnam').addClass('active');
})
$('.english').hover(function(){
    $('.vietnam').removeClass('active');
    $('.english').addClass('active');
})

//change language to Vietnam
$('#vietnam').click(function(){
    $('#title-web').text('Netflix Việt Nam – Xem chương trình truyền hình trực tuyến, Xem phim trực tuyến');
    $('#sign-in').text('Đăng nhập');
    $('#unlimited').text('Chương trình truyền hình, phim không giới hạn và nhiều nội dung khác.');
    $('#anywhere').text('Xem ở mọi nơi. Hủy bất kỳ lúc nào.');
    $('.ready').text('Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt lại tư cách thành viên của bạn.');
    $('.started').text('BẮT ĐẦU');
    $('#enjoy').text('Thưởng thức trên TV của bạn.');
    $('#watch').text('Xem trên TV thông minh, Playstation, Xbox, Chromecast, Apple TV, đầu phát Blu-ray và nhiều thiết bị khác.');
    $('#stranger').text('Cậu bé mất tích');
    $('#downloading').text('Đang tải xuống...');
    $('#download').text('Tải xuống nội dung để xem ngoại tuyến.');
    $('#save').text('Lưu những nội dung yêu thích một cách dễ dàng và luôn có thứ để xem.');

    $('#everywhere').text('Xem ở mọi nơi.');
    $('#stream').text('Phát trực tuyến không giới hạn phim và chương trình truyền hình trên điện thoại, máy tính bảng, máy tính xách tay và TV mà không phải trả thêm phí.');
    $('#frequently').text('Câu hỏi thường gặp');
    $('#downloading').text('Đang tải xuống...');


    $('#p-ques1').text('Netflix là gì?');
    $('#p-ans1').text('Netflix là dịch vụ phát trực tuyến mang đến đa dạng các loại chương trình truyền hình, phim, anime, phim tài liệu đoạt giải thưởng và nhiều nội dung khác trên hàng nghìn thiết bị có kết nối Internet. Bạn có thể xem bao nhiêu tùy thích, bất cứ lúc nào bạn muốn mà không gặp phải một quảng cáo nào – tất cả chỉ với một mức giá thấp hàng tháng. Luôn có những nội dung mới để bạn khám phá và những chương trình truyền hình, phim mới được bổ sung mỗi tuần!');
    $('#p-ques2').text('Tôi phải trả bao nhiêu tiền để xem Netflix?');
    $('#p-ans2').text('Xem Netflix trên điện thoại thông minh, máy tính bảng, TV thông minh, máy tính xách tay hoặc thiết bị phát trực tuyến, chỉ với một khoản phí cố định hàng tháng. Các gói dịch vụ với mức giá từ 180.000 ₫ đến 260.000 ₫ mỗi tháng. Không phụ phí, không hợp đồng.');
    $('#p-ques3').text('Tôi có thể xem ở đâu?');
    $('#p-ans3').text('Xem mọi lúc, mọi nơi và không bị giới hạn số lượng thiết bị. Đăng nhập bằng tài khoản Netflix của bạn để xem ngay trên trang web netflix.com từ máy tính cá nhân, hoặc trên bất kỳ thiết bị nào có kết nối Internet và có cài đặt ứng dụng Netflix, bao gồm TV thông minh, điện thoại thông minh, máy tính bảng, thiết bị phát đa phương tiện trực tuyến và máy chơi game. Bạn cũng có thể tải xuống các chương trình yêu thích bằng ứng dụng trên iOS, Android hoặc Windows 10. Sử dụng các tệp tải xuống để xem trong khi di chuyển và khi không có kết nối Internet. Mang Netflix theo bạn đến mọi nơi.');
    $('#p-ques4').text('Làm thế nào để hủy?');
    $('#p-ans4').text('Netflix rất linh hoạt. Không có hợp đồng phiền toái, không ràng buộc. Bạn có thể dễ dàng hủy tài khoản trực tuyến chỉ trong hai cú nhấp chuột. Không mất phí hủy – bạn có thể bắt đầu hoặc ngừng tài khoản bất cứ lúc nào.');
    $('#p-ques5').text('Tôi có thể xem gì trên Netflix?');
    $('#p-ans5').text('Netflix có một thư viện phong phú gồm các phim truyện, phim tài liệu, chương trình truyền hình, anime, tác phẩm giành giải thưởng của Netflix và nhiều nội dung khác. Xem không giới hạn bất cứ lúc nào bạn muốn.');
    
    $('#contact').text('Bạn có câu hỏi? Liên hệ với chúng tôi.');
    
    $('#span-1').text('Câu hỏi thường gặp');
    $('#span-2').text('Trung tâm trợ giúp');
    $('#span-3').text('Tài khoản');
    $('#span-4').text('Trung tâm đa phương tiện');
    $('#span-5').text('Quan hệ với nhà đầu tư');
    $('#span-6').text('Việc làm');
    $('#span-7').text('Các cách xem');
    $('#span-8').text('Điều khoản sử dụng');
    $('#span-9').text('Quyền riêng tư');
    $('#span-10').text('Tùy chọn cookie');
    $('#span-11').text('Thông tin doanh nghiệp');
    $('#span-12').text('Liên hệ với chúng tôi');
    $('#span-13').text('Kiểm tra tốc độ');
    $('#span-14').text('Thông báo pháp lý');
    $('#span-15').text('Tác phẩm của Netflix');

    $('#L').text('Tiếng Việt');

    $('.globe-options').removeClass('globe-options-show');

    // $('#vietnam').addClass('active');
    // $('#english').removeClass('active');


    $('.Footer-bot').text('Netflix Việt Nam');

    $('.form-control').attr("placeholder", "Địa chỉ Email");
})

$('#english').click(function(){
    $('.globe-options').removeClass('globe-options-show');
    location.reload();
})
