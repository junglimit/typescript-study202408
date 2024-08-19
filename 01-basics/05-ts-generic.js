var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
// 여기서 ts는 updatedArray가 number[]이라는 것을 추론하지 못한다.
var updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// 따라서 이 코드가 작동된다.
updatedArray.push('hello');
function insertAtBeginning2(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
// 제너릭을 사용하면 any배열이 아닌 T타입배열로 추론하게됨
var updatedArray2 = insertAtBeginning2(demoArray, -1); // [-1, 1, 2, 3]
// updatedArray2.push('hello');
var strArray = insertAtBeginning2(['a', 'b'], 'z');
// strArray.push(100); // (X)
strArray.push('x');
