import logo from './me.jpg';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" > { < img src = { logo }
            className = "App-logo"
            alt = "logo" / >
        } < p >
        Rajasekar < /p> <
        a className = "App-link"
        href = "./InvestIndex.html"
        target = "_blank"
        rel = "noopener noreferrer" >
        Invest Index < /a> </header >

        <
        /div>
    );
}

export default App;