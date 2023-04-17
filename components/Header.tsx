import {HeaderDesktop} from "@/components/HeaderDesktop";
import {HeaderMobile} from "@/components/HeaderMobile";

const Header = () => {
  return (
    <header>
        <div className="flex-header">
            <HeaderDesktop/>
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
