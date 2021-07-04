import './styles.css'
import { Cargando } from '../../components/Spiner';
import { useEffect, useState } from 'react'
import { ItemList } from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import { getDataML } from '../../utils/const'

export const ItemListContainer = () => {

    let [productos, setProductos] = useState([]);
    let { categoryId } = useParams()

    useEffect(() => {
        const waitForData = async () => {
            const response = await getDataML(categoryId);
            setTimeout(() => {
                let aux = response.map((element) => {
                    return {
                        idProd: element.id,
                        img: element.thumbnail,
                        title: element.title,
                        price: element.price,
                    };
                });
                setProductos(aux);
            }, 2000)

        }
        waitForData();
    }, [categoryId]);

    return (
        <>
            {/* {if (productos.length > 0)
            <ItemList productos={productos} />
            }
            <Spinner /> */}

            {productos.length > 0 ? <ItemList productosList={productos} categoria={categoryId}></ItemList> :
                <Cargando></Cargando>}


        </>

    )
}