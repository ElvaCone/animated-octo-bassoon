import React, { useRef, useEffect } from 'react';
import 'flatpickr/dist/flatpickr.min.css';  // 引入 flatpickr 的 CSS
import flatpickr from 'flatpickr';          // 引入 flatpickr 的 JS

const DatePicker = ({ onChange, ...props }) => {
    const datePickerRef = useRef(null);

    useEffect(() => {
        // 初始化 Flatpickr
        flatpickr(datePickerRef.current, {
            onChange: (selectedDates) => {
                if (onChange) {
                    onChange(selectedDates[0]);
                }
            },
            ...props // 传递其他选项
        });
    }, [props, onChange]);

    return <input type="text" ref={datePickerRef} {...props} />;
};

export default DatePicker;
