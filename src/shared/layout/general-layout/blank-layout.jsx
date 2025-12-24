import { LayoutContainer } from "./layout-container";

export function BlankLayout({ children }) {
    return (
        <main>
            <LayoutContainer withFooter={false}>
                {children}
            </LayoutContainer>
        </main>
    )
}