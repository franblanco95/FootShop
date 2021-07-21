import './ItemListContainer.css'
import { Cargando } from '../../components/Spiner/Spiner';
import { useEffect, useContext, useState } from 'react'
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
// import { getDataML } from '../../utils/const'
import { CartContext } from '../../context/cartContext';

export const ItemListContainer = () => {

    const { productos } = useContext(CartContext)
    const { categoryId } = useParams()
    const [itemsFiltrados, setItemsFiltrados] = useState([])

    const filtradoCategoria = (categoryId, _productos) => {
        if (_productos !== '') {
            if (categoryId !== undefined) {
                const filtrado = _productos.filter((obj) => {
                    return obj.categoryId === categoryId;
                });
                if (filtrado.length === 0) {
                    setItemsFiltrados('no category found');
                } else {
                    setItemsFiltrados(filtrado);
                }

            } else {
                setItemsFiltrados(_productos);
            }
        }


    }
    useEffect(() => {
        filtradoCategoria(categoryId, productos)
    }, [categoryId]);

    return (
        <>
            {productos.length > 0 ? <ItemList productos={itemsFiltrados}></ItemList> :
                <Cargando />}


        </>

    )
}