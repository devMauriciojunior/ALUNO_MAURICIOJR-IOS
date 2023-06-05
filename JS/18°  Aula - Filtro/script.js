function MyFunction() {
    let Input = document.getElementById('myInput');
    let UL = document.getElementById('myUL');
    let LI = UL.getElementsByTagName('li');
    let filtro = Input.value.toUpperCase();

    for (let i = 0; i < LI.length; i++) {
        let a = LI[i].getElementsByTagName('a')[0];
        
        if (a.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            LI[i].style.display = '';
        } else {
            LI[i].style.display = 'none';
        }
        // console.log(LI[i])
    }
}