import styles from "../../styles/News.module.css";
import Image from "next/image";

const NewsApp = ({articles}) => {

    return (
        <div className="news">
            { articles.length > 0 ? articles.map((article, index) =>
                <div key={index} className="new">
                    <img className={styles.img} src={article.urlToImage} alt={article.title}/>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                </div>) : ("Loading...")
            }
        </div>
    );

    

}

export async function getServerSideProps(){
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=6f25f7206e8648bb90681adabf869234')
    const {articles} = await response.json()
    console.log(articles);

    return {
        props: {
            articles
        }
    }
}

export default NewsApp;