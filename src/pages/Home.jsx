import Timer from "../components/Timer";
import Orbs from "../components/BreathingOrbs";
import Streak from "../components/Streak";

export default function Home() {
	return (
		<div className='p-4 flex flex-col gap-6 items-center'>
			<Timer />
			<Orbs />
			<Streak />
		</div>
	);
}
