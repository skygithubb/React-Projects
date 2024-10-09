import { useState } from "react";
import data from "./data";

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(currentId) {
        setSelected(currentId === selected ? null : currentId);
        // Reset multiple selection when switching to single selection mode
        if (enableMultiSelection) {
            setMultiple([]);
        }
    }

    function handleMultipleSelection(currentId) {
        let copyMultiple = [...multiple];
        const findIndexOfCurrentId = copyMultiple.indexOf(currentId);

        if (findIndexOfCurrentId === -1) {
            copyMultiple.push(currentId);
        } else {
            copyMultiple.splice(findIndexOfCurrentId, 1);
        }
        setMultiple(copyMultiple);
    }

    return (
        <div className="bg-blue-950 min-h-screen text-white flex items-center justify-center">
            <div className="items-center max-w-md w-full p-4">
                <div className="text-black border-none rounded-md flex justify-center mb-4">
                    <button
                        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
                        className="bg-white text-lg px-2 py-1 rounded-md hover:bg-blue-200 transition duration-300"
                    >
                        {enableMultiSelection ? "Disable Multi Selection" : "Enable Multi Selection"}
                    </button>
                </div>

                <div className="space-y-4">
                    {data && data.length > 0 ? (
                        data.map(dataItem => (
                            <div className="bg-blue-800 border-none rounded-md overflow-hidden" key={dataItem.id}>
                                <div
                                    onClick={enableMultiSelection ? () => handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}
                                    className="flex justify-between cursor-pointer items-center font-semibold text-xl p-4"
                                >
                                    <h3>{dataItem.question}</h3>
                                    <span> + </span>
                                </div>
                                {selected === dataItem.id || multiple.includes(dataItem.id) ? (
                                    <div className="text-lg answer bg-blue-700 p-4">
                                        {dataItem.answer}
                                    </div>
                                ) : null}
                            </div>
                        ))
                    ) : (
                        <div>No data found</div>
                    )}
                </div>
            </div>
        </div>
    );
}
