import menuLinksData from "./data/menu_links.json";

const Header = () => {
	return (
		<header id="intro">
			<article className="fullheight">
				<div className="hgroup">
					<h1>Landon Hotel</h1>
					<h2>West London</h2>
					<p>
						<a href="#welcome">
							<img
								src="https://landonhotel.com/images/misc/arrow.png"
								alt="down arrow"
							/>
						</a>
					</p>
				</div>
			</article>

			<nav id="nav">
				<div className="navbar">
					<div className="brand">
						<a href="#welcome">
							Landon <span>Hotel</span>
						</a>
					</div>
					<ul>
						{menuLinksData.map((menuLink, key) => (
							<li key={key}>
								<a className={`icon ${menuLink.class}`} href={menuLink.href}>
									{menuLink.text}
								</a>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
