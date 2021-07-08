import { findUserByPropertieAndValue } from '../scripts/utils/find_user.js'
import { getLoggedUser } from './utils/get_logged_user.js'
import { deleteUserAccount } from './utils/update_db.js';

window.onload = () => {

    const user = getLoggedUser();


    if (user) {
        const { name } = user;
        const nameElement = document.getElementById('excluirContaUser');
        nameElement.innerHTML = name;

        bt.disabled = true;
        let validaForm = () => {
            if (userPassword.value.length == 0 || userPassword2.value.length == 0)
                bt.disabled = true;
            else
                bt.disabled = false;
            bt.onclick = () => {
                if (userPassword.value != userPassword2.value) {
                    let confirma = alert('As senhas devem ser iguais');
                }
                else {
                    const [foundedUser] = findUserByPropertieAndValue(
                        {
                            'email': user.email,
                            'password': userPassword.value
                        }
                    );
                    if (foundedUser) {
                        deleteUserAccount(foundedUser);
                        let confirma = confirm('Sua conta foi excluída com sucesso');
                        window.location.href="../paginas/login.html";
                    }
                    else {
                        alert('Senha incorreta! Por favor, tente novamente');
                    }
                }
            }
        }

        if (validaForm == false) {
            alert('ERRO! Por favor, tente novamente')
        }
        userPassword.onchange = validaForm;
        userPassword2.onchange = validaForm;

        var pass = $('#userPassword');
        var olho = $("#olho");

        olho.mousedown(function () {
            pass.attr("type", "text");
        });

        olho.mouseup(function () {
            pass.attr("type", "password");
        });

        $("#olho").mouseout(function () {
            $("#userPassword").attr("type", "password");
        });
    }
    else{
        window.location.href="../paginas/login.html";
    }
};