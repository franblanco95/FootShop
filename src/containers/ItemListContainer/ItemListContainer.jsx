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
    const [cargando, setCargando] = useState(true)

    const filtradoCategoria = (categoryId, _productos) => {
        if (_productos !== '') {
            if (categoryId !== undefined) {
                const filtrado = _productos.filter((obj) => {
                    return obj.categoryId === categoryId;
                });
                setItemsFiltrados(filtrado);


            } else {
                setItemsFiltrados(_productos);

            }
            setCargando(false)
        }


    }
    useEffect(() => {
        setCargando(true)
        filtradoCategoria(categoryId, productos)
    }, [categoryId, productos]);

    return (
        <>
            {(cargando === true) ?
                <Cargando /> :
                <ItemList productos={itemsFiltrados} category={categoryId} />
            }
        </>)


}