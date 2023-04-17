import link from 'next/link'
import { Layout } from '@/layouts/Layout';


const IndexPage = () => {
    return (
        <Layout>
            <>
                <section className="section-1">
                    <div className="position-banner">
                        <img className="img1-property-mobile" src="resources/icons/banner.svg" alt="Banner" />
                        <div className="button-banner-all">
                            <button className="button-banner"></button>
                            <button className="button-banner selected-button"></button>
                            <button className="button-banner"></button>
                            <button className="button-banner"></button>
                            <button className="button-banner"></button>
                            <button className="button-banner"></button>
                        </div>
                    </div>
                </section>
                <section className="section-2">
                    <div className="div-section-p">
                        <div className="flex-v-c">
                            <img className="settings-mobile-img-section-2" src="resources/icons/credit-card.svg" alt="Tarjeta de crédito" />
                            <div className="internal-flex">
                                <div className="settings-mobile-section2">Hasta 48 cuotas</div>
                                <a className="settings-mobile-section2" href="#">Ver más</a>
                            </div>
                        </div>
                        <div className="flex-v-c">
                            <img className="settings-mobile-img-section-2" src="resources/icons/transfer.svg" alt="Transferencia" />
                            <div className="internal-flex">
                                <div className="settings-mobile-section2">Transferencia desde tu banco</div>
                                <a className="settings-mobile-section2" href="#">Ver más</a>
                            </div>
                        </div>
                        <div className="flex-v-c">
                            <img className="settings-mobile-img-section-2" src="resources/icons/payment-agreement.svg" alt="Efectivo" />
                            <div className="internal-flex">
                                <div className="settings-mobile-section2">Paga en efectivo</div>
                                <a className="settings-mobile-section2" href="#">Ver más</a>
                            </div>
                        </div>
                        <div className="flex-v-c">
                            <img className="settings-mobile-img-section-2" src="resources/icons/view-more.svg" alt="Ver más" />
                            <div className="internal-flex">
                                <div className="settings-mobile-section2">Más medios de pago</div>
                                <a className="settings-mobile-section2" href="#">Ver más</a>
                            </div>
                        </div>
                    </div>

                    <div className="div-section-p-2">
                        <div className="title-div">
                            <div className="title-div-style">Ofertas</div>
                            <a href="#">Ver todas</a>
                        </div>
                        <div className="card-group">
                            <img className="alone-img-style" src='resources/icons/Group 2.svg' />
                            <div className="card">
                                <img src="resources/icons/silla.svg" alt="Silla" />
                                <div className="price-information">
                                    <div className="settings-mobile-section3">$210.900</div>
                                    <div className="send-free">32% OFF</div>
                                </div>
                                <div className="send-free card-header-space">Envío gratis</div>
                            </div>
                            <div className="card">
                                <img src="resources/icons/microfono.svg" alt="Micrófono" />
                                <div className="price-information price-information-full">
                                    <div className="settings-mobile-section3">$74.990</div>
                                    <div className="send-free">25% OFF</div>
                                </div>
                                <div className="card-header-space">
                                    <div className="send-free-icon">
                                        <div className="send-free">Envío gratis</div>
                                        <img className="full-style" src="resources/icons/full.svg" alt="Full" />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <img src="resources/icons/afeitadora.svg" alt="Afeitadora" />
                                <div className="price-information">
                                    <div className="settings-mobile-section3">$134.950</div>
                                    <div className="send-free">50% OFF</div>
                                </div>
                                <div className="send-free ">Envío gratis</div>
                            </div>
                            <div className="card">
                                <img src="resources/icons/armario.svg" alt="Armario" />
                                <div className="price-information">
                                    <div className="settings-mobile-section3">$149.900</div>
                                    <div className="send-free">30% OFF</div>
                                </div>
                                <div className="send-free ">Envío gratis</div>
                            </div>
                            <div className="card">
                                <img src="resources/icons/cortina.svg" alt="Cortina" />
                                <div className="price-information price-information-full">
                                    <div className="settings-mobile-section3">$69.990</div>
                                    <div className="send-free">17% OFF</div>
                                </div>
                                <div>
                                    <img className="full-style" src="resources/icons/full.svg" alt="Full" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div-section-p-3">
                        <div className="card-2-header">
                            <div className="card-2-title">Suscríbete al nivel 6</div>
                            <div className="card-2-prices">
                                <div className="card-2-prices-original">$ 50.690</div>
                                <div className="price-iteration">
                                    <div className="default-price-style">$ 17.899</div>
                                    <div className="iteration">/mes</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-2-body">
                            <div className="card-2-body-p">Consigue los mejores beneficios en Mercado Libre</div>
                            <div className="card-2-data">
                                <div className="card-3">
                                    <img className="card-3-image-style" src="resources/icons/dplus.svg" alt="Disney plus" />
                                    <div className="card-3-text-style">Disney+ sin cargo</div>
                                </div>
                                <div className="card-3">
                                    <img className="card-3-image-style" src="resources/icons/starplus.svg" alt="Disney plus" />
                                    <div className="card-3-text-style">Star+ sin cargo</div>
                                </div>
                                <div className="card-3">
                                    <img className="card-3-image-style" src="resources/icons/truck.svg" alt="Disney plus" />
                                    <div className="card-3-text-style">Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000</div>
                                </div>
                            </div>
                            <hr />
                            <div className="card-2-footer">
                                <button className="main-button">Subscríbete</button>
                            </div>
                        </div>
                    </div>

                    <div className="div-section-p-4">
                        <div className="title-div">
                            <div className="leading-default-property">Beneficios de Mercado Puntos</div>
                            <a className="leading-default-property" href="#">Ver todos los beneficios</a>
                        </div>
                        <div className="card-4-data">
                            <div className="card-4">
                                <img className="size-image-card-4-default" src="resources/icons/disney_img.svg" />
                                <div className="card-4-int">
                                    <img className="size-second-image-card-4-default" src="resources/icons/disney_img_2.svg" />
                                    <div className="info-card-4">
                                        <div className="info-card-4">Sin cargo con el nivel 6</div>
                                        <div className="leading-default-property">Disney+ y Star+</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-4">
                                <img className="size-image-card-4-default" src="resources/icons/hbo_max_img.svg" />
                                <div className="card-4-int">
                                    <img className="size-second-image-card-4-default" src="resources/icons/hbo_max_img_2.svg" />
                                    <div className="info-card-4">
                                        <div className="f-c-10">7 DÍAS GRATIS</div>
                                        <div className="info-card-4">Sin cargo con el nivel 6</div>
                                        <div className="leading-default-property">HBO +</div>

                                    </div>
                                </div>
                            </div>
                            <div className="card-4">
                                <img className="size-image-card-4-default" src="resources/icons/paramount_img.svg" />
                                <div className="card-4-int">
                                    <img className="size-second-image-card-4-default" src="resources/icons/paramount_img_2.svg" />
                                    <div className="info-card-4">
                                        <div className="f-c-10">7 DÍAS GRATIS</div>
                                        <div className="info-card-4">Sin cargo con el nivel 6</div>
                                        <div className="leading-default-property">Paramount</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="div-section-p-5">
                        <div className="title-div">
                            <div>Descubre</div>
                        </div>
                        <div className="div-card-section-5">
                            <div className="image-info-section-5">
                                <div className="info-section-5">
                                    <div className="title-section-5">RENUEVA TUS ESPACIOS</div>
                                    <div className="sub-title-section-5">HOGAR Y MUEBLES HASTA 50% OFF</div>
                                    <button className="main-button-section-7">Ver más</button>
                                </div>
                                <img src="resources/icons/hogar_muebles.svg" alt="Hogar y muebles" />
                            </div>
                            <div className="image-info-section-5">
                                <div className="info-section-5">
                                    <div className="title-section-5">SUSCRÍBETE AL NIVEL 6</div>
                                    <div className="sub-title-section-5">POR SOLO $17.899 CADA MES</div>
                                    <button className="main-button-section-7">Subscríbete</button>
                                </div>
                                <img src="resources/icons/subscripcion.svg" alt="Subscripcion" />
                            </div>
                        </div>
                    </div>

                    <div className="div-section-p-6">
                        <div className="title-div">
                            <div>Las mejores tiendas te esperan</div>
                            <a href="#">Ver tiendas</a>
                        </div>
                        <div className="card-5-all">
                            <div className="card-5">
                                <img className="img-1-style" src="resources/icons/lego_banner.svg" alt="Lego banner" />
                                <div className="title-section-6 title-section-5">Lego</div>
                                <div className="img-int-card-5">
                                    <img className="img-3-style" src="resources/icons/lego_img_1.svg" alt="Lego imagen 1" />
                                    <img className="img-3-style" src="resources/icons/lego_img_2.svg" alt="Lego imagen 2" />
                                    <img className="img-3-style" src="resources/icons/lego_img_3.svg" alt="Lego imagen 3" />
                                </div>
                                <div className="sub-title-section-6 title-section-5">Ver tienda</div>
                                <img src="resources/icons/lego.svg" alt="Lego" className="img-card-5 img-2-style" />
                            </div>
                            <div className="card-5">
                                <img className="img-1-style" src="resources/icons/xiaomi_banner.svg" alt="Xiaomi banner" />
                                <div className="title-section-6 title-section-5">Xiaomi</div>
                                <div className="img-int-card-5">
                                    <img className="img-3-style" src="resources/icons/xiaomi_img_1.svg" alt="Xiaomi imagen 1" />
                                    <img className="img-3-style" src="resources/icons/xiaomi_img_2.svg" alt="Xiaomi imagen 1" />
                                    <img className="img-3-style" src="resources/icons/xiaomi_img_3.svg" alt="Xiaomi imagen 1" />
                                </div>
                                <div className="sub-title-section-6 title-section-5">Ver tienda</div>
                                <img src="resources/icons/xiaomi.svg" alt="Xiaomi" className="img-card-5 img-2-style" />
                            </div>
                            <div className="card-5">
                                <img className="img-1-style" src="resources/icons/oster_banner.svg" alt="Oster banner" />
                                <div className="title-section-6">Oster</div>
                                <div className="img-int-card-5">
                                    <img className="img-3-style" src="resources/icons/oster_img_1.svg" alt="Oster imagen 1" />
                                    <img className="img-3-style" src="resources/icons/oster_img_2.svg" alt="Oster imagen 2" />
                                    <img className="img-3-style" src="resources/icons/oster_img_3.svg" alt="Oster imagen 3" />
                                </div>
                                <div className="sub-title-section-6">Ver tienda</div>
                                <img src="resources/icons/oster.svg" alt="Oster" className="img-card-5 img-2-style" />
                            </div>
                            <div className="card-5">
                                <img className="img-1-style" src="resources/icons/nikon_banner.svg" alt="Nikon banner" />
                                <div className="title-section-6">Nikon</div>
                                <div className="img-int-card-5">
                                    <img className="img-3-style" src="resources/icons/nikon_img_1.svg" alt="Nikon imagen 1" />
                                    <img className="img-3-style" src="resources/icons/nikon_img_2.svg" alt="Nikon imagen 2" />
                                    <img className="img-3-style" src="resources/icons/nikon_img_3.svg" alt="Nikon imagen 3" />
                                </div>
                                <div className="sub-title-section-6">Ver tienda</div>
                                <img src="resources/icons/nikon.svg" alt="Nikon" className="img-card-5 img-2-style" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-3">

                    <div className="div-section-p-7">
                        <div className="title-div-section-7">
                            <div className="title-div-section-7-sec-1">Colecciones:</div>
                            <div className="title-div-section-7-sec-2">Supermercado</div>
                        </div>
                        <div className="card-6-all">
                            <div className="card-6">
                                <img src="resources/icons/supermercado.svg" alt="Supermercado" />
                                <div className="card-6-info">
                                    <div className="title-section-7">DESCUBRE</div>
                                    <div className="sub-title-section-7">SUPERMERCADO</div>
                                </div>
                            </div>
                            <div className="card-6-image-all">
                                <div className="supermarket-images">
                                    <div>
                                        <img src="resources/icons/supermercado_img_1.svg" alt="Supermrecado imagen 1" />
                                    </div>
                                    <div>
                                        <img src="resources/icons/supermercado_img_2.svg" alt="Supermrecado imagen 2" />
                                    </div>
                                    <div>
                                        <img src="resources/icons/supermercado_img_3.svg" alt="Supermrecado imagen 3" />
                                    </div>
                                    <div>
                                        <img src="resources/icons/supermercado_img_4.svg" alt="Supermrecado imagen 4" />
                                    </div>
                                </div>
                                <div className="supermarket-images">
                                    <div>
                                        <img src="resources/icons/supermercado_img_5.svg" alt="Supermrecado imagen 5" />
                                    </div>
                                    <div>
                                        <img src="resources/icons/supermercado_img_6.svg" alt="Supermrecado imagen 6" />
                                    </div>
                                    <div>
                                        <img src="resources/icons/supermercado_img_7.svg" alt="Supermrecado imagen 7" />
                                    </div>
                                    <div>
                                        <img src="resources/icons/supermercado_img_8.svg" alt="Supermrecado imagen 8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="div-section-p-8">
                        <div className="title-div">
                            <div>Categorías populares</div>
                        </div>
                        <div>
                            <div className="card-7-all">
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_1.svg" alt="Imagen categoría 1" />
                                    <div className="hidden-default-text">Carros, Motos y Otros</div>
                                </div>
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_2.svg" alt="Imagen categoría 2" />
                                    <div className="hidden-default-text">Computación</div>
                                </div>
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_3.svg" alt="Imagen categoría 3" />
                                    <div className="hidden-default-text">Ropa y Accesorios</div>
                                </div>
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_4.svg" alt="Imagen categoría 4" />
                                    <div className="hidden-default-text">Hogar y Muebles</div>
                                </div>
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_5.svg" alt="Imagen categoría 5" />
                                    <div className="hidden-default-text">Accesorios para Vehículos</div>
                                </div>
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_6.svg" alt="Imagen categoría 6" />
                                    <div className="hidden-default-text">Electrodomésticos</div>
                                </div>
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_7.svg" alt="Imagen categoría 7" />
                                    <div className="hidden-default-text">Cámaras y Accesorios</div>
                                </div>
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_8.svg" alt="Imagen categoría 8" />
                                    <div className="hidden-default-text">Celulares y Teléfonos</div>
                                </div>
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_9.svg" alt="Imagen categoría 9" />
                                    <div className="hidden-default-text">Belleza y Cuidado Personal</div>
                                </div>
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_10.svg" alt="Imagen categoría 10" />
                                    <div className="hidden-default-text">Deportes y Fitness</div>
                                </div>
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_11.svg" alt="Imagen categoría 11" />
                                    <div className="hidden-default-text">Electrónica, Audio y Video</div>
                                </div>
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_12.svg" alt="Imagen categoría 12" />
                                    <div className="hidden-default-text">Consolas y Videojuegos</div>
                                </div>
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_13.svg" alt="Imagen categoría 13" />
                                    <div className="hidden-default-text">Juegos y Juguetes</div>
                                </div>
                                <div className="card-7">
                                    <img className="image-7-style" src="resources/icons/categoria_img_14.svg" alt="Imagen categoría 14" />
                                    <div className="hidden-default-text">Herramientas</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </Layout>

    )
};

export default IndexPage;
