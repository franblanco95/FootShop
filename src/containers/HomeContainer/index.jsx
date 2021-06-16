import { CardComponent } from '../../components/CardComponent';

export const HomeContainer = (props) => {
    return (

        <section>
            <header className="App-header">
                <div className="row">
                    {props.productData.map((product) => {
                        return (
                            <div className="col-3">
                                <CardComponent
                                    name={product.name}
                                    img={product.img}
                                    price={product.price}
                                    stock={product.stock} />
                            </div>
                        )
                    })}
                </div>
            </header>
        </section>

    )
}