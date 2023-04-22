import Link from "next/link"
import { ItemCard } from "@/Objects/itemCard";
import { toast } from 'react-toastify';
import { useContextHeaderData } from "@/context/contextHeader";

const Section2 = () => {
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

    const {setTotalItems, totalItems, itemCard, setItemCard} = useContextHeaderData();

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

    const notify = (message: string) => {
        toast.success(message);
    }

    return (
        <section className="section-2">
            <div className="div-section-p">
                <div className="flex-v-c">
                    <img className="settings-mobile-img-section-2" src="resources/icons/credit-card.svg" alt="Tarjeta de crédito" />
                    <div className="internal-flex">
                        <div className="settings-mobile-section2">Hasta 48 cuotas</div>
                        <Link className="settings-mobile-section2 link-blue" href="#">Ver más</Link>
                    </div>
                </div>
                <div className="flex-v-c">
                    <img className="settings-mobile-img-section-2" src="resources/icons/transfer.svg" alt="Transferencia" />
                    <div className="internal-flex">
                        <div className="settings-mobile-section2">Transferencia desde tu banco</div>
                        <Link className="settings-mobile-section2 link-blue" href="#">Ver más </Link>
                    </div>
                </div>
                <div className="flex-v-c">
                    <img className="settings-mobile-img-section-2" src="resources/icons/payment-agreement.svg" alt="Efectivo" />
                    <div className="internal-flex">
                        <div className="settings-mobile-section2">Paga en efectivo</div>
                        <Link className="settings-mobile-section2 link-blue" href="#">Ver más</Link>
                    </div>
                </div>
                <div className="flex-v-c">
                    <img className="settings-mobile-img-section-2" src="resources/icons/view-more.svg" alt="Ver más" />
                    <div className="internal-flex">
                        <div className="settings-mobile-section2">Más medios de pago</div>
                        <Link className="settings-mobile-section2 link-blue" href="#">Ver más</Link>
                    </div>
                </div>
            </div>

            <div className="div-section-p-2">
                <div className="title-div">
                    <div className="title-div-style">Ofertas</div>
                    <a href="#">Ver todas</a>
                </div>
                <div className="general-container-section-2-styles" id="carrusel">
                    <a href="#" className="left-arrow"><img src="resources/icons/left.svg" /></a>
                    <a href="#" className="right-arrow"><img src="resources/icons/right.svg" /></a>
                    <div className="carrusel card-group">
                        {data.map((item, index) => {
                            return (
                                <div className="card" id={`product_${index}`} key={index} onClick={() => addItemToCart(item)}>
                                    <img src={item.image} />
                                    <div className="price-information price-information-full">
                                        <div className="settings-mobile-section3">${item.price.toLocaleString()}</div>
                                        <div className="send-free">{item.discount}% OFF</div>
                                    </div>
                                    <div className="card-header-space">
                                        <div className="send-free-icon">
                                            {item.isFreeShipping && <div className="send-free">Envío gratis</div>}
                                            {item.isFull && <img className="full-style" src="resources/icons/full.svg" alt="Full" />}
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
                    <Link href="#" className="link-blue">Ver tiendas</Link>
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
    );
};

export { Section2 };