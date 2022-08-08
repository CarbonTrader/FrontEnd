import { useState } from "react";

const initialState = {
    project: [],
    firstSection:"list",
    secondSection:"info"
}

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const showInfo = (p) => {
		setState({
            ...state,
			project:p,
            
		});
	};
    const changeFirstSection = () =>{
        setState({
            ...state,
            firstSection:"info",
            secondSection:"check"
        })
    };
	return {
		state,
		showInfo,
        changeFirstSection,
	}
}

export default useInitialState;