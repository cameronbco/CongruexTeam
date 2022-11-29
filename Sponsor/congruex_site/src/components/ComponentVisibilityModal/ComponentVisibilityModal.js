import { Button, Modal } from '@mui/material'
import { useRef, useState } from 'react'
import { Widget_Container } from '../../widgets';
import WidgetToggle from './WidgetToggle';

function ComponentVisibilityModal() {
    const [openModal, setOpenModal] = useState(false);
    const [cancel, setCancel] = useState(false);

    const handleOpen = () => {
        setOpenModal(true);
    }
    const handleClose = () => {
        setOpenModal(false);
        setCancel(true);
    }

    // const handleCancel = () => setCanceled(!canceled);
    return (
        <div className='overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:w-full sm:max-w-lg'>
            <Button onClick={handleOpen} className='sm:w-full'>Customize Page</Button>
            <Modal open={openModal} onClose={handleClose} className='flex items-center justify-center h-screen backdrop-blur-sm'>
                <Widget_Container name='Component Toggle'>
                    <Button onClick={handleClose}>Back</Button>
                    <WidgetToggle name='Banner' id='banner-view' />
                    <WidgetToggle name='Links' id='link-view' canceled={cancel} />
                    <WidgetToggle name='Test' id='test-view' canceled={cancel} />
                    <WidgetToggle name='Todo' id='homepage-todo' canceled={cancel} />
                    <WidgetToggle name='Need To Do' id='need-todo' canceled={cancel} />
                    <Button onClick={() => window.location.reload()}>Save</Button>
                </Widget_Container>
            </Modal>
        </div>
    )
}

export default ComponentVisibilityModal