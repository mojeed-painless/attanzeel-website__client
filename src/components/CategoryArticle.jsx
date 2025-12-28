import '../assets/styles/category-article.css'

export default function CategoryArticle({ className, header, children, mainImage }) {
    return (
        <article className="class__section">
            <div className="class__container">
                <div className="class__content">
                    <div className={`class__left ${className}`}>
                        {/* <img src={leftImage} alt="" /> */}
                    </div>

                    <div className="class__right">
                        <h3>{header}</h3>
                        {children}
                        <div className="class__gallery">
                            <img src={mainImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}