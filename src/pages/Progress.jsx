import Plant from "../components/ProgressPlant";
/* import Quote from "../components/Quote"; */
import Streak from "../components/Streak";

export default function Progress() {
	return (
		<div className='p-4 flex flex-col gap-6 items-center'>
			<Plant />
			{/* <Quote /> */}
			<Streak />
		</div>
	);
}
