import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // You can use any icon of your choice

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle scroll and check if we need to show the button
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling
        });
    };

    // Monitor scroll events
    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-12 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-50"
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                </button>
            )}
        </div>
    );
};

export default BackToTopButton;
