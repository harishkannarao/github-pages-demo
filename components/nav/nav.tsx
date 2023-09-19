'use client';

import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';

export function CustomNav() {
    return (
        <Nav>
            <Nav.Item>
                <Nav.Link as={Link} href="/" data-testid='home-link'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} href="/time" data-testid='time-link'>Time</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} href="/dynamic-title" data-testid='dynamic-title-link'>Dynamic Title</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}