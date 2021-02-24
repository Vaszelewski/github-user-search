import React, {useState} from 'react';
import ButtonIcon from '../../core/components/Buttonicon';
import './styles.scss';
import ImageLoader from './components/ImageLoader';
import InfoLoader from './components/InfoLoaders';
import dayjs from 'dayjs';


const Search = () => {

    type ResultSearch = {
        avatar_url: string
        public_repos: string
        followers: string
        following: string
        company: string
        blog: string
        location: string
        created_at: string
        html_url: string
     }

    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState<ResultSearch>();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        fetch(`https://api.github.com/users/${search}`)
            .then(response => {
                return response.json()
            })
            .then(userResponse => setUserData(userResponse))
            .finally(() => {
                setIsLoading(false)
            })
    }

    const createdAt = dayjs(userData?.created_at).format("DD/MM/YYYY");

    return (
        <div className="container-page">

            <div className="search-container">
                <div className="search-content">
                    <h2 className="search-title">
                        Encontre um perfil Github
                    </h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="search-form-style"
                            placeholder="Usuário Github"
                            required
                            value={search}
                            onChange={handleOnChange}
                        />
                        <div className="form-spacing">
                            <span className="form-spacing"> <ButtonIcon text="Encontrar" /> </span>
                        </div>
                    </form>
                </div>
            </div>

            {userData && (
                <div className="container-result">
                    {isLoading ?
                        <div>
                            <span className="image-loader-position"><ImageLoader /></span>
                            <span className="info-loader-position"><InfoLoader /></span>
                        </div> : (

                            <div>
                                <div>
                                    <img
                                        src={userData.avatar_url}
                                        className="image-position"
                                        alt=""
                                        height="280px"
                                        width="284px"
                                    />
                                </div>

                                <div>
                                    <a href={userData.html_url} className="button-position" target="_new">
                                        <ButtonIcon text="Ver Perfil" />
                                    </a>
                                </div>

                                <div>
                                    <span className="public-repository-position">
                                        <h6 className="text-public-repository">Repositórios públicos: {userData.public_repos}</h6>
                                    </span>
                                    <span className="followers-position">
                                        <h6 className="text-followers">Seguidores: {userData.followers}</h6>
                                    </span>
                                    <span className="following-position">
                                        <h6 className="text-following">Seguindo: {userData.following}</h6>
                                    </span>
                                </div>

                                <div className="container-information-user">
                                    <h5 className="text-information-title">Informações</h5>
                                    <span className="company-position">
                                        <h6 className="text-company"><strong>Empresa:</strong> &nbsp; {userData.company}</h6>
                                    </span>
                                    <span className="website-position">
                                        <h6 className="text-website"><strong>Website/Blog:</strong> &nbsp; {userData.blog}</h6>
                                    </span>
                                    <span className="local-position">
                                        <h6 className="text-local"><strong>Localidade:</strong> &nbsp; {userData.location}</h6>
                                    </span>
                                    <span className="member-position">
                                        <h6 className="text-member"><strong>Membro desde:</strong> &nbsp; {createdAt}</h6>
                                    </span>
                                </div>
                            </div>
                        )}
                </div>
            )}
        </div>
    );
}

export default Search;