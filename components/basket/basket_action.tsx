'use client';

import { useBasketContext } from "./basket_context";

export function BasketAction() {
    const basketContext = useBasketContext();

    return (
        <div>
            <button onClick={() => basketContext.doIncrease()}>Increase</button>
            <button onClick={() => basketContext.doDecrease()}>Decrease</button>
        </div>
    )
}