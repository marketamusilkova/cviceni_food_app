import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

interface ModalProps {
    children: ReactNode;
    open: boolean;
    onClose: () => void;
}

export const Modal = ({ children, open, onClose }: ModalProps) => {
    const dialog = useRef<HTMLDialogElement>(null!);
    // Tím vykříčníkem říkám TypeScriptu, že až ten dialog budeme potřebovat, tak ho budeme mít.

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    const modalRoot = document.getElementById('modal');

    if (!modalRoot) {
        console.error('Neexituje!');
        return null;
    }

    return createPortal(
        <dialog className={classes.modal} ref={dialog}>
            {children}
        </dialog>,
        modalRoot
    );
};
