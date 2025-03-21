import { useThemeStore } from "../../store/themeStore";
import { themes } from "../../theme";
import clsx from "clsx";

const Texts = [
    "Siempre me ha apasionado entender cómo funcionan las cosas, y durante tres años trabajé como mecánico. Me gustaba mi profesión, pero un día, por pura curiosidad, vi un video sobre programación y algo en mí hizo clic. Decidí aprender más por mi cuenta y, tras ocho meses de estudio intensivo, tomando cada noche como una oportunidad para mejorar, tomé la decisión más grande de mi vida: dejar mi trabajo para dedicarme por completo al desarrollo web.",
    "Desde entonces, mi enfoque ha sido claro: crear, aprender y mejorar cada día. Para mí, el código es más que una herramienta; es la llave que abre infinitas posibilidades. Me apasiona la programación creativa y el código limpio, y disfruto compartir este mundo con otros, lo que me ha llevado a estar muy activo en comunidades de Discord, donde aprendo y colaboro con otros desarrolladores.",
    "Mi experiencia como mecánico me enseñó a trabajar bajo presión, ser organizado, resolver problemas de manera lógica y brindar un buen servicio. Aunque aún no tengo experiencia en una empresa dentro del mundo tech, he construido un arsenal de proyectos que reflejan mis habilidades. Me especializo en diseño, accesibilidad, rendimiento y estructura de código, siempre buscando entregar soluciones eficientes y atractivas.",
    "Domino diversas tecnologías, desde lenguajes y frameworks hasta herramientas de control de versiones y diseño. Puedes ver más sobre mis habilidades aquí.",
    "Fuera del código, disfruto leer libros, ir al gimnasio y jugar fútbol. Me encantan los desafíos y no le temo a los retos; de hecho, los busco. Actualmente, estoy aprendiendo inglés para ampliar mis oportunidades, porque sé que solo necesito una sola oportunidad para demostrar de qué estoy hecho.",
    "¡Comunícate y dime '¡Hola!' ¡Espero tener noticias tuyas pronto!",
    "StivCode, el koala que codifica sin demora. 🐨💻"
]

const AboutMe = () => {
    const { theme } = useThemeStore();

    return (
        <div className={clsx("padding-x flex flex-col gap-7", themes[theme].text)}>
            <div>
                <h1 className="text-3xl font-bold mb-2">¡HOLA! 👋</h1>
                <p>Soy StivCode, un desarrollador web que pasó de solucionar problemas mecánicos a resolver desafíos con código.</p>
            </div>
            {Texts.map((text, index) => (
                <p key={index} className="">{text}</p>
            ))}
        </div>
    )
}

export default AboutMe