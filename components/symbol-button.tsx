import Button from "@/components/button";

export default function SymbolButton({label}: { label: string; }) {
    return (
        <Button label={label}
                backgroundClass="bg-[#CAD6FF]"
                outlineClass="outline-[#9293A0]"
                action={() => {}}
        />
    );
}
