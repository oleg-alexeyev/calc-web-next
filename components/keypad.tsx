import React from "react";

export default function Keypad(
    { columns, children }: Readonly<{ columns: number; children: React.ReactNode; }>
) {
    return (
        <div className={`bg-[#E0E0E0] rounded-xl grid grid-cols-${columns} gap-2 p-2 items-center justify-items-center`}>
            {children}
        </div>
    );
}