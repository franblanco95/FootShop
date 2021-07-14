import './ItemListContainer.css'
import { Cargando } from '../../components/Spiner/Spiner';
import { useEffect, useContext } from 'react'
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
// import { getDataML } from '../../utils/const'
import { CartContext } from '../../context/cartContext';

export const ItemListContainer = () => {

    const { productos, setCategoria, setProductos } = useContext(CartContext)
    const { categoryId } = useParams()

    useEffect(() => {
        
        setTimeout(() => {
            setCategoria(categoryId)
        }, 1500)

        setProductos([]);
    }, [categoryId]);

    return (
        <>
            {productos.length > 0 ? <ItemList productosList={productos} categoria={categoryId}></ItemList> :
                <Cargando />}


        </>

    )
}