// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
import { useSelector, useDispatch } from "react-redux";
import { filterSelect } from "../../actions";

const HeroesFilters = () => {

    const {filters, filtersLoadingStatus, filterName} = useSelector(state => state.filters)
    const dispatch = useDispatch();

    const renderFilters = (filters, status) => {
        if (status === 'loading') {
            return <option>Загрузка элеметов</option>
        } else if (status === 'error') {
            return <option>Ошибка загрузки</option>
        }

        if (filters && filters.length > 0) {
            return filters.map(({name, label, className}) => {
                const btnClass = name === filterName ? `btn ${className} active` : `btn ${className}`

                return <button 
                    key={name} 
                    value={name}
                    className={btnClass}
                    onClick={() => dispatch(filterSelect(name))}
                    >{label}</button>
            })
        }
    }

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {renderFilters(filters, filtersLoadingStatus)}
                </div>
            </div>
        </div>
    );
};

export default HeroesFilters;
