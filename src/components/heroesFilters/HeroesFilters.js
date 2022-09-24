import { useSelector, useDispatch } from "react-redux";
import { filterSelect, selectAll } from "../heroesFilters/filtersSlice";
import store from "../../store";

const HeroesFilters = () => {
    const { filtersLoadingStatus, filterName } = useSelector((state) => state.filters);
    const filters = selectAll(store.getState());
    const dispatch = useDispatch();

    const renderFilters = (filters, status) => {
        if (status === "loading") {
            return <option>Загрузка элеметов</option>;
        } else if (status === "error") {
            return <option>Ошибка загрузки</option>;
        }

        if (filters && filters.length > 0) {
            return filters.map(({ name, label, className }) => {
                const btnClass = name === filterName ? `btn ${className} active` : `btn ${className}`;

                return (
                    <button key={name} value={name} className={btnClass} onClick={() => dispatch(filterSelect(name))}>
                        {label}
                    </button>
                );
            });
        }
    };

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">{renderFilters(filters, filtersLoadingStatus)}</div>
            </div>
        </div>
    );
};

export default HeroesFilters;
