const Header = ({name, api, midName}) => {
    return (
        <header>
            <h1>{name} {midName}</h1>
            {api.results.map(pokemon=>
                (<div key={pokemon.id}>
                    <h2>{pokemon.name}</h2>
                    <a href={pokemon.url}>{pokemon.url}</a>
                </div>)
            )}
        </header>
    );
};

export default Header;