import {ItemList} from './ItemList';
import {usePiedras} from '../hooks/usePiedras';
import {useParams} from 'react-router-dom';

export const ItemListContainer = ({nombre}) => {
    const {id} = useParams();
    const {piedras, loading} = usePiedras(id); //Custom hook
    return (
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList nombre={nombre} productos={piedras}/>
            }
        </div>
    );
}