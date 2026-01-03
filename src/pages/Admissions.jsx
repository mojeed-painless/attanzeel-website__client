import { admissionsProcess } from '../data';
import '../assets/styles/admissions.css';

export default function Admissions() {
    return (
        <>
            <article>
                <div className="container admissions__process-container">
                    <div className="admissions__process-content">
                        <h1>Our Admission Process</h1>

                        <div className="admissions__process-cards">
                            {admissionsProcess.map(({ id, Icon, title, description }) => (
                                <div key={id} className="admissions__process-card">
                                    <span><Icon /></span>
                                    <h4>{title}</h4>
                                    <small>{description}</small>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            <article>
                <div className="container admissions__inquiry-container">
                    <div className="admissions__inquiry-content">
                        <h2>Inquiry Form</h2>
                        <p>For any questions regarding the admission process, please fill out the inquiry form below and our admissions team will get back to you promptly.</p>
                        
                        <form className="admissions__inquiry-form" action="">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" placeholder="Your Full Name" required />
                            </div>

                            <div>
                                <label htmlFor="name">Child's Name</label>
                                <input type="text" name="name" placeholder="Your Child's Name" required />
                            </div>

                            <div>
                                <label htmlFor="age">Child's Age</label>
                                <input type="number" name="age" placeholder="Your Child's Age" required />
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" placeholder="Email Address" required />
                            </div>

                            <div>
                                <label htmlFor="address">Address</label>
                                <input type="text" name="address" placeholder="Home Address" required />
                            </div>

                            <div>
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" name="phone" placeholder="Phone Number" required />
                            </div>

                            <div>
                                <label htmlFor="preferredProgram">Preferred Section</label>
                                <select name="preferredProgram" required>
                                    <option value="" disabled selected>Select a Section</option>
                                    <option value="undergraduate">Playgroup</option>
                                    <option value="graduate">Kindergarten</option>
                                    <option value="diploma">Nursery</option>
                                    <option value="shortcourse">Primary</option>
                                    <option value="shortcourse2">Junior Secondary</option>
                                    <option value="shortcourse3">Senior Secondary</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="inquiry">Leave a Message</label>
                                <textarea name="inquiry" rows="5" placeholder="Your Inquiry"></textarea>
                            </div>

                            <button type="submit">Submit Inquiry</button>
                        </form>
                    </div>
                </div>
            </article>
        </>
    )
}