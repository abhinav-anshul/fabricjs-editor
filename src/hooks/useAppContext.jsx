import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

function useAppContext() {
    const {
        activeDragDropItem,
        setActiveDragDropItem,
    } = useContext(AppContext);

    return {
        activeDragDropItem,
        setActiveDragDropItem,
    }
}

export default useAppContext