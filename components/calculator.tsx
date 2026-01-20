import Keypad from "@/components/keypad";
import Display from "@/components/display";
import SymbolButton from "@/components/symbol-button";
import OperatorButton from "@/components/operator-button";

export default function Calculator() {
    return (
        <section className="grid grid-cols-10
            gap-2 p-1.5 w-56.25
            bg-[#A8A8A8] text-[21px] text-[#020104]
            border-2 border-[#2C2C2C] rounded-xl
         ">
            <div className="col-span-10">
                <div className={`bg-[#E0E0E0] rounded-xl flex gap-2 p-2 items-stretch justify-items-stretch`}>
                    <Display/>
                </div>
            </div>
            <div className="col-span-7">
                <Keypad columns={3}>
                    <SymbolButton label="7"/>
                    <SymbolButton label="8"/>
                    <SymbolButton label="9"/>
                    <SymbolButton label="4"/>
                    <SymbolButton label="5"/>
                    <SymbolButton label="6"/>
                    <SymbolButton label="1"/>
                    <SymbolButton label="2"/>
                    <SymbolButton label="3"/>
                    <SymbolButton label="0"/>
                    <SymbolButton label="."/>
                    <OperatorButton label="=" action={() => {
                    }}/>
                </Keypad>
            </div>
            <div className="col-span-3">
                <Keypad columns={1}>
                    <OperatorButton label="&divide;" action={() => {
                    }}/>
                    <OperatorButton label="&times;" action={() => {
                    }}/>
                    <OperatorButton label="&minus;" action={() => {
                    }}/>
                    <OperatorButton label="+" action={() => {
                    }}/>
                </Keypad>
            </div>
        </section>
    );
}