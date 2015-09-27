( function(){
    document.getElementById("occuranceForm").onsubmit = function () {
        var myString = document.getElementsByName("mainString")[0].value;
        var myChar   = document.getElementsByName("char")[0].value;
        var actualLength = myString.length;
        var regex = new RegExp(myChar,"g");
        var occurance = myString.replace(regex,"");
        occurance = actualLength - occurance.length;
        document.getElementById("result").innerHTML = "There are "+occurance+" "+myChar+" in the String";
        console.log(regex);
        return false;
    };
}());