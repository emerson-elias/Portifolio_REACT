import '../tecnology/tecnology.scss'

import HTML from '/imgs/tecnologias/html.png'
import CSS from '/imgs/tecnologias/css.png'
import SASS from '/imgs/tecnologias/sass.png'
import REACT from '/imgs/tecnologias/reactt.png'
import JS from '/imgs/tecnologias/js.png'
import TS from '/imgs/tecnologias/ts.png'
import PHP from '/imgs/tecnologias/php.png'
import GTI from '/imgs/tecnologias/github.png'
import VERCEL from '/imgs/tecnologias/vercel.png'
import FIGMA from '/imgs/tecnologias/figma.png'
import SQL from '/imgs/tecnologias/sql-server.png'
import JAVA from '/imgs/tecnologias/java.png'
import TAILWIND from '/imgs/tecnologias/tailwind.png'
import BOOTSTRAP from '/imgs/tecnologias/bootstrap.png'
import MATERIALIZE from '/imgs/tecnologias/materialize.png'

export default function Tecnology() {
    
    return (
        <section className="tecnology-container">

            <div className="tittle" id='tecnologias'>
                <h1>skills</h1>
                <span></span>
            </div>

            <div className="row">

                <div className="layers">

                    <div className="card">
                        <div className="icon-tec">
                            <img src={HTML} alt="HTML" />
                        </div>
                        <div className="card-text">
                            <span>html</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={CSS} alt="CSS" />
                        </div>
                        <div className="card-text">
                            <span>CSS</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={SASS} alt="SASS" />
                        </div>
                        <div className="card-text">
                            <span>SASS</span>
                        </div>
                    </div>


                    <div className="card">
                        <div className="icon-tec">
                            <img src={REACT} alt="REACT" />
                        </div>
                        <div className="card-text">
                            <span>REACT</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={JS} alt="JS" />
                        </div>
                        <div className="card-text">
                            <span>JAVASCRIPT</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={TS} alt="TS" />
                        </div>
                        <div className="card-text">
                            <span>TYPESCRIPT</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={PHP} alt="PHP" />
                        </div>
                        <div className="card-text">
                            <span>PHP</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={GTI} alt="GTI" />
                        </div>
                        <div className="card-text">
                            <span>GIT</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={VERCEL} alt="VERCEL" />
                        </div>
                        <div className="card-text">
                            <span>VERCEL</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={FIGMA} alt="FIGMA" />
                        </div>
                        <div className="card-text">
                            <span>FIGMA</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={SQL} alt="SQL" />
                        </div>
                        <div className="card-text">
                            <span>SQL</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={JAVA} alt="JAVA" />
                        </div>
                        <div className="card-text">
                            <span>JAVA</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={TAILWIND} alt="TAILWIND" />
                        </div>
                        <div className="card-text">
                            <span>TAILWIND</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={BOOTSTRAP} alt="BOOTSTRAP" />
                        </div>
                        <div className="card-text">
                            <span>BOOTSTRAP</span>
                        </div>
                    </div>

                    <div className="card">
                        <div className="icon-tec">
                            <img src={MATERIALIZE} alt="MATERIALIZE" />
                        </div>
                        <div className="card-text">
                            <span>MATERIALIZE</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}