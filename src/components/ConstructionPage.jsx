import '../assets/styles/construction.css';

export default function ConstructionPage({ name }) {
    return (
        <article className="construction__section">
            <div className="construction__container">
                <div className="construction__content">
                    <h2>{name}</h2>
                    <h1>This Page is Under Construction</h1>
                    <p>We are working hard to bring you an amazing experience. Stay tuned for updates!</p>
                </div>
            </div>
        </article>
    )
}