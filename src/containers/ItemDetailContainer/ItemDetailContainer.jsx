import './ItemDetailContainer.css'
import { useEffect, useContext, useState } from 'react'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
// import { getItemML } from '../../utils/const'
import { Cargando } from '../../components/Spiner/Spiner'
import { CartContext } from '../../context/cartContext';

export const ItemDetailContainer = () => {

    const { productos } = useContext(CartContext)
    const [idFiltrado, setIdFiltrado] = useState([])
    const { id } = useParams();

    const filtradoId = (id, productos) => {
        const filtro = productos.find(element => {
            return element.id === id;

        })
        setIdFiltrado(filtro)
    }

    useEffect(() => {
        filtradoId(id, productos)
    }, [id]);

    return (
        <>
            {productos ?
                (<ItemDetail product={idFiltrado}></ItemDetail>)
                :
                <Cargando />}
        </>

    )
}