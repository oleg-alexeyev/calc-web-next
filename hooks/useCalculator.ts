import {useState} from 'react';

type Operation = '+' | '-' | '*' | '/';

function endsWithOperation(prev: string) {
    return ['+', '-', '*', '/'].includes(prev.slice(-1));
}

function getLastNumber(s: string) {
    const match = s.match(/(\d*\.?\d*)$/);
    return match ? match[0] : "";
}

export function useCalculator() {
    const [expression, setExpression] = useState<string>("0");

    const methods = {
        enterSymbols: (symbols: string) => {
            if (/[^0-9.]/.test(symbols)) {
                throw new Error(`Invalid input: "${symbols}". Only digits, dots, and minus are allowed.`);
            }
            setExpression(prev => {
                if (prev === "0") {
                    return symbols;
                }
                if (prev.toLowerCase().startsWith("error")) {
                    return symbols;
                }
                const lastNumberStr = getLastNumber(prev);
                if (lastNumberStr) {
                    const newNumberStr = lastNumberStr + symbols;
                    const newNumber = Number(newNumberStr);
                    if (newNumber === Number.NaN || newNumber > Number.MAX_SAFE_INTEGER) {
                        return prev;
                    }
                }
                return prev + symbols;
            });
        },

        addOperation: (op: Operation) => {
            setExpression(prev => {
                if (prev === "0" && op === '-') {
                    return op;
                }
                if (endsWithOperation(prev)) {
                    return prev.slice(0, -1) + op;
                }
                return prev + op;
            });
        },

        clear: () => {
            setExpression(prev => {
                const lastNumberStr = getLastNumber(prev);
                if (lastNumberStr) {
                    return prev.slice(0, prev.length - lastNumberStr.length);
                }
                return "0";
            });
        },

        calculateResult: () => setExpression(prev => {
            if (endsWithOperation(prev)) {
                return prev;
            }
            try {
                const result = new Function(`return ${prev}`)();
                if (result === Infinity || result === -Infinity) {
                    return "Error: division by zero";
                }
                const safeResult = Number(result.toFixed(12));
                return String(safeResult);
            } catch {
                return "Error";
            }
        })
    };

    return {expression, ...methods};
}
