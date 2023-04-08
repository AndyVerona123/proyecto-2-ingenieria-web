
const Header = () => {
  return (
    <header>
        <div className="flex-header">
            <div className="flex-header-p1">
                <div className="gap-items-header">
                    <img src="resources/icons/mercado-libre.svg" alt="Mercado libre" />
                    <ul>
                        <li>Ingresa tu dominio</li>
                    </ul>
                </div>
                <div className="gap-items-header">
                    <div className="input-header-height">
                        <form className="form-f">
                            <input className="input-header" placeholder="Buscar productos, marcas y más…" />
                        </form>
                    </div>
                    <ul className="categories">
                        <div className="icon-category">
                            <li>Categorías</li>
                        </div>
                        <li>Ofertas</li>
                        <li>Historial</li>
                        <li>Supermercado</li>
                        <li>Moda</li>
                        <li>Vender</li>
                        <li>Ayuda / PQR</li>
                    </ul>

                </div>
            </div>

            <nav className="flex-header-p2">
                <ul>
                    <li>Crea tu cuenta</li>
                    <li>Ingresa</li>
                    <li>Mis compras</li>
                    <li><img src="resources/icons/cart-shopping-solid 1.svg" /></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export { Header }