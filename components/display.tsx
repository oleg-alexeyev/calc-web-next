import DisplayScreen from "@/components/display-screen";
import ClearEntryButton from "@/components/clear-entry-button";

export default function Display() {
    return (
        <div className="flex w-full h-8">
            <ClearEntryButton/>
            <DisplayScreen/>
        </div>
    );
}
