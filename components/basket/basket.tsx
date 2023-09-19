'use client';

import { useBasketContext } from "./basket_context";

export function Basket() {
    const basketContext = useBasketContext();

    return (
        <>
            <div>Basket Count: <span data-testid='basket-count'>{basketContext.count}</span></div>
        </>
    )
}