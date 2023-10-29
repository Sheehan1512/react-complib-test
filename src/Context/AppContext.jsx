const CombineComponents = (...components) => {
	return components.reduce(
		(AccumulatedComponents, CurrentComponent) => {
			return ({ children }) => {
				return (
					<AccumulatedComponents>
						<CurrentComponent>{children}</CurrentComponent>
					</AccumulatedComponents>
				);
			};
		},
		({ children }) => <>{children}</>
	);
};

import { TekaContextProvider } from "./TekaContext";
import { MoodContextProvider } from "./MoodContext";

const providers = [TekaContextProvider, MoodContextProvider];

const AppContextProvider = CombineComponents(...providers);

export {AppContextProvider};