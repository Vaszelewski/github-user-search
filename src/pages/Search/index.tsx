import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/Buttonicon';
import './styles.scss';

const Search = () => (
    <div className="search-container">
        <div className="search-content">
            <h2 className="search-title">
                Encontre um perfil Github
            </h2>
            <input
                type="text"
                className="search-form-style"
                placeholder="Usuário Github"
            />
            <div className="btn-spacing">
                <Link to="link">
                    <ButtonIcon text="Encontrar"/>
                </Link>
            </div>
        </div>
    </div>
);

export default Search;