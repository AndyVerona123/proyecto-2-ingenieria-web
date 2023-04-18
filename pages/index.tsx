import Link from "next/link"
import { Layout } from '@/layouts/Layout';
import { ContextHeader } from "@/context/contextHeader";
import { useState } from "react";
import { ItemCard } from "@/Objects/itemCard";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const IndexPage = () => {

    const data: ItemCard[] = [
        {
            id: 1,
            image: 'resources/icons/silla.svg',
            price: 210900,
            discount: 32,
            isFreeShipping: true,
            isFull: false,
            quantity: 1
        },
        {
            id: 2,
            image: 'resources/icons/microfono.svg',
            price: 74990,
            discount: 25,
            isFreeShipping: true,
            isFull: true,
            quantity: 1
        },
        {
            id: 3,
            image: 'resources/icons/afeitadora.svg',
            price: 134950,
            discount: 50,
            isFreeShipping: true,
            isFull: false,
            quantity: 1
        },
        {
            id: 4,
            image: 'resources/icons/armario.svg',
            price: 149900,
            discount: 30,
            isFreeShipping: true,
            isFull: false,
            quantity: 1
        },
        {
            id: 5,
            image: 'resources/icons/cortina.svg',
            price: 69990,
            discount: 17,
            isFreeShipping: false,
            isFull: true,
            quantity: 1
        },
        {
            id: 6,
            image: 'resources/icons/celular.webp',
            price: 69990,
            discount: 20,
            isFreeShipping: false,
            isFull: true,
            quantity: 1
        },
        {
            id: 7,
            image: 'resources/icons/silla.webp',
            price: 250990,
            discount: 17,
            isFreeShipping: false,
            isFull: true,
            quantity: 1
        },
        {
            id: 8,
            image: 'resources/icons/tapete.webp',
            price: 99990,
            discount: 5,
            isFreeShipping: false,
            isFull: true,
            quantity: 1
        },
        {
            id: 9,
            image: 'resources/icons/silla_2.webp',
            price: 450000,
            discount: 18,
            isFreeShipping: false,
            isFull: true,
            quantity: 1
        },
        {
            id: 10,
            image: 'resources/icons/televisor.webp',
            price: 1500000,
            discount: 25,
            isFreeShipping: false,
            isFull: true,
            quantity: 1
        }
    ]

    const [itemCard, setItemCard] = useState<ItemCard[]>([]);

    const addItemToCart = (item: ItemCard) => {
        const objectFilter = itemCard.find(i => i.id === item.id);
        if (objectFilter !== null && objectFilter !== undefined) {
            itemCard.filter(i => i.id === item.id)[0].quantity = objectFilter.quantity + 1;
            notify('Se agregó un nuevo artículo existente');
        } else {
            setItemCard((prev) => [...prev, item]);
            notify('Se agregó un nuevo artículo.');
        }
        setTotalItems(totalItems + 1);
    }

    const [totalItems, setTotalItems] = useState<number>(0);

    const notify = (message: string) => {
        toast.success(message);
    }

    return (
        <ContextHeader.Provider value={{ setTotalItems, totalItems, itemCard, setItemCard }}>
            <Layout>
                <>
                    <section className="section-1">
                        <div className="position-banner">
                            <img src="resources/icons/banner.svg" alt="Banner" />
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
                                <img src="resources/icons/credit-card.svg" alt="Tarjeta de crédito" />
                                <div className="internal-flex">
                                    <div>Hasta 48 cuotas</div>
                                    <Link href="#" className="link-blue">Ver más</Link>
                                </div>
                            </div>
                            <div className="flex-v-c">
                                <img src="resources/icons/transfer.svg" alt="Transferencia" />
                                <div className="internal-flex">
                                    <div>Transferencia desde tu banco</div>
                                    <Link href="#" className="link-blue">Ver más </Link>
                                </div>
                            </div>
                            <div className="flex-v-c">
                                <img src="resources/icons/payment-agreement.svg" alt="Efectivo" />
                                <div className="internal-flex">
                                    <div>Paga en efectivo</div>
                                    <Link href="#" className="link-blue">Ver más</Link>
                                </div>
                            </div>
                            <div className="flex-v-c">
                                <img src="resources/icons/view-more.svg" alt="Ver más" />
                                <div className="internal-flex">
                                    <div>Más medios de pago</div>
                                    <Link href="#" className="link-blue">Ver más</Link>
                                </div>
                            </div>
                        </div>

                        <div className="div-section-p-2">
                            <div className="title-div">
                                <div>Ofertas</div>
                                <a href="#">Ver todas</a>
                            </div>
                            <div className="" id="carrusel">
                                <a href="#" className="left-arrow"><img src="resources/icons/left.svg" /></a>
                                <a href="#" className="right-arrow"><img src="resources/icons/right.svg" /></a>
                                <div className="carrusel card-group">
                                    {data.map((item, index) => {
                                        return (
                                            <div className="card" id={`product_${index}`} key={index} onClick={() => addItemToCart(item)}>
                                                <img src={item.image} />
                                                <div className="price-information">
                                                    <div>${item.price.toLocaleString()}</div>
                                                    <div className="send-free">{item.discount}% OFF</div>
                                                </div>
                                                <div className="card-header-space">
                                                    <div className="send-free-icon">
                                                        {item.isFreeShipping && <div className="send-free">Envío gratis</div>}
                                                        {item.isFull && <img src="resources/icons/full.svg" alt="Full" />}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="div-section-p-3">
                            <div className="card-2-header">
                                <div className="card-2-title">Suscríbete al nivel 6</div>
                                <div className="card-2-prices">
                                    <div className="card-2-prices-original">$ 50.690</div>
                                    <div className="price-iteration">
                                        <div>$ 17.899</div>
                                        <div className="iteration">/mes</div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-2-body">
                                <div className="card-2-body-p">Consigue los mejores beneficios en Mercado Libre</div>
                                <div className="card-2-data">
                                    <div className="card-3">
                                        <img src="resources/icons/dplus.svg" alt="Disney plus" />
                                        <div>Disney+ sin cargo</div>
                                    </div>
                                    <div className="card-3">
                                        <img src="resources/icons/starplus.svg" alt="Disney plus" />
                                        <div>Star+ sin cargo</div>
                                    </div>
                                    <div className="card-3">
                                        <img src="resources/icons/truck.svg" alt="Disney plus" />
                                        <div>Envíos gratis y rápidos desde $ 90.000 y 40% OFF en envíos de menos de $ 90.000</div>
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
                                <div>Beneficios de Mercado Puntos</div>
                                <Link href="#" className="link-blue">Ver todos los beneficios</Link>
                            </div>
                            <div className="card-4-data">
                                <div className="card-4">
                                    <img src="resources/icons/disney_img.svg" />
                                    <div className="card-4-int">
                                        <img src="resources/icons/disney_img_2.svg" />
                                        <div className="info-card-4">
                                            <div>Sin cargo con el nivel 6</div>
                                            <div>Disney+ y Star+</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-4">
                                    <img src="resources/icons/hbo_max_img.svg" />
                                    <div className="card-4-int">
                                        <img src="resources/icons/hbo_max_img_2.svg" />
                                        <div className="info-card-4">
                                            <div className="f-c-10">7 DÍAS GRATIS</div>
                                            <div>Sin cargo con el nivel 6</div>
                                            <div>Disney+ y Star+</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-4">
                                    <img src="resources/icons/paramount_img.svg" />
                                    <div className="card-4-int">
                                        <img src="resources/icons/paramount_img_2.svg" />
                                        <div className="info-card-4">
                                            <div className="f-c-10">7 DÍAS GRATIS</div>
                                            <div className="info-card-4">Sin cargo con el nivel 6</div>
                                            <div className="info-card-4">Disney+ y Star+</div>
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
                                        <button className="main-button">Ver más</button>
                                    </div>
                                    <img src="resources/icons/hogar_muebles.svg" alt="Hogar y muebles" />
                                </div>
                                <div className="image-info-section-5">
                                    <div className="info-section-5">
                                        <div className="title-section-5">SUSCRÍBETE AL NIVEL 6</div>
                                        <div className="sub-title-section-5">POR SOLO $17.899 CADA MES</div>
                                        <button className="main-button">Subscríbete</button>
                                    </div>
                                    <img src="resources/icons/subscripcion.svg" alt="Subscripcion" />
                                </div>
                            </div>
                        </div>

                        <div className="div-section-p-6">
                            <div className="title-div">
                                <div>Las mejores tiendas te esperan</div>
                                <Link href="#" className="link-blue">Ver tiendas</Link>
                            </div>
                            <div className="card-5-all">
                                <div className="card-5">
                                    <img src="resources/icons/lego_banner.svg" alt="Lego banner" />
                                    <div className="title-section-6">Lego</div>
                                    <div className="img-int-card-5">
                                        <img src="resources/icons/lego_img_1.svg" alt="Lego imagen 1" />
                                        <img src="resources/icons/lego_img_2.svg" alt="Lego imagen 2" />
                                        <img src="resources/icons/lego_img_3.svg" alt="Lego imagen 3" />
                                    </div>
                                    <div className="sub-title-section-6">Ver tienda</div>
                                    <img src="resources/icons/lego.svg" alt="Lego" className="img-card-5" />
                                </div>
                                <div className="card-5">
                                    <img src="resources/icons/xiaomi_banner.svg" alt="Xiaomi banner" />
                                    <div className="title-section-6">Xiaomi</div>
                                    <div className="img-int-card-5">
                                        <img src="resources/icons/xiaomi_img_1.svg" alt="Xiaomi imagen 1" />
                                        <img src="resources/icons/xiaomi_img_2.svg" alt="Xiaomi imagen 1" />
                                        <img src="resources/icons/xiaomi_img_3.svg" alt="Xiaomi imagen 1" />
                                    </div>
                                    <div className="sub-title-section-6">Ver tienda</div>
                                    <img src="resources/icons/xiaomi.svg" alt="Xiaomi" className="img-card-5" />
                                </div>
                                <div className="card-5">
                                    <img src="resources/icons/oster_banner.svg" alt="Oster banner" />
                                    <div className="title-section-6">Oster</div>
                                    <div className="img-int-card-5">
                                        <img src="resources/icons/oster_img_1.svg" alt="Oster imagen 1" />
                                        <img src="resources/icons/oster_img_2.svg" alt="Oster imagen 2" />
                                        <img src="resources/icons/oster_img_3.svg" alt="Oster imagen 3" />
                                    </div>
                                    <div className="sub-title-section-6">Ver tienda</div>
                                    <img src="resources/icons/oster.svg" alt="Oster" className="img-card-5" />
                                </div>
                                <div className="card-5">
                                    <img src="resources/icons/nikon_banner.svg" alt="Nikon banner" />
                                    <div className="title-section-6">Nikon</div>
                                    <div className="img-int-card-5">
                                        <img src="resources/icons/nikon_img_1.svg" alt="Nikon imagen 1" />
                                        <img src="resources/icons/nikon_img_2.svg" alt="Nikon imagen 2" />
                                        <img src="resources/icons/nikon_img_3.svg" alt="Nikon imagen 3" />
                                    </div>
                                    <div className="sub-title-section-6">Ver tienda</div>
                                    <img src="resources/icons/nikon.svg" alt="Nikon" className="img-card-5" />
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
                                        <img src="resources/icons/categoria_img_1.svg" alt="Imagen categoría 1" />
                                        <div>Carros, Motos y Otros</div>
                                    </div>
                                    <div className="card-7">
                                        <img src="resources/icons/categoria_img_2.svg" alt="Imagen categoría 2" />
                                        <div>Computación</div>
                                    </div>
                                    <div className="card-7">
                                        <img src="resources/icons/categoria_img_3.svg" alt="Imagen categoría 3" />
                                        <div>Ropa y Accesorios</div>
                                    </div>
                                    <div className="card-7">
                                        <img src="resources/icons/categoria_img_4.svg" alt="Imagen categoría 4" />
                                        <div>Hogar y Muebles</div>
                                    </div>
                                    <div className="card-7">
                                        <img src="resources/icons/categoria_img_5.svg" alt="Imagen categoría 5" />
                                        <div>Accesorios para Vehículos</div>
                                    </div>
                                    <div className="card-7">
                                        <img src="resources/icons/categoria_img_6.svg" alt="Imagen categoría 6" />
                                        <div>Electrodomésticos</div>
                                    </div>
                                    <div className="card-7">
                                        <img src="resources/icons/categoria_img_7.svg" alt="Imagen categoría 7" />
                                        <div>Cámaras y Accesorios</div>
                                    </div>
                                    <div className="card-7">
                                        <img src="resources/icons/categoria_img_8.svg" alt="Imagen categoría 8" />
                                        <div>Celulares y Teléfonos</div>
                                    </div>
                                    <div className="card-7">
                                        <img src="resources/icons/categoria_img_9.svg" alt="Imagen categoría 9" />
                                        <div>Belleza y Cuidado Personal</div>
                                    </div>
                                    <div className="card-7">
                                        <img src="resources/icons/categoria_img_10.svg" alt="Imagen categoría 10" />
                                        <div>Deportes y Fitness</div>
                                    </div>
                                    <div className="card-7">
                                        <img src="resources/icons/categoria_img_11.svg" alt="Imagen categoría 11" />
                                        <div>Electrónica, Audio y Video</div>
                                    </div>
                                    <div className="card-7">
                                        <img src="resources/icons/categoria_img_12.svg" alt="Imagen categoría 12" />
                                        <div>Consolas y Videojuegos</div>
                                    </div>
                                    <div className="card-7">
                                        <img src="resources/icons/categoria_img_13.svg" alt="Imagen categoría 13" />
                                        <div>Juegos y Juguetes</div>
                                    </div>
                                    <div className="card-7">
                                        <img src="resources/icons/categoria_img_14.svg" alt="Imagen categoría 14" />
                                        <div>Herramientas</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            </Layout>
        </ContextHeader.Provider>
    )
};

export default IndexPage;