import { ItemCard } from "@/Objects/itemCard";
import { useContextHeaderData } from "@/context/contextHeader";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {

    const { totalItems, itemCard, setTotalItems } = useContextHeaderData();

    const [showModal, setShowModal] = useState<boolean>(false);

    const changesModal = () => {
        setShowModal(!showModal);
    }

    const deleteItem = (item: ItemCard) => {
        const i = itemCard.indexOf(item);
        if (i !== -1) {
            itemCard.splice(i, 1);
            setTotalItems(totalItems - item.quantity);
            notify(item.quantity);
        }
    }

    const notify = (total: number) => {
        toast.success(`${total} elemento(s) eliminado(s)`);
    }

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
                    </ul>
                    <div>
                        <div className="position-count-items" onClick={changesModal}>
                            <img src="resources/icons/cart.svg" alt="cart" />
                            <div className="count-items">{totalItems}</div>
                        </div>
                        {showModal &&
                            <div className="card-shopping-cart">
                                <div className="title-card-shopping-cart">Carrito de compras</div>
                                <div className='card-scroll'>
                                    {itemCard?.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <hr />
                                                <div className="item-card">
                                                    <img src={item.image} alt={`item-${index}`} />
                                                    <div>{item.quantity}</div>
                                                    <div>${item.price.toLocaleString()}</div>
                                                    <div className="icon-delete" onClick={() => deleteItem(item)}><AiFillDelete /></div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div>
                                    <hr />
                                    <div className="title-card-shopping-footer">Total: ${itemCard.length > 0 ? (itemCard.map(item => item.quantity * item.price).reduce((prev, next) => prev + next)).toLocaleString() : 0}</div>
                                </div>
                            </div>
                        }
                    </div>
                </nav>
            </div>
            <ToastContainer />
        </header>
    )
}

export { Header }