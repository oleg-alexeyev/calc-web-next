import Button from "@/components/button";

export default function OperatorButton({label, action}: { label: string; action: () => void; }) {
    return (
        <Button label={label}
                backgroundClass="bg-[#03C905]"
                outlineClass="outline-[#4D4B52]"
                action={action}
        />
    );
}
