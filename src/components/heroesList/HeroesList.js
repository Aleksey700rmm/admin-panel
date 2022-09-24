// import { useHttp } from "../../hooks/http.hook";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// import { heroDeleted, fetchHeroes } from './heroesSlice';
import { useGetHeroesQuery, useDeleteHeroMutation } from "../../api/apiSlice";
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from "../spinner/Spinner";

import './heroesList.scss';

const HeroesList = () => {
    // const filteredHeroes = useSelector(state => {
    //     if (state.filters.filterName === 'all') {
    //         return state.heroes.heroes; 
    //     } else {
    //         return state.heroes.heroes.filter((item) => item.element === state.filters.filterName);
    //     }
    // })

    const {
        data: heroes = [],
        isLoading,
        isError
    } = useGetHeroesQuery();

    const [deleteHero] = useDeleteHeroMutation();

    const activeFilter = useSelector(state => state.filters.filterName);

    const filteredHeroes = useMemo(() => {
        const filteredHeroes = heroes.slice();

        if (activeFilter === 'all') {
            return filteredHeroes; 
        } else {
            return filteredHeroes.filter((item) => item.element === activeFilter);
        }
    }, [heroes, activeFilter]);

    // const filteredHeroes = useSelector(filteredHeroesSelector);
    // const heroesLoadingStatus = useSelector((state) => state.heroes.heroesLoadingStatus);
    // const dispatch = useDispatch();
    // const { request } = useHttp();

    // useEffect(() => {
    //     dispatch(fetchHeroes());        
    //     // eslint-disable-next-line
    // }, []);

    const onDelete = useCallback(
        (id) => {
            // request(`http://localhost:3001/heroes/${id}`, "DELETE")
            //     .then(dispatch(heroDeleted(id)))
            //     .catch((err) => console.log(err));
            deleteHero(id);
        },
        // eslint-disable-next-line
        []
    );

    if (isLoading) {
        return <Spinner />;
    } else if (isError) {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return (
                <CSSTransition
                    timeout={0}
                    classNames="hero">
                    <h5 className="text-center mt-5">Героев пока нет</h5>
                </CSSTransition>
            )
        }

        return arr.map(({ id, ...props }) => {
            return (
                <CSSTransition
                    key={id}
                    timeout={500}
                    classNames='hero'>
                    <HeroesListItem key={id} {...props} onDelete={() => onDelete(id)} />
                </CSSTransition>
            );
        });
    };

    const elements = renderHeroesList(filteredHeroes);
    return (
        <TransitionGroup component='ul'>
            {elements}
        </TransitionGroup>
        )
};

export default HeroesList;
