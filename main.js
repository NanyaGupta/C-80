 array_name_of_students=[];
function submit() {
    var displayStudentsArray=[];
    for( var j=1;j<=4;j++){
        var name_of_students=document.getElementById("name"+j).value;
        console.log(name_of_students);
        array_name_of_students.push(name_of_students);
    }
    console.log(array_name_of_students);
    var lengthOfNameOfStudentsArray=array_name_of_students.length;
    console.log(lengthOfNameofStudentsArray);

    for(var k=0;k<lengthOfNameOfStudentsArray;k++){
        displayStudentsArray.push("<h4> NAME - "+array_name_of_students[k]+"</h4>");
        console.log(displayStudentsArray);
    }
    console.log(displayStudentsArray);
    document.getElementById("displayWithComma").innerHTML=displayStudentsArray;

    var remove_comma=displayStudentsArray.join(" ");
    console.log(remove_comma);
    document.getElementById("displayWithoutComma").innerHTML=remove_comma;
    


    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    array_name_of_students.sort();
    console.log(array_name_of_students);
    document.getElementById("blank_label").innerHTML=array_name_of_students;

}