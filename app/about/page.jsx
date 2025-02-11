"use client"

import { useRouter } from "next/navigation";

function About() {
    const router = useRouter();

    const handleClick = () => {
        alert("¡Epa! Antes de redireccionar se ejecutó una función gracias a useRouter que viene de 'next/navigation'. Esto debe ser si o si en un componente cliente, no puede ser en un componente servidor como LINK, pero puedes ejecutar una función como esta antes. ¡Jeje!");
        router.push('/');
    };

    return (
        <section>
            <h1>About</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, mollitia? Accusamus eaque eum quasi vitae molestias laboriosam deserunt quaerat, explicabo tenetur cum aliquid dolore. Omnis, veniam? Officia inventore natus omnis maxime ipsam magni, iste consequatur neque molestiae voluptatum enim alias vel, recusandae sit cum laborum error libero dolores harum delectus officiis possimus. Dignissimos corporis dolorum exercitationem quos ea harum ducimus inventore aliquid asperiores quaerat quasi earum ab dicta incidunt praesentium veniam omnis cupiditate est neque enim, molestias placeat mollitia sint? Hic, tempore placeat nulla adipisci animi eius? Officia, natus magnam unde aut sequi odit quae molestias atque ab vel? Placeat.
            </p>
            <button 
                className="bg-sky-500 px-3 py-2 rounded-md" 
                onClick={handleClick}
            >
                Click
            </button>
        </section>
    );
}

export default About;