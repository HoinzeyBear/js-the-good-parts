//Array concat
var ca = [1, 2, 3]
var cb = [4, 5, 6]
var cc = ca.concat(cb)     //1, 2, 3, 4, 5, 6

//Array join
var ja = ["D","A","R","R","E","N"]
var jb = a.join()       //DARREN

//Array pop
var pa = ['a', 'b', 'c']
var pb = pa.pop()       //pa = [a,b], pb = 'c'

//Array push
var pushA = [1, 2, 3]
var pushB = [4, 5, 6]

var result = pushA.push(pushB)      //Result is 4 - pushA = [1, 2, 3, [4, 5, 6]]

//Array reverse
var reverseA = [1, 2, 3]
var reverseB = a.reverse()      // Both are now [3, 2, 1]

//Array shift
var shiftA = [1, 2, 3]
var shiftB = shiftA.shift()     //shiftA = [2, 3] - shiftB = 1

//Array slice
var sliceA = ["a", "b", "c"]
var sliceB = sliceA.slice(0,1)      //sliceB = ["a"]
var sliceC = sliceA.slice(1)        //sliceC = ["b", "c"]

//Array sort

    //sorting strings and numbers
    var sortSimple = ["aa", "bc", "cd", 1, 4, 21, 66]
    sortSimple.sort(function(a, b){
        if(a === b) {
            return 0
        }
        if(typeof a === typeof b) {
            return a < b ? -1 : 1
        }
        return typeof a < typeof b ? -1 : 1
    })  //result = [1, 4, 21, 66, aa, bc, cd]
    

    //sorting objects

    //Function by takes a member name string and an
    //optional minor comparisoon function and returns
    //a comparison function that can be used to sort an
    //array of objects that contain that member. The
    //minor comparison function is used to break ties
    var by = function(name, minor) {
        return function(o, p) {
            var a, b
            if(o && p && typeof o === 'object' && typeof p === 'object') {
                a = o[name]
                b = p[name]
                if(a === b) {
                    return typeof minor === 'function' ? minor(o,p) : 0
                }

                if(typeof a === typeof b) {
                    return a < b ? -1 : 1
                }

                return typeof a < typeof b ? -1 : 1
            } else {
                throw {
                    name: 'Error',
                    message: 'Expected an object when sorting by ' + name
                }
            }
        }
    }

//Array splice
var spliceA = [1, 2, 3, 4, 5]
var spliceB = spliceA.splice(1,1,8)//A = [1, 8, 3, 4, 5]
var spliceC = spliceA.splice(1,1)//A = [1,3,4,5]

//Array unshift
var unshiftA = [1,2,3]
var unshiftB = unshiftA.unshift("T","E","A")//a = [T,E,A,1,2,3] B = 6

//NUMBER

//Number toExponentional
Math.PI.toExponential(0)        //e3+0
Math.PI.toExponential(2)        //3.13e+0
Math.PI.toExponential(16)       //3.141592..e+0

//Number toFixed
Math.PI.toFixed(0)          //3
Math.PI.toFixed(2)          //3.14
Math.PI.toFixed(4)          //3.1415

//Number toString
Math.PI.toString(2)     //11.0010010000...
Math.PI.toString(8)     //3.11037...

//STRING
var string = "String"

//String charAt
string.charAt(0)        //S

//String concat
"C".concat("a", "t")        //Cat

//String indexOf
string.indexOf("tr")        //1
string.indexOf("tr", 4)     //-1







