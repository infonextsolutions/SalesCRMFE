import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { callApi } from "../../redux/utils/apiActions.js";
import { GET } from "../utils/Const.js";

const DropSelect = ({
    component,
    values,
    onSubmit
}) => {
    const dispatch = useDispatch();


    const [selections, setSelections] = useState(null);
    const [popupState, setPopupState] = useState(false);


    const [options, setOptions] = useState(component.options);

    console.log(component);
    console.log(options);

    useEffect(() => {
        if (component.onClickApi) {
            dispatch(callApi({
                url: component.onClickApi,
                method: GET,
                headers: { "Content-Type": "application/json" },
            })).then((res) => {
                // if (res.payload?.data?.["sectorNumber"]) {
                //     setOptions(res.payload?.data?.[component.optionKey]);
                // }
                console.log(res);
            });
        }
    }, []);






    const [selectedOption, setSelectedOption] = useState(7);
    const [prevOption, setPrevOption] = useState(null);

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const value = `${component.onClickApi}?days=${selectedOption}`;
    console.log(value);

    useEffect(() => {
        if (prevOption !== selectedOption) {

            dispatch(callApi({
                url: `${component.onClickApi}?days=${selectedOption}`,
                method: GET,
                headers: { "Content-Type": "application/json" },
            })).then((res) => {

                console.log(res);
            });
            setPrevOption(selectedOption);
        }
    }, [selectedOption]);



    return (
        <div
            className={`drop_select_wrapper ${component?.className}`}

        >
            <select value={selectedOption} onChange={handleChange}>
                {options.map((data, index) => (<option key={index} value={data.value}>{data.label}</option>))}

            </select>
            {selectedOption && <p>You selected: {selectedOption}</p>}



        </div>
    );
};

export default DropSelect;