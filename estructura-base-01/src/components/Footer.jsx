function Footer(){
    return(
        <footer className="min-h-35 w-screen flex justify-center items-center bg-gray-900">
            <div className="text-center">
                <h3 className="text-gray-200 py-15 text-2xl">Ciclo lectivo {new Date().getFullYear()}</h3>
                <ul className="flex list-none text-gray-200 text-base space-x-10 justify-center pb-15">
                    <li>Instagram</li>
                    <li>Youtube</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;