/*
===usando o toogle======================-->
function mudarTema(){
    theme.classList.toggle('claro');
    lua.classList.toggle('active');
    sol.classList.toggle('active');
}
*/
//Eu prefiro dessa meneira por que ao clicar no botao da lua o tema permanece o mesmo.==========->>>
function hiddensol(){
    if(lua.classList == "active"){
        lua.classList = "";
        sol.classList = "active";
    }
    theme.classList="claro";
}
function hiddenlua(){
    if(sol.classList == "active"){
        sol.classList = "";
        lua.classList = "active";
        console.log(sol.classList);
    }
    theme.classList="";

}