import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {fetchFilters, selectAll } from "../heroesFilters/filtersSlice";
// import { heroCreacted } from '../heroesList/heroesSlice'
import { useHttp } from "../../hooks/http.hook";
import store from '../../store';
import { useCreacteHeroMutation } from "../../api/apiSlice";

const HeroesAddForm = () => {
    const { request } = useHttp();

    const [name, setName] = useState("");
    const [text, setText] = useState("");
    const [element, setElement] = useState("");
    // const [filters, setFilters] = useState([]);
    const { filtersLoadingStatus} = useSelector(state => state.filters)
    const filters = selectAll(store.getState())

    const [creacteHero, {isLoading}] = useCreacteHeroMutation();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchFilters());
        // eslint-disable-next-line
    }, []);

    const onAdd = (e) => {
        const newHero = {
            id: uuidv4(),
            name,
            description: text,
            element,
        };

        e.preventDefault();

        creacteHero(newHero).unwrap();

            setName('');
            setText('');
            setElement('');
    };

    const renderFilters = (filters, status) => {
        if (status === 'loading') {
            return <option>Загрузка элеметов</option>
        } else if (status === 'error') {
            return <option>Ошибка загрузки</option>
        }

        if (filters && filters.length > 0) {
            return filters.map(({name, label}) => {
                // eslint-disable-next-line
                if (name === 'all')  return;
                return <option key={name} value={name}>{label}</option>
            })
        }
    }

    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">
                    Имя нового героя
                </label>
                <input required type="text" name="name" className="form-control" id="name" placeholder="Как меня зовут?" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">
                    Описание
                </label>
                <textarea required name="text" className="form-control" id="text" placeholder="Что я умею?" style={{ height: "130px" }} value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">
                    Выбрать элемент героя
                </label>
                <select required className="form-select" id="element" name="element" onChange={(e) => setElement(e.target.value)} value={element}>
                    <option>Я владею элементом...</option>
                    {renderFilters(filters, filtersLoadingStatus)}
                </select>
            </div>

            <button onClick={(e) => onAdd(e)} type="submit" className="btn btn-primary">
                Создать
            </button>
        </form>
    );
};

export default HeroesAddForm;
