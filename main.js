guestlist_array = [];
    
function submit()
{
    var guest_name = [];

    
   
        var guest_name = document.getElementById("guest_list_1").value;
        console.log(guest_name);
        guestlist_array.push(guest_name);


    console.log(guestlist_array);

    var lenght_of_name_of_students_array = name_of_the_student_array.length;
    console.log(lenght_of_name_of_students_array);

    for (var k = 0; k < lenght_of_name_of_students_array; k++) 
    {
        display_student_array.push("<h4>NAME - "+ name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array);
    }

    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}

function show()
{
    document.getElementById("guest_label").innerHTML = guestlist_array;
}
function sort()
{
    guestlist_array.sort();
    console.log(guestlist_array);

   

    document.getElementById("show_label").innerHTML = guestlist_array;
}

