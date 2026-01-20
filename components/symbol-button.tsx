import Button from "@/components/button";

export default function SymbolButton({label, action}: { label: string; action: () => void; }) {
    return (
        <Button label={label}
                backgroundClass="bg-[#CAD6FF]"
                outlineClass="outline-[#9293A0]"
                action={action}
        />
    );
}
