import './styles.css'
import { useEffect, useState } from 'react'
import { ItemDetail } from '../../components/ItemDetail';
import { useParams } from 'react-router-dom'
import { getItemML } from '../../utils/const'
import { Cargando } from '../../components/Spiner'

export const ItemDetailContainer = () => {

    const [producto, setProducto] = useState();
    const { id } = useParams();

    useEffect(() => {
        const waitForData = async () => {
            const response = await getItemML(id)
            setTimeout(() => {
                let aux = {
                    title: response.title,
                    id: response.id,
                    price: response.price,
                    img: response.thumbnail
                }
                setProducto(aux);
            }, 2000);

        }
        waitForData();
    }, [id]);

    return (
        <>
            {producto ? (
                <ItemDetail
                    img={producto.img}
                    title={producto.title}
                    price={producto.price}>
                </ItemDetail>)
                :
                <Cargando></Cargando>}
        </>

    )
}