import { useState, useEffect, use } from "react";

const Navbar = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setActive(true);
            } else {
                setActive(false);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
  
};

export default Navbar;