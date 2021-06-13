import { CardComponent } from '../../components/CardComponent';

export const HomeContainer = () => {

    const product = [
        { id: 1, name: 'Nike', price: '$ 255' },
        { id: 2, name: 'Adidas', price: '$ 249' },
        { id: 3, name: 'Topper', price: '$ 180' },
        { id: 4, name: 'Reebok', price: '$ 100' }
    ];

    return (
        <>
            <section>
                <header className="App-header">
                    <div className="row">
                        <div className="col-3">
                            <CardComponent sneaker={product[0]} />
                        </div>
                        <div className="col-3">
                            <CardComponent sneaker={product[1]} />
                        </div>
                        <div className="col-3">
                            <CardComponent sneaker={product[2]} />
                        </div>
                        <div className="col-3">
                            <CardComponent sneaker={product[3]} />
                        </div>
                    </div>


                </header>
            </section>
        </>
    )
}

