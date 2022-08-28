import Link from "next/link";
import Layout from "./layout";

const About = () => {
    return(
    <>
    <Layout title="About">
        <p>Esta es la sección de about</p>
        <Link href="/">Atrás</Link>
    </Layout>
    </>
    );
}

export default About;