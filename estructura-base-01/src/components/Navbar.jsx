function Navbar(){
    return (
        <header className="min-h-25 flex w-screen justify-between items-center px-50 bg-gray-900 fixed">
            <div>
                <h2 className="text-gray-200 text-2xl">Primera aplicacion</h2>
            </div>
            <nav>
                <ul className="flex list-none text-gray-200 text-base">
                    <li className="pr-10">Principal</li>
                    <li className="pr-10">Nosotros</li>
                    <li className="pr-10">Contacto</li> 
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;