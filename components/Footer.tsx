import Link from "next/link"

const Footer = () => {
  return (
    <footer>
    <div>
        <div className="card-8-all">
            <div className="card-8">
                <img className="default-image-configuration-footer" src="resources/icons/payment.svg" alt="Payment" />
                <div className="footer-info-title-1 default-font-style">Paga con tarjeta o en efectivo</div>
                <div className="footer-info-title-2 default-font-style">Con Mercado Pago, paga en cuotas y aprovecha la comodidad de
                    financiación que te da tu banco, o
                    hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!</div>
                <a href="#" className="card-8-more-info default-font-style">Cómo pagar con Mercado Pago</a>
            </div>
            <div className="card-8-af-be">
                <img className="default-image-configuration-footer" src="resources/icons/shipping.svg" alt="Shipping" />
                <div className="footer-info-title-1 default-font-style">Envío gratis desde $ 90.000</div>
                <div className="footer-info-title-2 default-font-style">Con solo estar registrado en Mercado Libre, tienes envíos gratis en
                    miles de productos
                    seleccionados.</div>
                <a href="#" className="card-8-more-info default-font-style">Conoce más sobre este beneficio</a>
            </div>
            <div className="card-8">
                <img className="default-image-configuration-footer" src="resources/icons/protected.svg" alt="Protected" />
                <div className="footer-info-title-1 default-font-style">Seguridad, de principio a fin</div>
                <div className="footer-info-title-2 default-font-style">¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no
                    puedas hacer, porque estás
                    siempre protegido.</div>
                <a href="#" className="card-8-more-info default-font-style">Cómo te protegemos</a>
            </div>
        </div>
        <div className="part-2-footer">
            <ul className="ul-footer">
                <li className="default-font-style">Trabaja con nosotros</li>
                <li className="default-font-style">Términos y condiciones</li>
                <li className="default-font-style">Cómo cuidamos tu privacidad</li>
                <li className="default-font-style">Accesibilidad</li>
                <li className="default-font-style">Ayuda / PQR</li>
                <li className="default-font-style">www.sic.gov.co</li>
            </ul>
            <div className="texto-info-footer default-font-style">Copyright © 1999-2023 MercadoLibre Colombia LTDA.</div>
            <div className="texto-info-footer default-font-style">Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</div>
            <div className="waring-footer">
                <img className="image-configuration-footer" src="resources/icons/industria_comercio.svg" alt="Industria y comercio" />
                <img className="image-configuration-footer" src="resources/icons/pare_compre.svg" alt="Pare y compre" />
            </div>
        </div>
    </div>
</footer>
  )
}

export { Footer }
