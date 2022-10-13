const statuses = {
    start : 0,
    running : 1,
    finish : 2
}

console.log(statuses.finish);

enum StatusEnum{
    Start = "Start" ,
    Running = "Running",
    Finish = "Finish"
}

interface Runner {
    id : number,
    status : StatusEnum
}

let runStatus : StatusEnum = StatusEnum.Running;
runStatus = StatusEnum.Finish;

console.log(StatusEnum);
console.log(StatusEnum.Running);
