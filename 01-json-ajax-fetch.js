// // JSON là js object notation
// // là một chuỗi được viết dưới dạng js object
// // dùng để lưu trữ và trao đổi dữ liệu
// // chỉ lưu được: string, number, array, object, boolean
// // dể dàng sử dụng được ở hầu hết các ngôn ngữ
// // có 2 thao tác chính: JSON.parse | JSON.stringify
// const obj1 = {
//     mane: "Thức",
//     age: 19,
//     status: "Đần"
// }

// let myJson = JSON.stringify(obj1)
// // JSON không lưu tữu hàm hay method


// //AJAX: Asynchronous javaScript and XML
// //      không phải ngôn ngữ lập trình (rất nhiều người mới bị lậm)
// //      AJAX chỉ là 1 sự kết hợp của 
// // XMLHttpRequest object có sẳn trên trình duyệt
// //          (dùng để gữi và nhận data từ web server)
// //          // Js và HTML DOM (để sử dụng hoặc hiển thị data)

// /*
//         cái tên ajax bị lầm là ứng dụng dùng ajax sẽ sử dụng XML(một kiểu data như json nhưng
//         để gữi và nhận dữ liệu                                   (phức tạp hơn)
//         nhưng trên thực tế chúng ta dùng text và json để trao đổi dữ liệu
// */

// //      AJAX giúp chúng ta đọc dữ liệu từ server trả vể
// //                         gữi dữ liệu lên server ở chế độ ngầm
// //                         cập nhật trang web mà không cần reload lại trang
// //                         là nền tảng phát triển của React, Angular, Vue



// //-----
// //cách AJAX hoạt động
// //xem hình ajax.gif

// //
// //XMLHttpRequest(XHR): là constructor function: 
// //                dùng để giao tiếp với server
// //                XHR là 1 webAPIs nên chỉ có trên môi trường trình duyệt
// //                không xuất hiện ở Node.js

// //tạo 1 XHR object
// const xhr = new XMLHttpRequest();
// //xhr.onreadystatechange sẽ chạy khi readystate thay đổi
// //readystate: là 1 trạng thái khi mà ta kết nối với server thì trạng thái này thay đổi(0,1,2,3,4)
// //0:request chưa khởi tạo
// //1:kết nối với server đã được thiết lập
// //2:request được server tiếp nhận
// //3:đang xử lý request
// //4:request kết thúc và response đã sẵn sáng để dùng

// // xhr.open(method , api , statusOfAsync)
// // method: get , post , put , delete
// // statusOfAsync: có chạy bất đồng đọ hay không
// // xhr.open("GET" , "https://6336fb2765d1e8ef26778a6c.mockapi.io/users" , true)
// // xhr.send()
// xhr.open("POST", "https://6336fb2765d1e8ef26778a6c.mockapi.io/users", true)
// // header
// xhr.setRequestHeader('Content-Type', 'application/json')
// // body
// const body = {
//     name: "Thức nghệ sĩ",
//     yob: "2003"
// }
// xhr.send(JSON.stringify(body))
// //---------------
// //dùng XMLHttpRequest để xử lý AJAX được coi là cách cổ xưa nhất và rườm rà nhất
// //ngày nay chúng ta có rất nhiều lựa chọn mạnh mẽ để xử lý AJAX như:
// //  JQUERY: cung cấp hàm gọi Ajax tiện lợi như load,ajax,get,getJSON
// //  FetchAPI: Những trình duyệt ngày nay cũng có: FetchAPI với nhiều tính năng nâng cao
// //              và cú pháp dể sử dụng hơn XHR
// //  Phổ biến nhất là AXIOS: thư viện chuyên dụng cho việc xử lý Ajax cũng như gọi API
// //      cung cấp nhiều tính năng hay,dùng cho cả môi trường trình duyệt và Node.js
// //                                  (nếu trình duyệt nó sẽ dựa trên XHR| node sẽ là HTTP Interface)

// //đối với mình, thì mình k xài jquery :)) nói đúng hơn là nó cùi chết mẹ
// //nên mình sẽ dùng fetchAPI và Axios
// // FetchAPI: là 1 api đơn giản cung cấp cho ta khả năng 
// // nhận và gửi request đến server
// // XHR được dùng kèm với function nên nếu xử lý bất đồng bộ phải dùng callback
// // Fetch bản thân nó được xem là 1 promise
// // nên sử lí bất đồng bộ dùng .then .catch
// //      promise có thể kết hợp với async await

// demo get data từ server bằng fetch
// fetch("https://6336fb2765d1e8ef26778a6c.mockapi.io/users")
//     .then(respone => {
//         if (respone.ok) {
//             return respone.json();
//         } else {
//             throw new Error(respone.statusText);
//         }
//     }).then(value => {
//         console.log("Successfully get data", value);
//     }).catch(value => {
//         console.log("Failed to get data" , value);
//     })
// lập tức lên sv và lấy dữ liệu về
// sv không bao giờ trả ra lỗi (fetch luôn trả resolve không trả reject)
// respone: là 1 gói hàng của sv
// th1: respone không cho data => respone có trạng thái là not oke| data null
// th2: respone cho data => respone có trạng thái là ok| có data


// demo gui du lieu len sv
fetch("https://6336fb2765d1e8ef26778a6c.mockapi.io/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: "Thức nghệ sĩ",
            yob: 2003
        })
    })
    .then(respone => {
        if (respone.ok) {
            return respone.json();
        } else {
            throw new Error(respone.statusText);
        }
    }).then(value => {
        console.log("Successfully post data", value);
    }).catch(value => {
        console.log("Failed to post data", value);
    })