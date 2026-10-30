import { useEffect, useState } from 'react'

const BackToTop = () => {
    // State to manage the visibility of the scroll-to-top button
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle scroll event and update the visibility state
    const handleScroll = () => {
        if (window.scrollY > 200) {
            setIsVisible(true); // Show the button when scrolled down 200px
        } else {
            setIsVisible(false); // Hide the button when not scrolled down enough
        }
    };

    // Function to scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Scroll smoothly to the top
        });
    };

    // Add a scroll event listener when the component mounts
    // This will call the handleScroll function when the user scrolls
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
        {isVisible && (
            <a id="scrollUp" onClick={scrollToTop} style={{ position: 'fixed', zIndex: 2147483647 }}>
                <i className="fi-rr-arrow-small-up" />
            </a>
        )}
        </>
    );
};

export default BackToTop;
