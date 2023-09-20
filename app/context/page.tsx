'use client';

import { Basket } from "../../components/basket/basket";
import { BasketAction } from "../../components/basket/basket_action";

export default function ContextPage() {
    return (
        <>
            <div>Context Example</div>
            <Basket></Basket>
            <BasketAction></BasketAction>
        </>
    )
}