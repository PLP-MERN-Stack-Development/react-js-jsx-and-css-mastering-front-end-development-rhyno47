import React from 'react';

export default function Button({ children, variant = 'primary', ...props }) {
  const base = "px-4 py-2 rounded font-semibold";
  const styles = {
    primary: 'bg-[#680202] text-white',
    secondary: 'bg-gray-200 text-gray-800',
    danger: 'bg-red-600 text-white'
  };
  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
