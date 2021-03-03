Function.prototype.method = function(name, func) {
    this.prototype[name] = func
    return this
}

//inheritance

//Object Specifiers

// var myObject = maker(f, l, m, l, c, s)// <-- Instead of this

// var thatObject = maker({// <-- This
//     first: f,
//     last: l,
//     middle: m,
//     state: s,
//     city
// })

//Prototypal inheritance

//differential inheritance
var myMammal = {
    name: "Herb",
    get_name: function() {
        return this.name
    },
    says: function() {
        return this.saying || ''
    }
}

var myCat = Object.create(myMammal)
console.log(myCat.get_name())
console.log(myCat.says())

myCat.name = "Sweetie"
myCat.saying = "meow"
myCat.purr = function(n) {
    var i, s = ""
    for(i = 0; i < n; i++) {
        if(s) {
            s += "-"
        }
        s += "r"
    }
    return s
}
myCat.get_name = function() {
    return this.says() + " " + this.get_name() + " " + this.says()
}
console.log(myCat.says())
console.log(myCat.purr(3))

//Functional inheritance

var mammal = function(spec) {
    var that = {}

    that.get_name = function() {
        return spec.name
    }

    that.says = function() {
        return spec.saying || ''
    }

    return that
}

var joeyMammal = mammal({
    name: "Joey",
    saying: "Its a me"
})

console.log(joeyMammal.get_name())
console.log(joeyMammal.says())

//Handling super methods

var cat = function(spec) {
    spec.saying = spec.saying || 'meow'
    var that = mammal(spec)
    that.purr = function() {
        return "purrr"
    }
    that.get_name = function() {
        return that.says() + " " + spec.name + " " + that.says()
    }
    return that
}

Object.method("superior", function (name) {
    var that = this
    var method = that[name]
    return function() {
        return method.apply(that, arguments)
    }
})

var coolcat = function(spec) {
    var that = cat(spec)
    var super_get_name = that.superior("get_name")
    that.get_name = function(n) {
        return "like " + super_get_name() + " baby"
    }
    return that
}

var myCoolCat = coolcat({name: "bix"})
console.log(myCoolCat.get_name())


//Parts

var eventuality = function(that) {
    var registry = {}

    that.fire = function(event) {
        var array, func, handler, i, 
            type = typeof event === 'string' ? event : event.type

            //If an array of handlers exist for this event then
            //loop through it and execute the handlers in order
            if(registry.hasOwnProperty(type)) {
                array = registry[type]
                for(i=0; i < array.length; i++) {
                    handler = array[i]

                    //a handler record contains a method and an optional
                    //array of parameters. If the method is a name, look
                    //up the function

                    func = handler.method
                    if(typeof func === 'string') {
                        func = this[func]
                    }

                    //Invoke a handler. If the record contained
                    //parameters, then pass them. Otherwise, pass the
                    //event object

                    func.apply(this, handler.parameters || [event])
                }
            }
            return this
    }

    that.on = function(type, method, parameters) {
        //register an event. Make a handler record. Put it
        //in a handler array, making one if it doesn't yet
        //exist for this type

        var handler = {
            method: method,
            parameters: parameters
        }
        if(registry.hasOwnProperty(type)) {
            registry[type].push(handler)
        } else {
            registry[type] = [handler]
        }
        return this
    }
    return that
}