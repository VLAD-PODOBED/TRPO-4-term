//task 1
const array: [id:number,name:string,group:number][] = [  //
    [ 1,  'Vasya',  10],
    [ 2,  'Ivan',  11],
    [ 3,  'Masha',  12],
    [ 4,  'Petya',  10],
    [ 5,  'Kira',  11]
]

// task 2
type CarsType = {manufacturer : string, model : string}; //
let car: CarsType = {manufacturer:'manufacturer',model:'model'};
//car.manufacturer = 'manufacturer';
//car.model = 'model';

//task 3 nn
type ArrayCarsType = {cars:CarsType[]}; //

const car1: CarsType = {manufacturer:'manufacturer',model:'model'};
//car1.manufacturer= 'manufacturer';
//car1.model = 'model';

const car2: CarsType = {manufacturer:'manufacturer',model:'model'};
//car2.manufacturer= 'manufacturer';
//car2.model = 'model';

const arrayCars: Array<ArrayCarsType> = [{
    cars:[car1, car2]
}];

//task 4

type MarkFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type DoneType = true | false;
type MarkType = {
    subject : string,
    mark : MarkFilterType,
    done : DoneType,
}

type GroupFilterType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11| 12;

type StudentType = {
    id : number,
    name : string,
    group : GroupFilterType,
    marks : Array<MarkType>
}

type GroupType = {
    students? : Array<StudentType>,
    studentsFilter?: (group: number) => Array<StudentType>, //фильтр по группе
    marksFilter?: (mark : number)  => Array<StudentType>, //фильтр по  оценке
    deleteStudents? : (id : number ) => void, //// удалить студента по id из  исходного массива

    mark? : MarkFilterType,
    group? : GroupFilterType
}

let groupType : GroupType = {};

groupType.students = new Array<StudentType>();
groupType.students.push({id: 1, name: "Vlad", group: 10, marks : [{subject: "ts", mark: 2,done : false}] });
groupType.students.push({id: 2, name: "Nikita", group: 10, marks : [{subject: "ts", mark: 1,done : false}] });
groupType.students.push({id: 3, name: "Danila", group: 9, marks : [{subject: "ts", mark: 2,done : false}] });

groupType.studentsFilter = (group : number) =>{

    if(typeof groupType.students === 'undefined' ){
        throw new Error('нет студентов');
    }
    const allStudents : Array<StudentType> = groupType.students;
    let filteredStudents : Array<StudentType> = new Array<StudentType>(); 
    for (const student of allStudents) {
        if(student.group === group){
            filteredStudents.push(student);
        }
    }
    return filteredStudents;
}

groupType.marksFilter = (mark : number) =>{
    if(typeof groupType.students === 'undefined' ){
        throw new Error('нет студентов');
    }
    const allStudents : Array<StudentType> = groupType.students;
    let filteredStudents : Array<StudentType> = new Array<StudentType>(); 
    for (const student of allStudents) {
        for (const studentMark of student.marks) {
            if(studentMark.mark === mark)
            {
                filteredStudents.push(student);
                break;
            }
        }
    }
    return filteredStudents;
}

groupType.deleteStudents = (id : number) => {
    if(typeof groupType.students === 'undefined' ){
        throw new Error('нет студентов');
    }
    let filteredStudents : Array<StudentType> = new Array<StudentType>(); 
    for (const student of groupType.students) {
        if(student.id !== id)
        {
            filteredStudents.push(student);
        }
    }
    groupType.students = filteredStudents;
}
console.log("Фильтр по группе:");
console.log(groupType.studentsFilter(9));
console.log("------------------------");
console.log("Фильтр по оценке:");
console.log(groupType.marksFilter(1));
console.log("------------------------");
groupType.deleteStudents(1);
console.log("Конечный список после удаления:");
console.log(groupType.students);

