import './ItemDetailContainer.css'
import { useEffect, useContext, useState } from 'react'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import { getItemML } from '../../utils/const'
import { Cargando } from '../../components/Spiner/Spiner'
import { CartContext } from '../../context/cartContext';

export const ItemDetailContainer = () => {

    const { productos } = useContext(CartContext)
    const [idFiltrados, setIdFiltrados] = useState([])
    const { id } = useParams();

    const filtradoId = (id, productos) => {
        if (productos !== '') {
            if (id !== undefined) {
                const filtrado = productos.filter((obj) => {
                    return obj.id === id;
                });
                if (filtrado.length === 0) {
                    setIdFiltrados('No id found');
                } else {
                    setIdFiltrados(filtrado);
                }

            } else {
                setIdFiltrados(productos);
            }
        }
    }

    useEffect(() => {
        filtradoId(id, productos)
    }, [id]);

    return (
        <>
            {productos ?
                (<ItemDetail product={idFiltrados}></ItemDetail>)
                :
                <Cargando />}
        </>

    )
}