import React, { useState } from 'react'

const Accordion = () => {
    // State variable to keep track of the open/collapse status of each sub-menu
    const [isActive, setIsActive] = useState({
        status: false, // A boolean flag indicating if a sub-menu is open (true) or collapsed (false)
        key: "", // The key of the currently open sub-menu
    });

    // Function to handle the click event on a parent menu item to expand/collapse the corresponding sub-menu
    const handleToggle = (key) => {
        if (isActive.key === key) { // If the clicked menu is already open, close it
            setIsActive({
                status: false, // Set the status to false to collapse the sub-menu
            });
        } else { // If the clicked menu is closed, open it
            setIsActive({
                status: true, // Set the status to true to open the sub-menu
                key, // Set the key of the clicked menu as the currently open sub-menu
            });
        }
    };

    return (
        <>
            <div className="accordion" id="accordionFaqs">
                <div className="accordion-item border-gray-800 wow animate__animated animate__fadeIn">
                    <h2 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button " : "accordion-button collapsed"}>
                            <span className="heading-4 color-white">Understanding company billing and accounts</span>
                        </button>
                    </h2>
                    <div className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</div>
                    </div>
                </div>

                <div className="accordion-item border-gray-800 wow animate__animated animate__fadeIn">
                    <h2 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button " : "accordion-button collapsed"}>
                            <span className="heading-4 color-white">Updating your billing credit card</span>
                        </button>
                    </h2>
                    <div className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</div>
                    </div>
                </div>

                <div className="accordion-item border-gray-800 wow animate__animated animate__fadeIn">
                    <h2 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button " : "accordion-button collapsed"}>
                            <span className="heading-4 color-white">Application keyboard shortcuts and tips</span>
                        </button>
                    </h2>
                    <div className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</div>
                    </div>
                </div>

                <div className="accordion-item border-gray-800 wow animate__animated animate__fadeIn">
                    <h2 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"}>
                            <span className="heading-4 color-white">Cancelling a website subscription</span>
                        </button>
                    </h2>
                    <div className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Nulla non sollicitudin. Morbi sit amet laoreet ipsum, vel pretium mi. Morbi varius, tellus in accumsan blandit, elit ligula eleifend velit, luctus mattis ante nulla condimentum nulla.</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Accordion;