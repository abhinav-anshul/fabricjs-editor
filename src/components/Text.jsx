import React from 'react'
import useAppContext from '../hooks/useAppContext';

const Text = () => {
    const { setActiveDragDropItem } = useAppContext();

    const handleTextDrag = () => {
        let options = {
            type: 'HeadingWithSubHeading',
            metadata: [
                { type: 'heading', text: 'Heading', id: 1 },
                { type: 'subHeading', text: 'Sub Heading', id: 2 }
            ]
        }
        setActiveDragDropItem(options);
    }

    return (
        <div className='text-wrapper' draggable={true} onDragStart={handleTextDrag}>
            <h1>Heading</h1>
            <h3>Sub Heading</h3>
        </div>
    )
}

export default Text
