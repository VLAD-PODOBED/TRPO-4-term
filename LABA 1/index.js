"use strict";
exports.__esModule = true;
exports.Challenge = void 0;
///task 1
function createPhoneNumber(arr) {
    console.log(arr.join('').replace(/(...)(...)(.*)/, '($1) $2-$3'));
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
///task 2
var Challenge = /** @class */ (function () {
    function Challenge() {
    }
    Challenge.solution = function (number) {
        if (number < 0) {
            console.log("Отрицательное число:" + number);
            return 0;
        }
        var sum = 0;
        for (var i = 0; i < number; ++i) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        console.log(sum);
        return (sum);
    };
    return Challenge;
}());
exports.Challenge = Challenge;
Challenge.solution(10);
///task 3
function integer(a, k) {
    for (var i = 0; i < k; i++)
        a.unshift(a.pop());
    console.log(a);
}
integer([1, 2, 3, 4, 5, 6, 7], 3);
///task 4
function mas(nums1, nums2) {
    var p = nums1.concat(nums2);
    p.sort();
    var sum = 0;
    for (var i = 0; i < p.length; i++) {
        sum += p[i];
    }
    //console.log(p);
    console.log(sum / p.length);
}
mas([1, 3], [2, 4]);
///task 5
function Sudoku(array) {
    var set = new Set();
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[0].length; j++) {
            var value = array[i][j];
            if (value !== ".") {
                var row = "".concat(value, " \u0432 \u0440\u044F\u0434\u0443 ").concat(i);
                var column = "".concat(value, " \u0432 \u043A\u043E\u043B\u043E\u043D\u043A\u0435 ").concat(j);
                var box = "".concat(value, " \u0432 \u043A\u043B\u0435\u0442\u043A\u0435 3x3 ").concat(Math.floor(i / 3), ", ").concat(Math.floor(j / 3));
                console.log("".concat(row, ", ").concat(column, ", ").concat(box));
                if (set.has(row) || set.has(column) || set.has(box)) {
                    console.log("error");
                    return false;
                }
                else {
                    set.add(row);
                    set.add(column);
                    set.add(box);
                }
            }
        }
    }
    return true;
}
;
Sudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]]);
