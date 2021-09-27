import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../atoms/buttons/Button.styled';
import { DialogType } from '../../types';
import * as styled from './Dialog.styled';

const Dialog = ({ content, onCancel, onConfirmation }: DialogType) => {
    return (
        <div role="dialog">
            <styled.Title>{content}</styled.Title>
            <styled.BtnsGroup>
                <Button themeColor="success" margin="0rem" onClick={onCancel}>
                    Annuler
                </Button>
                <Button
                    themeColor="
                    success"
                    margin="0rem"
                    onClick={onConfirmation}
                    style={{ marginLeft: '1rem' }}
                >
                    Confirmer la suppression
                </Button>
            </styled.BtnsGroup>
        </div>
    );
};

Dialog.propTypes = {
    content: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    onConfirmation: PropTypes.func.isRequired,
};

export default Dialog;
