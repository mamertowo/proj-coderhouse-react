import {ItemList} from './ItemList';
import {usePiedras} from '../hooks/usePiedras';
import {useParams} from 'react-router-dom';

export const ItemListContainer = ({nombre}) => {
    const {piedras, loading} = usePiedras(); //Custom hook
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : id
                        ? <ItemList nombre={nombre} productos={piedras.filter(p => p.categorias.includes(id))}/>
                        : <ItemList nombre={nombre} productos={piedras}/>
            }
        </div>
    );
}