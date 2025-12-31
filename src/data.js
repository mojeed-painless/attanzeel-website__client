import { FaGooglePlusG, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaBookOpenReader } from "react-icons/fa6";
import { BiSolidParty } from "react-icons/bi";
import { HiMiniAcademicCap } from "react-icons/hi2";
import { RiGalleryFill } from "react-icons/ri";
import { RiDoorOpenFill } from "react-icons/ri";
import { FaGoogleScholar, FaBuildingColumns, FaSchoolFlag } from "react-icons/fa6";
import stat1 from './assets/images/stats1.png';
import stat2 from './assets/images/stats2.png';
import stat3 from './assets/images/stats3.png';

import prebasicImage1 from './assets/images/welcome3.jpg';
import nurseryImage1 from './assets/images/welcome4.jpg';
import basicImage1 from './assets/images/welcome5.jpg';
import jssImage1 from './assets/images/welcome6.jpg';
import ssImage1 from './assets/images/welcome7.jpg';

import activityCard1 from './assets/images/activitycard1.jpg';
import activityCard2 from './assets/images/activitycard2.jpg';
import activityCard3 from './assets/images/activitycard3.jpg';

import parent4 from './assets/images/parent4.jpg';
import parent3 from './assets/images/parent3.jpg';

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
    {id: 1, Icon: IoHome, path: '/', name: 'Home'},
    {id: 2, Icon: FaBookOpenReader, path: '/about', name: 'About'},
    {id: 5, Icon: HiMiniAcademicCap, name: 'Academics',
        subLinks: [
            {id: 1, path: '/academic-calender', name: 'Academic Calender'},
            {id: 2, path: '/dress-code', name: 'Dress Code'},
            {id: 3, path: '/conduct', name: 'Code of Conduct'},
            // {id: 4, path: '/admissions', name: 'Admissions'},
        ]
    },
    {id: 3, Icon: BiSolidParty, path: '/activity', name: 'Activity'},
    {id: 6, Icon: RiGalleryFill, path: '/gallery', name: 'Gallery'},
    {id: 4, Icon: RiDoorOpenFill, name: 'Login',
        subLinks: [
            {id: 1, path: '/portal', name: 'Existing Student'},
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





export const statistics = [
    {
        id: 1,
        icon: stat1,
        title: "15+",
        description: "Years of Academic Excellence and Growth",
    },
    {
        id: 2,
        icon: stat3,
        title: "25",
        description: "Certified Educators and Support Staff",
    },
    {
        id: 3,
        icon: stat2,
        title: "95%",
        description: "Student Pass Rate in External Examinations",
    },
]





export const categories = [
    {id: 1, path: '/basic', title: 'Basic Section', icon: FaGoogleScholar},
    {id: 2, path: '/college', title: 'College Section', icon: FaBuildingColumns},
    {id: 3, path: '/boarding', title: 'Boarding Section', icon: FaSchoolFlag}
]


export const sectionGallery = [
    {
        id: 1,
        title: 'prebasic',
        images: [
            { src: prebasicImage1 },
            { src: staffImage2 },
            { src: staffImage3 },
        ]
    },
    {
        id: 2,
        title: 'nursery',
        images: [
            { src: nurseryImage1 },
            { src: staffImage5 },
            { src: staffImage6 },
        ]
    },
    {
        id: 3,
        title: 'basic',
        images: [
            { src: basicImage1 },
            { src: staffImage8 },
            { src: staffImage9 },
        ]
    },
    {
        id: 4,
        title: 'jss',
        images: [
            { src: jssImage1 },
            { src: staffImage11 },
            { src: staffImage12 },
        ]
    },
    {
        id: 5,
        title: 'ss',
        images: [
            { src: ssImage1 },
            { src: staffImage4 },
            { src: staffImage1 },
        ]
    },
]








export const activities = [
    {
        id: 1, 
        image: activityCard1, 
        path: '', 
        title: 'Assembly Ground', 
        body: 'Students come together for guidance, and inspiration, fostering discipline, leadership spirit among them'
    },
    {
        id: 2, 
        image: activityCard2, 
        path: '', 
        title: 'Sport Activities', 
        body: 'Promoting physical fitness, teamwork, and a healthy competitive mindset through organized sports and game.'
    },
    {
        id: 3, 
        image: activityCard3, 
        path: '', 
        title: 'ICT Class', 
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



export const testimonials = [
    { 
        id: 1,
        image: '',
        testimony: "At-tanzeel Schools Ibadan really surprised my family through their Western education and Arabic studies. The level of teaching for the children is top-notch, and both my son and my daughter have shown great improvement in their academics..",
        name: 'Engr. Bello Akeem',
        gender: 'male',
        profession:  'Engineer'
    },
    { 
        id: 2,
        image: '',
        testimony: "AT-TANZEEL School  offers a well-balanced curriculum that focuses on academic excellence and strong character development. I have seen positive growth in my children, both academically and morally, since enrolling them in the school. The school also encourages student participation in sports, which helps build confidence and discipline. It's truly a great school dedicated to nurturing future leaders.",
        name: 'Mrs Animasahun K. H',
        gender: 'female',
        profession:  'Entrepreneur / Teacher'
    },
    { 
        id: 3,
        image: parent3,
        testimony: "At-Tanzeel School has been a wonderful place for my son’s Arabic and Islamic learning. I have seen clear improvement in his confidence, Arabic reading, and understanding of Islamic values. The teachers are patient and supportive, and the school provides a disciplined environment I would gladly recommend to other parents.",
        name: 'Hajia Hamdah Adeola',
        gender: 'female',
        profession:  'Educational Facilitator'
    },
    { 
        id: 4,
        image: parent4,
        testimony: "I had an amazing experience at At-tanzeel Schools Ibadan (ASI), The teachers are super supportive, and the facilities are top-notch. The curriculum is engaging both in western and Islamic Education and I love the extracurricular activities they offer. The school really cares about student growth and well-being. Highly recommend!",
        name: 'Mrs. Olagunju Rukayat',
        gender: 'female', 
        profession:  'Teacher'
    },
]




export const mainGallery = [
    {
        id: 1,
        thumbnail: ssImage1,
        caption: '2025 Fruit Day',
        images: [
            { src: ssImage1, width: 800, height: 600, key: 'gallery-1-1' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-1-2' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-1-3' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-1-4' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-1-5' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-1-6' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-1-7' },
        ]
    },
    {
        id: 2,
        thumbnail: jssImage1,
        caption: '2025 End of the year Party',
        images: [
            { src: ssImage1, width: 800, height: 600, key: 'gallery-2-1' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-2-2' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-2-3' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-2-4' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-2-5' },
        ]
    },
    {
        id: 3,
        thumbnail: basicImage1,
        caption: 'PTA Meeting',
        images: [
            { src: ssImage1, width: 800, height: 600, key: 'gallery-3-1' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-3-2' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-3-3' },
        ]
    },
    {
        id: 4,
        thumbnail: nurseryImage1,
        caption: '2025 Open day',
        images: [
            { src: ssImage1, width: 800, height: 600, key: 'gallery-4-1' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-4-2' },
        ]
    },
    {
        id: 5,
        thumbnail: prebasicImage1,
        caption: '2025 Excursion',
        images: [
            { src: ssImage1, width: 800, height: 600, key: 'gallery-5-1' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-5-2' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-5-3' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-5-4' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-5-5' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-5-6' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-5-7' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-5-8' },
        ]
    },
    {
        id: 6,
        thumbnail: jssImage1,
        caption: '2025 Childrens Day',
        images: [
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-1' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-2' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-3' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-4' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-5' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-6' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-7' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-8' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-9' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-10' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-11' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-12' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-13' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-14' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-15' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-16' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-6-17' },
        ]
    },
    {
        id: 7,
        thumbnail: nurseryImage1,
        caption: 'Inter-School Debate',
        images: [
            { src: ssImage1, width: 800, height: 600, key: 'gallery-7-1' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-7-2' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-7-3' },
        ]
    },
    {
        id: 8,
        thumbnail: ssImage1,
        caption: 'MSSN Meeting',
        images: [
            { src: ssImage1, width: 800, height: 600, key: 'gallery-8-1' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-8-2' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-8-3' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-8-4' },
            { src: ssImage1, width: 800, height: 600, key: 'gallery-8-5' },
        ]
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