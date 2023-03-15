//task 1
var array = [
    [1, 'Vasya', 10],
    [2, 'Ivan', 11],
    [3, 'Masha', 12],
    [4, 'Petya', 10],
    [5, 'Kira', 11]
];
var car = { manufacturer: 'manufacturer', model: 'model' };
var car1 = { manufacturer: 'manufacturer', model: 'model' };
//car1.manufacturer= 'manufacturer';
//car1.model = 'model';
var car2 = { manufacturer: 'manufacturer', model: 'model' };
//car2.manufacturer= 'manufacturer';
//car2.model = 'model';
var arrayCars = [{
        cars: [car1, car2]
    }];
var groupType = {};
groupType.students = new Array();
groupType.students.push({ id: 1, name: "Vlad", group: 10, marks: [{ subject: "ts", mark: 2, done: false }] });
groupType.students.push({ id: 2, name: "Nikita", group: 10, marks: [{ subject: "ts", mark: 1, done: false }] });
groupType.students.push({ id: 3, name: "Danila", group: 9, marks: [{ subject: "ts", mark: 2, done: false }] });
groupType.studentsFilter = function (group) {
    if (typeof groupType.students === 'undefined') {
        throw new Error('нет студентов');
    }
    var allStudents = groupType.students;
    var filteredStudents = new Array();
    for (var _i = 0, allStudents_1 = allStudents; _i < allStudents_1.length; _i++) {
        var student = allStudents_1[_i];
        if (student.group === group) {
            filteredStudents.push(student);
        }
    }
    return filteredStudents;
};
groupType.marksFilter = function (mark) {
    if (typeof groupType.students === 'undefined') {
        throw new Error('нет студентов');
    }
    var allStudents = groupType.students;
    var filteredStudents = new Array();
    for (var _i = 0, allStudents_2 = allStudents; _i < allStudents_2.length; _i++) {
        var student = allStudents_2[_i];
        for (var _a = 0, _b = student.marks; _a < _b.length; _a++) {
            var studentMark = _b[_a];
            if (studentMark.mark === mark) {
                filteredStudents.push(student);
                break;
            }
        }
    }
    return filteredStudents;
};
groupType.deleteStudents = function (id) {
    if (typeof groupType.students === 'undefined') {
        throw new Error('нет студентов');
    }
    var filteredStudents = new Array();
    for (var _i = 0, _a = groupType.students; _i < _a.length; _i++) {
        var student = _a[_i];
        if (student.id !== id) {
            filteredStudents.push(student);
        }
    }
    groupType.students = filteredStudents;
};
console.log("Фильтр по группе:");
console.log(groupType.studentsFilter(9));
console.log("------------------------");
console.log("Фильтр по оценке:");
console.log(groupType.marksFilter(1));
console.log("------------------------");
groupType.deleteStudents(1);
console.log("Конечный список после удаления:");
console.log(groupType.students);
