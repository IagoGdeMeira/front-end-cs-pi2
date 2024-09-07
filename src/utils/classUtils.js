const swapClasses = (elements, removeClass, addClass) => {
    elements.forEach((element) => {
        if (element.classList.contains(removeClass)) {
            element.classList.remove(removeClass);
            element.classList.add(addClass);
        }
    });
};


export const handleResponsiveClasses = (mediaQueryStr, elementClasses) => {
    const mediaQuery = window.matchMedia(mediaQueryStr);

    const applyClassSwap = () => {
        elementClasses.forEach(({ elements, removeClass, addClass }) => {
            if (mediaQuery.matches) {
                swapClasses(elements, removeClass, addClass);
            } else {
                swapClasses(elements, addClass, removeClass);
            }
        });
    };

    applyClassSwap();
    mediaQuery.addEventListener('change', applyClassSwap);
};