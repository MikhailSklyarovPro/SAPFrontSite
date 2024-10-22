import React from "react";
import CardMonitoring from "../components/CardMonitoring/CardMonitoring.jsx";
import Filter from "../components/Filter/Filter.jsx";
import Title from "../components/UI/Title/Title.jsx";
import { monitoringData } from "../data/user.data.js";
import "../styles/Monitoring.scss";

export const Monitoring = () => {
    const listItems = monitoringData.allTest.map((item) => (
        <CardMonitoring key={item.id} data={item} />
    ));

    const optionsSystem = [
        { value: 'pso', label: 'ПСО' },
        { value: 'sbut', label: 'Иркутскэнергосбыт' },
    ]

    const optionsTest = [
        { value: 'owpne', label: 'Организация рабочего места новому сотруднику' },
        { value: 'car', label: 'Корректировка прав доступа и что то там' },
        { value: 'owpne2', label: 'Организация рабочего места новому сотруднику' },
        { value: 'car2', label: 'Корректировка прав доступа и что то там' },
        { value: 'owpne3', label: 'Организация рабочего места новому сотруднику' },
        { value: 'car3', label: 'Корректировка прав доступа и что то там' },
    ]

    const optionsStatus = [
        { value: 'complete', label: 'Выполнен' },
        { value: 'pending', label: 'Выполняется' },
        { value: 'inQueue', label: 'В очереди' },
    ]

    const optionsAuthor = [
        { value: '1', label: 'Скляров М. Д.' },
        { value: '2', label: 'Потапов А. М.' },
    ]



    return (
        <>
            <Title text="Мониторинг" className={"titlePage"} />
            <div className="wrapperFilter">
                <Filter isInput={true} isMulti={true} options={optionsSystem} placeholder="Система" />
                <Filter isInput={true} isMulti={true} options={optionsTest} placeholder="Тест" />
                <Filter isInput={false} isMulti={true} options={optionsStatus} placeholder="Статус" />
                <Filter isInput={true} isMulti={true} options={optionsAuthor} placeholder="Автор" />
            </div>
            <div className="wrapperCardMonitoring">
                {listItems}
            </div>
        </>
    );
};

export default Monitoring;
