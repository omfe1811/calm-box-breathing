function Nav() {
	return (
		<nav className=''>
			<h1 className='xl'>Navbar</h1>
			<ul>
				
				<h1>Sound</h1>
				<ul className='block lg:flex'>
					<ListItem NavLink='/garden'>Your garden</ListItem>
					<ListItem NavLink='/#'>Sound</ListItem>
					<ListItem NavLink='/#'>Color</ListItem>
					<ListItem NavLink='/#'>Timer</ListItem>
				</ul>
			</ul>
		</nav>
	);
}
export default Nav;
