const HeaderDesktop = () => {
    return (
        <div className="flex-header-p1">
            <div className="gap-items-header">
                <img src="resources/icons/mercado-libre.svg" alt="Mercado libre"/>
                <ul>
                    <li>Ingresa tu dominio</li>
                </ul>
            </div>
            <img className="gap-items-header-mobile" src="resources/icons/logo_small.png" alt="Mercado libre"/>
            <div className="gap-items-header-input">
                <div className="input-header-height">
                    <form className="form-f">
                        <input className="input-header" placeholder="Buscar productos, marcas y más…"/>
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
    )
}

export {HeaderDesktop}
