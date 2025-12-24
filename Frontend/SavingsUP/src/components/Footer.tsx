import './Footer.css'

export default function Footer(){

    return (
        <footer id="footer">
            &copy; {new Date(Date.now()).getFullYear()} Kaguyo / Todos os direitos reservados.
        </footer>
    )
}