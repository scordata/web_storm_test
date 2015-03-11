/**
 * Created by adam on 3/11/15.
 */
function A(a){
    this.varA = a;
}


A.prototype = {
    varA : null,
    doSomething : function(){
        console.log("foo");
    }
};

function B(a, b){
    A.call(this, a);
    this.varB = b;
}
B.prototype = Object.create(A.prototype, {
    varB : {
        value: null,
        enumerable: true,
        configurable: true,
        writable: true
    },
    doSomething : {
        value: function(){ // override
            A.prototype.doSomething.apply(this, arguments); // call super
            // ...
        },
        enumerable: true,
        configurable: true,
        writable: true
    }
});
B.prototype.constructor = B;

var b = new B();
b.doSomething();