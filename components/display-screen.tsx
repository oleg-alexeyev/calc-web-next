export default function DisplayScreen({ value }: { value: string; }) {
    const getFontSize = (text: string) => {
        if (text.length > 16) return "text-[12px]"; // Tiny for very long strings
        if (text.length > 12) return "text-[16px]"; // Medium
        return "text-[21px]"; // Default size from your original design
    };
    return (
        <output className={`flex-1 h-full bg-[#DDFCFF] text-right rounded-r-sm
            outline-2 outline-[#939997] px-1
            overflow-hidden text-ellipsis
            ${getFontSize(value)}
       `}>
            {
                value
                    .replaceAll('*', '×')
                    .replaceAll('/', '÷')
                    .replaceAll('-', '−')
            }
        </output>
    );
}
