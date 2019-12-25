var kvArray = [{key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}];
//**Tạo mảng mới từ mảng object đã có với giá trị mảng là value */
//---------------------------------------------------------------//
//Hàm map nhận vào một callback function, sau đó áp dụng lên từng phần tử
//trong mảng hiện có và trả về mảng mới có số lượng phần tử bằng số lượng
//của mảng ban đầu
//--Cách viết 1: hàm callback viết theo cách thông thường
var reformattedArray = kvArray.map(function(obj){ 
    return obj.value;
});
//--Cách viết 2: hàm callback nhận vào một tham số là obj
var reformattedArray2 = kvArray.map((obj)=>{ 
    return obj.value;
});
//--Cách viết 3: hàm callback nhận vào một tham số là obj, một tham số có thể bỏ
//--qua dấu()
var reformattedArray3 = kvArray.map(obj=>{ 
    return obj.value;
});
//--Cách viết 4: hàm callback không có tham số
// var reformattedArray4 = kvArray.map(()=>{ 
//     return obj.value;
// });
//--Cách viết 5:

console.log(reformattedArray)