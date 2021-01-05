import React from 'react';

function Nav() {
    const categories = [
        { name: "Family"}, 
        { name: "Maternity"}, 
        { name: "Couple"},
        { name: "Wedding and Event"}
    ];

    function categorySelected(name) {

        console.log(`${name} clicked`)
    }

    return (
        <header>
            <h2>
                <a href="/">
                    Jesse Robert Cadena Photography
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    {categories.map((category) => (
                        <li
                        className="mx-1"
                        key={category.name}>
                            <span onClick={categorySelected} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                    <li>
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Nav;