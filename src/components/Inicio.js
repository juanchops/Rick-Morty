import React from 'react';
import ImagenCentral from  '../img/image-center.png';

const Inicio = () => {

    // const [page, updatePage] = useState({})

    // function handleOnSubmitSearch(e) {
    //     e.preventDefault();
      
    //     console.log('Hola mundo');
        
    //     const { currentTarget = {} } = e;
    //     const fields = Array.from(currentTarget?.elements);
    //     const fieldQuery = fields.find(field => field.name === 'query');
      
    //     const value = fieldQuery.value || '';
    //     const endpoint = `https://rickandmortyapi.com/api/character/?name=${value}`;
      
    //     updatePage({
    //         current: endpoint
    //     });
    // }

    return ( 
        <main>
            <section className="presentation">
                <div className="introduction">
                    <div className="intro-text">
                        <h1>Rick & Morty Episodios</h1>
                        <p>Todos tus episodios favoritos de ricky and morty</p>
                    </div>
                    <div>
                        <form className="search">
                            <input type="text" placeholder=" Search..." className="buttom-search" />
                            {/* <button type="button" className="cta-select">Search</button> */}
                        </form>
                    </div>
                </div>
                <div className="cover">
                    <img src={ImagenCentral} alt="imagen principal" />
                </div>
            </section>
        </main>
    );
}

export default Inicio;