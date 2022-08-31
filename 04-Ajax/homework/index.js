const showFriends = function(){
    let lista = $('#lista');
    lista.empty();
    $.get(`http://localhost:5000/amigos/`, response => {
        for (let i = 0; i < response.length; i++) {
            let li = `<li> ${response[i].name}</li>`;
            lista.append(li);
        }
    });
}
$('#boton').click(showFriends);

$('#search').click (() => {
    let inputValue = $('#input').val();
    $.get(`http://localhost:5000/amigos/${inputValue}`, response => {
        $('#amigo').text(response.name)
    });
});

$('#delete').click(() => {
    let inputValue = $('#inputDelete').val();
    $.ajax({
        url: `http://localhost:5000/amigos/ ${inputValue}`,
        type: "DELETE",
        success: response => {
            $('#success').text('El amigo fue borrado')
            showFriends();
        }
    })
})