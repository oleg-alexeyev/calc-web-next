import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useCalculator } from './useCalculator';

describe('useCalculator Hook', () => {
    it('should initialize with the default expression', () => {
        const { result } = renderHook(() => useCalculator());
        expect(result.current.state.expression).toBe("0");
    });

    it('should not accept arbitrary symbols', () => {
        const { result } = renderHook(() => useCalculator());

        expect(() => {
            result.current.enterSymbols("a");
        }).toThrow();

        expect(result.current.state.expression).toBe("0");
    });

    it('should use the default expression on adding an operation', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.addOperation("+");
            result.current.enterSymbols("1");
        });

        expect(result.current.state.expression).toBe("0+1");
    });

    it('should replace the default expression on entering symbols', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols("1");
        });

        expect(result.current.state.expression).toBe("1");
    });

    it('should replace the default expression on entering symbols', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols("1");
        });

        expect(result.current.state.expression).toBe("1");
    });

    it('should not replace the default expression on entering dot', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols(".");
        });

        expect(result.current.state.expression).toBe("0.");
    });

    it('should append symbols correctly', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols("5");
            result.current.enterSymbols("0");
        });

        expect(result.current.state.expression).toBe("50");
    });

    it('should calculate the result of an expression', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols("1");
            result.current.addOperation("+");
            result.current.enterSymbols("1");
        });

        expect(result.current.state.expression).toBe("1+1");

        act(() => {
            result.current.calculateResult();
        });

        expect(result.current.state.expression).toBe("2");
    });

    it('should return error on dividing by zero', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols("1");
            result.current.addOperation("/");
            result.current.enterSymbols("0");
        });

        expect(result.current.state.expression).toBe("1/0");

        act(() => {
            result.current.calculateResult();
        });

        expect(result.current.state.expression).toBe("Error: / by zero");
    });

    it('should replace error on entering symbols', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols("1");
            result.current.addOperation("/");
            result.current.enterSymbols("0");
            result.current.calculateResult();
            result.current.enterSymbols("1");
        });

        expect(result.current.state.expression).toBe("1");
    });

    it('should replace the last operation', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols("1");
            result.current.addOperation("/");
            result.current.addOperation("*");
        });

        expect(result.current.state.expression).toBe("1*");
    });

    it('should handle rounding errors', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols("0.1");
            result.current.addOperation("+");
            result.current.enterSymbols("0.2");
            result.current.calculateResult();
        });

        expect(result.current.state.expression).toBe("0.3");
    });

    it('should ignore input if number is too big', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols(Number.MAX_SAFE_INTEGER.toString());
            result.current.enterSymbols("0");
            result.current.calculateResult();
        });

        expect(result.current.state.expression).toBe(Number.MAX_SAFE_INTEGER.toString());
    });

    it('should clear current entry', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols("1");
            result.current.addOperation("+");
            result.current.enterSymbols("1");
            result.current.clear();
        });

        expect(result.current.state.expression).toBe("1+");
    });

    it('should clear all on second clear', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols("1");
            result.current.addOperation("+");
            result.current.enterSymbols("1");
            result.current.clear();
            result.current.clear();
        });

        expect(result.current.state.expression).toBe("0");
    });

    it('should reset to default if the only entry is cleared', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols("1");
            result.current.clear();
        });

        expect(result.current.state.expression).toBe("0");
    });

    it('should not change expression on calculate if it is incomplete', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols("1");
            result.current.addOperation("+");
            result.current.calculateResult();
        });

        expect(result.current.state.expression).toBe("1+");
    });

    it('should not allow more than one dot', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols(".");
            result.current.enterSymbols(".");
        });

        expect(result.current.state.expression).toBe("0.");
    });

    it('should replace result on starting typing new input', () => {
        const { result } = renderHook(() => useCalculator());

        act(() => {
            result.current.enterSymbols("1");
            result.current.addOperation("+");
            result.current.enterSymbols("1");
            result.current.calculateResult();
            result.current.enterSymbols("1");
        });

        expect(result.current.state.expression).toBe("1");
    });
});
