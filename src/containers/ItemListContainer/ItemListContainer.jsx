import './ItemListContainer.css'
import { Cargando } from '../../components/Spiner/Spiner';
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDataML } from '../../utils/const'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams()

    useEffect(() => {
        const waitForData = async () => {
            const response = await getDataML(categoryId);
            setTimeout(() => {
                let aux = response.map((element) => {
                    return {
                        id: element.id,
                        img: element.thumbnail,
                        title: element.title,
                        price: element.price,
                    };
                });
                setProductos(aux);
            }, 500)

        }
        setProductos([]);
        waitForData();
    }, [categoryId]);

    return (
        <>
            {productos.length > 0 ? <ItemList productosList={productos} categoria={categoryId}></ItemList> :
                <Cargando/>}


        </>

    )
}