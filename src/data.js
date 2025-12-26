import { FaGooglePlusG, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoHome, IoLogIn } from "react-icons/io5";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdOutlineAttractions } from "react-icons/md";
import { FaGoogleScholar, FaBuildingColumns, FaSchoolFlag } from "react-icons/fa6";
import activityCard1 from './assets/images/activitycard1.jpg';
import activityCard2 from './assets/images/activitycard2.jpg';
import activityCard3 from './assets/images/activitycard3.jpg';
import staffImage1 from './assets/images/mallam1.png';
import staffImage2 from './assets/images/mallam2.png';
import staffImage3 from './assets/images/mallam3.png';
import staffImage4 from './assets/images/mallam4.png';
import staffImage5 from './assets/images/mallam5.png';
import staffImage6 from './assets/images/mallam6.png';
import staffImage7 from './assets/images/hajia1.png';
import staffImage8 from './assets/images/hajia2.png';
import staffImage9 from './assets/images/hajia3.png';
import staffImage10 from './assets/images/hajia1.png';
import staffImage11 from './assets/images/hajia2.png';
import staffImage12 from './assets/images/hajia3.png';



export const headerInfo = [
    {
        id: 1,
        className: "green-header",
        title: "2025/2026 Session Admission is ongoing",
        content: "Enroll your ward today for an effective academic growth blended with islamic values",
        buttonText: "Enroll now",
        link: "",
    },
    {
        id: 2,
        className: "purple-header",
        title: "Fruits day: 2024/2025 Session",
        content: "A fun and educational activity that encourages healthy eating habits.",
        buttonText: "Learn more",
        link: "",
    },
    {
        id: 3,
        className: "blue-header",
        title: "Celebrating Outstanding Performance",
        content: "We achieved a 99% Success in just Concluded WEAC & NECO",
        buttonText: "Read more",
        link: "",
    }
]



export const links = [
    {id: 1, icon: IoHome, path: '/', name: 'Home'},
    {id: 2, icon: FaBookOpenReader, path: '/about', name: 'About'},
    {id: 3, icon: MdOutlineAttractions, path: '/activity', name: 'Activity'},
    {id: 4, icon: IoLogIn, name: 'Login',
        subLinks: [
            {id: 1, path: '/portal', name: 'Existing Student'},
            // {id: 2, path: '/new-student-login', name: 'New Student'},
            {id: 3, path: '/portal', name: 'Staff'},
        ]
    }
]

export const subLinks = [
    {id: 1, path: '/portal', name: 'Existing Student'},
    // {id: 2, path: '/new-student-login', name: 'New Student'},
    {id: 3, path: '/portal', name: 'Staff'},
]

export const socials = [
    {id: 1, link: '', icon: FaGooglePlusG},
    {id: 2, link: 'https://wa.me/2348120168494', icon: FaWhatsapp},
    {id: 3, link: '', icon: FaFacebook},
    {id: 4, link: '', icon: FaInstagram},
]

export const categories = [
    {id: 1, path: '/basic', title: 'Basic Section', icon: FaGoogleScholar},
    {id: 2, path: '/college', title: 'College Section', icon: FaBuildingColumns},
    {id: 3, path: '/boarding', title: 'Boarding Section', icon: FaSchoolFlag}
]

export const activities = [
    {
        id: 1, 
        image: activityCard1, 
        path: '', 
        title: 'Students at the Assembly Ground', 
        body: 'Students come together for guidance, and inspiration, fostering discipline, leadership spirit among them'
    },
    {
        id: 2, 
        image: activityCard2, 
        path: '', 
        title: 'Students on Sport Activities', 
        body: 'Promoting physical fitness, teamwork, and a healthy competitive mindset through organized sports and game.'
    },
    {
        id: 3, 
        image: activityCard3, 
        path: '', 
        title: 'Students in ICT Class', 
        body: 'Providing practical ICT education that enhances problem-solving, creativity, and digital literacy among students.'
    }
]

export const staff = [
    {
        id: 1,
        image: staffImage1,
        name: "Comrade AbdusSami' Fasasi",
        qualification: 'B.Sc Arabic and Islamic Studies',
        portfolio: 'Supervisor',
        whatsapp: '#',
        gmail: '#',
    },
    {
        id: 2,
        image: staffImage2,
        name: 'Mr. AbdulMojeed Shittu',
        qualification: 'B.Sc Civil Engineering',
        portfolio: 'Coordinator',
        whatsapp: '#',
        gmail: '#',
    },
    {
        id: 3,
        image: staffImage3,
        name: 'Mr. Ridwanullah AbdulKabir',
        qualification: 'HND Civil Engineering',
        portfolio: 'Teacher',
        whatsapp: '#',
        gmail: '#',
    },
    {
        id: 4,
        image: staffImage4,
        name: 'Mr. Sharafuddeen Salako',
        qualification: 'B.Sc Agric Engineering',
        portfolio: 'Teacher',
        whatsapp: '#',
        gmail: '#',
    },
    {
        id: 5,
        image: staffImage5,
        name: 'Mr. AbdulWarith Idris',
        qualification: 'B.Sc Mechnical Engineering',
        portfolio: 'Teacher',
        whatsapp: '#',
        gmail: '#',
    },
    {
        id: 6,
        image: staffImage6,
        name: 'Mr. AbdulMujeeb Ahmad',
        qualification: 'B.Sc Computer Science',
        portfolio: 'Teacher',
        whatsapp: '#',
        gmail: '#',
    },
    {
        id: 7,
        image: staffImage7,
        name: 'Mrs. Shakirah AbdulKabir',
        qualification: 'B.Sc Marketing and Production',
        portfolio: 'Teacher',
        whatsapp: '#',
        gmail: '#',
    },
    {
        id: 8,
        image: staffImage8,
        name: 'Mrs. Nimotallah Idris',
        qualification: 'B.Sc Business Administration',
        portfolio: 'Teacher',
        whatsapp: '#',
        gmail: '#',
    },
    {
        id: 9,
        image: staffImage9,
        name: 'Mrs. Mufuliat Alimi',
        qualification: 'B.Sc Economics',
        portfolio: 'Teacher',
        whatsapp: '#',
        gmail: '#',
    },
    {
        id: 10,
        image: staffImage10,
        name: 'Miss Waliyah AbdulKabir',
        qualification: 'B.Sc Creative Art',
        portfolio: 'Teacher',
        whatsapp: '#',
        gmail: '#',
    },
    {
        id: 11,
        image: staffImage11,
        name: 'Miss Hameedah Salako',
        qualification: 'ND Biology',
        portfolio: 'Teacher',
        whatsapp: '#',
        gmail: '#',
    },
    {
        id: 12,
        image: staffImage12,
        name: 'Miss Ummu Muhsinah',
        qualification: 'SSCE Certified',
        portfolio: 'School Helper',
        whatsapp: '#',
        gmail: '#',
    },
]



export const grades = [
    {
        id: 1,
        score: '75% - 100%',
        remark: 'Excellent'
    },
    {
        id: 2,
        score: '66% - 74%',
        remark: 'Very Good'
    },
    {
        id: 3,
        score: '55% - 64%',
        remark: 'Good'
    },
    {
        id: 4,
        score: '50% - 54%',
        remark: 'Average'
    },
    {
        id: 5,
        score: 'less than 50',
        remark: 'Below Average'
    }
] 


export const testimonials = [
    { 
        id: 1,
        image: staffImage1,
        testimony: "Attanzeel International School has transformed my child's learning experience. The blend of Western and Islamic teachings has provided a well-rounded education that nurtures both academic excellence and moral values.",
        name: 'Dr. Otunla',
        profession:  'Lecturer'
    },
    { 
        id: 2,
        image: staffImage2,
        testimony: "Attanzeel International School has transformed my child's learning experience. The blend of Western and Islamic teachings has provided a well-rounded education that nurtures both academic excellence and moral values.",
        name: 'Mr. Oriyomi',
        profession:  'Jornalist'
    },
    { 
        id: 3,
        image: staffImage3,
        testimony: "Attanzeel International School has transformed my child's learning experience. The blend of Western and Islamic teachings has provided a well-rounded education that nurtures both academic excellence and moral values Attanzeel International School has transformed my child's learning experience. The blend of Western and Islamic teachings has provided a well-rounded education that nurtures both academic excellence and moral values.",
        name: 'President Tinubu',
        profession:  'Politician'
    },
    { 
        id: 4,
        image: staffImage4,
        testimony: "Attanzeel International School has transformed my child's learning experience. The blend of Western and Islamic teachings has provided a well-rounded education that nurtures both academic excellence and moral values.",
        name: 'Mrs. Kofoworola',   
        profession:  'Trader'
    },
    { 
        id: 5,
        image: staffImage5,
        testimony: "Attanzeel International School has transformed my child's learning experience. The blend of Western and Islamic teachings has provided a well-rounded education that nurtures both academic excellence and moral values.",
        name: 'Mr. Balogun',
        profession:  'Chief Imam'
    },
]