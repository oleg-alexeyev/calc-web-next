interface ButtonProps {
    label: string;
    backgroundClass: string;
    outlineClass: string;
    action: () => void;
}

export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.action} className={`
            ${props.backgroundClass} text-[#020303] font-bold 
            px-2.5 rounded-full w-8.5 h-8.7 
            flex items-center justify-center
            outline-2 ${props.outlineClass}
            border-t-3 border-l-3 border-white/45
            transition-all active:translate-x-px active:translate-y-px
            active:brightness-85 hover:brightness-90
        `}>
            <div className="relative -top-px -left-px">
                {props.label}
            </div>
        </button>
    );
}
