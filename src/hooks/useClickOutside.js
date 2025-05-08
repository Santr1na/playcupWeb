import React, { useEffect } from "react";

/**
 * Хук для обработки кликов вне указанного элемента
 * @param {React.RefObject} ref - Референс на элемент, снаружи которого нужно отслеживать клики
 * @param {Function} callback - Функция, вызываемая при клике вне элемента
 */
export const useClickOutside = (ref, callback) => {
    const handleClick = (e) => {
        // Если ref существует и клик был вне элемента
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        // Добавляем обработчик при монтировании
        document.addEventListener('mousedown', handleClick);
        
        // Удаляем обработчик при размонтировании
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    }, [ref, callback]); // Зависимости: ref и callback
};