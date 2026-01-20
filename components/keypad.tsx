import React from "react";

export default function Keypad(
    { columnsClass, children }: Readonly<{ columnsClass: string; children: React.ReactNode; }>
) {
    return (
        <div className={`bg-[#E0E0E0] rounded-xl grid ${columnsClass} gap-2 p-2 items-center justify-items-center`}>
            {children}
        </div>
    );
}