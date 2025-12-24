import { Footer } from "./footer";
import { Navbar } from "./navbar";


export function LayoutContainer({ children,withFooter = true }) {
    return (
        <>
            <Navbar />
            <main className="min-h-[80vh]">
                {children}
            </main>
             {withFooter ? <Footer /> : null}
        </>
    )
}