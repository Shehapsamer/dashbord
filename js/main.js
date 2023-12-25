
let open_form_adding = document.getElementById("open_form_adding");
let form_adding = document.getElementById("form_adding");

open_form_adding.addEventListener("click", function () {
    form_adding.classList.toggle("Show")
})


let open_order_table = document.getElementById("open_order_table");
let open_order_form = document.getElementById("open_order_form");
let GitBack = document.getElementById("GitBack");
let form_adding_Switch = document.getElementById("form_adding_order");

open_order_table.addEventListener("click", function () {
    form_adding_Switch.classList.add("order_table_Show")
})

open_order_form.addEventListener("click", function () {
    form_adding_Switch.classList.add("order_form_Show")
})


GitBack.addEventListener("click", function () {
    form_adding_Switch.classList.remove("order_form_Show")
})


function open_edit_box  () {
    let edit_table = document.getElementById("edit_table");
    edit_table.classList.add("edit_table_show")
}


function close_edit_box  () {
    let edit_table = document.getElementById("edit_table");
    edit_table.classList.remove("edit_table_show")
}