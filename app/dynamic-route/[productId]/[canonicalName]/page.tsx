'use client';

export default function Page({ params }: { params: { productId: string, canonicalName: string } }) {
    return(
        <>
            <div>
                <h3 data-testid="productId">{params.productId}</h3>
                <h3 data-testid="canonicalName">{params.canonicalName}</h3>
            </div>
        </>
    )
}
