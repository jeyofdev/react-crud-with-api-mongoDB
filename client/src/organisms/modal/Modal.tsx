import { useEffect } from 'react';
import PropTypes from 'prop-types';
import FocusTrap from 'focus-trap-react';
import * as styled from './Modal.styled';
import { ModalType } from '../../types';

const Modal = ({ children, onClose }: ModalType) => {
    useEffect(() => {
        const escape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose();
        };

        document.addEventListener('keydown', escape, false);
        document.body.style.overflow = 'hidden'; // disable scroll

        return () => {
            document.removeEventListener('keydown', escape, false);
            document.body.style.overflow = 'unset'; // enable scroll
        };
    }, [onClose]);

    return (
        <styled.Overlay
            onClick={(e) => e.target === e.currentTarget && onClose()}
        >
            <FocusTrap
                focusTrapOptions={{
                    initialFocus: false,
                    clickOutsideDeactivates: true,
                }}
            >
                <styled.Content aria-modal>{children}</styled.Content>
            </FocusTrap>
        </styled.Overlay>
    );
};

Modal.propTypes = {
    children: PropTypes.shape({}).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
