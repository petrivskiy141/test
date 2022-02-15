let password;
while (1) {
    
    let login = prompt('You login&');
    if (login == 'Admin') {
        password = prompt('Password');

        if (password == 'I boss') {
            alert('hello');
            break;
        } else if (password == null) {
            alert('cansel');
        } else {
            alert('Access denied');
        }
    } else if (login == '' || login == null) {
        alert('I dont know you');
    } else {
        alert('ты хто такой?');
    }

}