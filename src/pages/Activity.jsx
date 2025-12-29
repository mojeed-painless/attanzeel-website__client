import '../assets/styles/activity.css';
import { activities } from '../data';

export default function Activity() {
    return (
        <article className="main-activity__section">
            <div className="container main-activity__container">
                <div className="main-activity__cards">
                    {activities.map(({id, image, title, body}) => (
                        <div key={id} className="main-activity__card">
                            <div className="main-activity__image">
                                <img src={image} alt={title} />
                            </div>

                            <div className="main-activity__message">
                                <h3>{title}</h3>
                                <small>{body}</small>
                            </div>

                            <button type="button">Read More</button>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}