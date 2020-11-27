    //Mostrar Menu responsivo
    function MostrarMenu() {
        var Navbar = document.getElementById('Navbar');
        var Container = document.getElementById('container');
        if (Navbar.style.display == 'none') {
            Navbar.style.display = 'block';
            Container.style.marginLeft = '30%';


        } else {
            Navbar.style.display = 'none';
            Container.style.marginLeft = 'auto';

        }
    }