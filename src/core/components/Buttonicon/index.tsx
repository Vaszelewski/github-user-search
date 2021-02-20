import React from 'react';
import './styles.scss';

type Props = {
    text?: string;
}

const ButtonIcon = ({text}: Props) => (
    <div className="d-flex">
        <button className="btn btn-primary btn-icon">
            <h6>{text}</h6>
        </button>
    </div>
);

export default ButtonIcon;