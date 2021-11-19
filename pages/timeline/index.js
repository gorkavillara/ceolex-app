import Link from "next/link"

const Timeline = ({ username }) => {
    return (<>
        <h1>esto es el timeline de {username}</h1>
        <Link href="/">Volver</Link>
    </>
    )
}

Timeline.getInitialProps = async () => {
    return { username: "Gorka" }
}

export default Timeline
