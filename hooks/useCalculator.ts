import {useState} from 'react';

type Operation = '+' | '-' | '*' | '/';

function endsWithOperation(prev: string) {
    return ['+', '-', '*', '/'].includes(prev.slice(-1));
}

function getLastNumber(s: string) {
    const match = s.match(/(\d*\.?\d*)$/);
    return match ? match[0] : "";
}

interface CalculatorState {
    expression: string;
    result: boolean;
}

export function useCalculator() {
    const [state, setState] = useState<CalculatorState>({
        expression: "0",
        result: false
    });

    const methods = {
        enterSymbols: (symbols: string) => {
            if (/[^0-9.]/.test(symbols)) {
                throw new Error(`Invalid input: "${symbols}". Only digits, dots, and minus are allowed.`);
            }
            setState(prev => {
                if (prev.expression === "0") {
                    if (!symbols.startsWith('.')) {
                        return { expression: symbols, result: false };
                    }
                }
                if (prev.expression.toLowerCase().startsWith("error")) {
                    return { expression: symbols, result: false };
                }
                if (prev.result) {
                    return { expression: symbols, result: false };
                }
                const lastNumberStr = getLastNumber(prev.expression);
                if (lastNumberStr) {
                    if (lastNumberStr.includes('.')) {
                        symbols = symbols.replace('.', '');
                    }
                    const newNumberStr = lastNumberStr + symbols;
                    const newNumber = Number(newNumberStr);
                    if (newNumber === Number.NaN || newNumber > Number.MAX_SAFE_INTEGER) {
                        return prev;
                    }
                }
                return { expression: prev.expression + symbols, result: false };
            });
        },

        addOperation: (op: Operation) => {
            setState(prev => {
                if (prev.expression === "0" && op === '-') {
                    return { expression: op, result: false };
                }
                if (endsWithOperation(prev.expression)) {
                    return { expression: prev.expression.slice(0, -1) + op, result: false };
                }
                return { expression: prev.expression + op, result: false };
            });
        },

        clear: () => {
            setState(prev => {
                const lastNumberStr = getLastNumber(prev.expression);
                if (lastNumberStr) {
                    const next = prev.expression.slice(0, prev.expression.length - lastNumberStr.length);
                    if (next) {
                        return { expression: next, result: false };
                    }
                }
                return { expression: "0", result: false };
            });
        },

        calculateResult: () => setState(prev => {
            if (endsWithOperation(prev.expression)) {
                return prev;
            }
            try {
                const result = new Function(`return ${prev.expression}`)();
                if (result === Infinity || result === -Infinity) {
                    return { expression: "Error: / by zero", result: true };
                }
                const safeResult = Number(result.toFixed(12));
                return { expression: safeResult.toString(), result: true };
            } catch {
                return { expression: "Error", result: true };
            }
        })
    };

    return {state, ...methods};
}
