import Controls from "./Controls"
import ThemeSwitch from "./ThemeSwitch"

function Header() {

	return (
		<header className="flex flex-col gap-4">
			<h1 className="text-4xl font-bold flex gap-2">
				<img src="https://em-content.zobj.net/source/apple/391/ledger_1f4d2.png" className="h-11" />
				TLDraw Manager
			</h1>
			<div className="flex justify-between">
				<Controls />
				<ThemeSwitch />
			</div>
		</header>
	)
}

export default Header