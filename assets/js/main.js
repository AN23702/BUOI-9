console.log("Hello world"); /*Cú pháp JS giúp hiểm thị đoạn text trên console*/

/*Khai báo biến
+ const, let, var
    const: sử dụng khi biến ít được cập nhật hay thay đổi
    let, var: sử dụng khi biến được thay đổi và cập nhật thường xuyên liên tục, nên dùng let nhiều hơn*/

/*Cách 1: Khai báo và gán giá trị trực tiếp cho biến
Nên dùng cách này*/ 
let name = "Nguyenduc An";

console.log(name); /*Hiển thị nó ra bên ngoài console*/

/*Cách 2: Khai báo biến và không gán giá trị biến*/
// var age;
// age = "19";

// console.log(age);

/*Quy tắc đặt tên biến
+ Đặt theo kiểu camelCase
+ Chứa các ký tự chữ, số,_ và $
+ Ký tự đầu tiên không được là số
+ Có phân biệt hoa thường
+ Không trùng với các từ khóa của JS có sẵn*/

/*Kiểm tra dữ liệu của biến*/
const age = 22;
const email = "nguyenducan23702@gmail.com";

console.log(typeof(age)) /*Biến là số*/
console.log(typeof(email)) /*Biến là chữ*/