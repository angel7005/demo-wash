//import { Inter } from "next/font/google"
import Navbar from "./components/navbar"
import Footer from "./components/footer"


//const inter = Inter({ subsets: ["latin"] })

/*export const metadata = {
    title: "Ayu Adiati",
    description: "Ayu Adiati's portfolio",
}*/

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}
