import DisplayScreen from "@/components/display-screen";
import ClearEntryButton from "@/components/clear-entry-button";

export default function Display({ value, clearAction }: { value: string, clearAction: () => void; }) {
    return (
        <div className="flex w-full h-8">
            <ClearEntryButton clearAction={clearAction}/>
            <DisplayScreen value={value}/>
        </div>
    );
}
