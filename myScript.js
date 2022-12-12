function addData(){
    var firstName=document.foodform.firstname.value;
    var lastName=document.foodform.lastname.value;
    var address=document.foodform.address.value;
    var pincode=document.foodform.pincode.value;
    var gender=document.foodform.gender.value;
    var foodChoice=document.foodform.food_choice.value;
    var state=document.foodform.state.value;
    var country=document.foodform.country.value;

    var tr=document.createElement('tr');

    var td1=tr.appendChild(document.createElement('td'));
    var td2=tr.appendChild(document.createElement('td'));
    var td3=tr.appendChild(document.createElement('td'));
    var td4=tr.appendChild(document.createElement('td'));
    var td5=tr.appendChild(document.createElement('td'));
    var td6=tr.appendChild(document.createElement('td'));
    var td7=tr.appendChild(document.createElement('td'));
    var td8=tr.appendChild(document.createElement('td'));

    td1.innerHTML=firstName;
    td2.innerHTML=lastName;
    td3.innerHTML=address;
    td4.innerHTML=pincode;
    td5.innerHTML=gender;
    td6.innerHTML=foodChoice;
    td7.innerHTML=state;
    td8.innerHTML=country;

    document.getElementById("tbl").appendChild(tr);
    document.getElementById("form1").reset();
}

