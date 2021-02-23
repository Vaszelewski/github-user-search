import React, {useState} from 'react';
import ButtonIcon from '../../core/components/Buttonicon';
import { ResultSearch } from '../../core/types/ResultSearch';
import './styles.scss';
import ImageLoader from './components/ImageLoader';
import InfoLoader from './components/InfoLoaders';


const Search = () => {

    const [userData, setUserData] = useState<ResultSearch>();

    return (
        <div className="container-page">
            <div className="search-container">
                <div className="search-content">
                    <h2 className="search-title">
                        Encontre um perfil Github
                    </h2>
                    
                    <form >
                        <input
                            type="text"
                            className="search-form-style"
                            placeholder="Usuário Github"
                        />
                        <div className="form-spacing">
                            <span className="form-spacing">
                                <ButtonIcon text="Encontrar" />
                            </span>
                        </div>
                    </form>
                </div>
            </div>

            {userData && (
                <div className="container-result">

                </div>
                
            )}

































        </div>
    )
};

export default Search;