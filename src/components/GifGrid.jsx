
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);
    
    return (
    <>
        <h3>{ category }</h3>
        <h2>{ isLoading && 'Cargando...' }</h2>
        <div className='card-grid'>
            {
                images.map((img) => 
                    (
                        <GifItem 
                            key={img.id} 
                            { ...img } //Envia todas las propiedades del objeto img como props
                        />
                    )
                )
            }
        </div>
    </>
    )
}
