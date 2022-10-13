var statuses = {
    start: 0,
    running: 1,
    finish: 2
};
console.log(statuses.finish);
var StatusEnum;
(function (StatusEnum) {
    StatusEnum["Start"] = "Start";
    StatusEnum["Running"] = "Running";
    StatusEnum["Finish"] = "Finish";
})(StatusEnum || (StatusEnum = {}));
var runStatus = StatusEnum.Running;
runStatus = StatusEnum.Finish;
console.log(StatusEnum);
console.log(StatusEnum.Running);
