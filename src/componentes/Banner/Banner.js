import './Banner.css'

function Banner() {
    // ISSO É UM JSX (formato que o react le e joga o append no DOM)
    return (
        <header className='banner'>
            <img src="/imagens/banner.png" alt="banner principal"/>
        </header>
    )
}

export default Banner