import React from 'react';

export function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="bg-primary  bg-indigo-900  text-white py-3 px-6 rounded hover:bg-slate-950"
    >
      {children}
    </button>
  );
}
