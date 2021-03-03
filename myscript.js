//Augmenting Types
Function.prototype.method = function(name, func) {
    this.prototype[name] = func
    return this
}

String.method('appendHoyne', function() {
    return this + 'Hoyne'
});

var stringToTrim = "Trailing whitespaces ----                                                  "
document.writeln(stringToTrim.appendHoyne())

Number.method('quadruple', function() {
    return this * 4
})

document.writeln((4).quadruple())
document.writeln('\n')

//closure

//Instead of initializing he object with an object literal, we will 
//initialize the object by calling a function that returns an object 
//literal. That function defines a value variable which is always available 
//to the increment and getValue methods but the functions scope keeps it hidden from the rest of the program
var myObject = (function() {
    var value = 0

    return {
        increment: function (inc) {
            value =+ inc
        },
        getValue: function () {
            return value
        }
    }
}())// notice the '()' -> We are not assigning a function to the object, rather we are assigning the result of invoking that function

var quo = function(status) {
    return {
        get_status: function() {
            return status
        }
    }
}
var myQuo = quo("amazed")
document.writeln(myQuo.get_status())
document.writeln('\n')


var fade = function(node) {
    var level = 1
    var step = function() {
        var hex = level.toString(16)
        node.style.backgroundColor = '#FFFF' + hex + hex
        if(level < 15) {
            level += 1
            setTimeout(step, 100)
        }
    }
    setTimeout(step, 100)
}

fade(document.body);

//Callbacks

// request = prepare_the_request()
// send_request_async(request, function(response){
//     display(resposne)
// })

//Module

String.method('deentityify', function () {

    var entity = {
        quot: '"',
        lt: '<',
        gt: '>'
    }

    return function() {
        // This function is called with the FULL match of the regex and each Group within it
        //In my belo example it is called with:
        //&lt; lt
        //&quot; quot
        //&gt; gt
        return this.replace(/&([^&;]+);/g, function(a, b){ 
            var r = entity[b]
            return typeof r === 'string' ? r : a
        })
    }

}())

document.writeln('&lt;&quot;&gt;'.deentityify() )
document.writeln('\n')

//Produce an object that produces unique strings. 
//A unique string is made up of two parts: 
//a prefix and a sequence number. The object comes with methods for setting the prefix and sequence number,
// and a gensym method that produces unique strings
var serial_maker = function() {
    var prefix = ''
    var sequence = 0
    return {
        set_prefix: function(p) {
            prefix = String(p)
        },
        set_sequence: function(s) {
            sequence = s
        },
        generate_serial() {
            var result = prefix + sequence
            sequence += 1
            return result
        }
    }
}

var builder = serial_maker();
builder.set_prefix('DH')
builder.set_sequence(1000)
var firstSerial = builder.generate_serial

document.writeln(firstSerial())
