'use client';
import Keypad from "@/components/keypad";
import Display from "@/components/display";
import SymbolButton from "@/components/symbol-button";
import OperatorButton from "@/components/operator-button";
import { useCalculator } from "@/hooks/useCalculator";

export default function Calculator() {
    const { expression, enterSymbols, addOperation, clear, calculateResult } = useCalculator();
    return (
        <section className="grid grid-cols-10
            gap-2 p-1.5 w-56.25
            bg-[#A8A8A8] text-[21px] text-[#020104]
            border-2 border-[#2C2C2C] rounded-xl
         ">
            <div className="col-span-10">
                <div className={`bg-[#E0E0E0] rounded-xl flex gap-2 p-2 items-stretch justify-items-stretch`}>
                    <Display value={expression} clearAction={() => {
                        clear();
                    }}/>
                </div>
            </div>
            <div className="col-span-7">
                <Keypad columnsClass="grid-cols-3">
                    {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'].map((symbol) => (
                        <SymbolButton key={symbol} label={symbol} action={() => enterSymbols(symbol)}/>
                    ))}
                    <OperatorButton label="=" action={() => {
                        calculateResult();
                    }}/>
                </Keypad>
            </div>
            <div className="col-span-3">
                <Keypad columnsClass="grid-cols-1">
                    <OperatorButton label="&divide;" action={() => {
                        addOperation('/')
                    }}/>
                    <OperatorButton label="&times;" action={() => {
                        addOperation('*')
                    }}/>
                    <OperatorButton label="&minus;" action={() => {
                        addOperation('-')
                    }}/>
                    <OperatorButton label="+" action={() => {
                        addOperation('+')
                    }}/>
                </Keypad>
            </div>
        </section>
    );
}