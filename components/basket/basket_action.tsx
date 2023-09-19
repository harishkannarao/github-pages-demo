'use client';

import { useBasketContext } from "./basket_context";

export function BasketAction() {
    const basketContext = useBasketContext();

    return (
        <div>
            <button data-testid='increase' onClick={() => basketContext.doIncrease()}>Increase</button>
            <button data-testid='decrease' onClick={() => basketContext.doDecrease()}>Decrease</button>
        </div>
    )
}