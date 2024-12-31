/**
 *
 * @param {*} obj
 * @param {*} constructor
 * @returns
 */
//根据上面注释生成函数，实现instanceof



function myinstanceof(obj,constructor) {}
function myinstanceof(obj,constructor) {
    let proto = Object.getPrototypeOf(obj);
    while (proto){
        if (proto===constructor.prototype){
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    return false;
}
//测试
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

function Car1(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(myinstanceof(auto,Car));
console.log(auto instanceof Car);
console.log(myinstanceof(auto,Car1));
