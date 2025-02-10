import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import therapist1 from './therapist1.png'
import therapist2 from './therapist2.png'
import therapist3 from './therapist3.png'
import therapist4 from './therapist4.png'
import therapist5 from './therapist5.png'
import therapist6 from './therapist6.png'
import therapist7 from './therapist7.png'
import therapist8 from './therapist8.png'
import therapist9 from './therapist9.png'
import therapist10 from './therapist10.png'
import therapist11 from './therapist11.png'
import therapist12 from './therapist12.png'
import therapist13 from './therapist13.png'
import aba_therapy_playbased from './aba_therapy_playbased.svg'
import art_therapy from './art_therapy.svg'
import equine_horse_therapy from './equine_horse_therapy.svg'
import music_therapy from './music_therapy.svg'
import occupational_therapy from './occupational_therapy.svg'
import language_therapy from './language_therapy.svg'
import psychological_therapy from './psychological_therapy.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
}

export const specialityData = [
    {
        speciality: 'ABA Therapy',
        image: aba_therapy_playbased
    },
    {
        speciality: 'Art Therapy',
        image: art_therapy
    },
    {
        speciality: 'Animal Therapy',
        image: equine_horse_therapy
    },
    {
        speciality: 'Music Therapy',
        image: music_therapy
    },
    {
        speciality: 'Occupational Therapy',
        image:occupational_therapy
    },
    {
        speciality: 'Language Therapy',
        image: language_therapy
    },
    {
        speciality: 'Psychological Therapy',
        image: psychological_therapy
    },
]

export const therapists = [
    {
        _id: 'therapist1',
        name: 'Emma Collins',
        image: therapist1,
        speciality: 'Psychological Therapy',
        degree: 'RP(Qualifying)',
        experience: '4 Years',
        about: 'Emma has a diverse clinical background in mental health and addictions with youth and adults in different treatment and clinical settings. Alyssia’s empathetic and holistic approach is warm and genuine, and she treats every client with respect. ',
        fees: 180,
        address: {
            line1: '17th Cross, Richmond', 
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'therapist2',
        name: 'Scarlett Jackson',
        image: therapist2,
        speciality: 'ABA Therapy',
        degree: 'BCBA',
        experience: '3 Years',
        about: 'Scarlett is passionate about working collaboratively with families to identify pragmatic and evidence-based approaches to support the acquisition and expansion of socially significant behaviours of our learners. Taylor values building meaningful relationships with learners and their families to encourage an empowering and positive experience for all.',
        fees: 85,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'therapist3',
        name: 'Isabella Martinez',
        image: therapist3,
        speciality: 'Art Therapy',
        degree: 'RP (Qualifying)',
        experience: '1 Years',
        about: 'Isabella is a mental health professional who uses art to help people improve their mental, emotional, and physical well-being. She uses a variety of art-based techniques, such as drawing, painting, and sculpture, to help clients express themselves and cope with challenges. ',
        fees: 100,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'therapist4',
        name: 'Susan Lee',
        image: therapist4,
        speciality: 'Animal Therapy',
        degree: 'RP(Qualifying)',
        experience: '2 Years',
        about: 'Susan provides Equine Assisted Therapy to groups and private clients. She has been around horses from a young age and is thrilled to combine her passion for horses with mental health work. She has clinical experience working with neurodivergent and neurotypical clients of all ages with a wide range of therapy goals. ',
        fees: 200,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'therapist5',
        name: 'Harper Anderson',
        image: therapist5,
        speciality: 'Music Therapy',
        degree: 'MA, MTA, RP (Qualifying)',
        experience: '4 Years',
        about: 'Harper has experience working in a variety of settings including pediatric rehabilitation, palliative and hospice care, mental health, and long-term care. Mimian draws from her warmth and experiences, and emphasizes a person, culture, and strengths-based approach for her clients. She believes music is a form of personal expression and connection, and when used intentionally, can support a person’s well-being and growth.',
        fees: 95,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'therapist6',
        name: 'Henry Scott',
        image: therapist6,
        speciality: 'Occupational Therapy',
        degree: 'OT Reg.(Ont.), MScOT',
        experience: '4 Years',
        about: 'Henry is passionate about the power of play as a therapeutic medium, incorporating creative and evidence-based strategies to make therapy sessions engaging and effective. He strives to create a supportive and positive therapeutic environment by ensuring her approach is client-centered, as he understands that each child has unique strengths, goals, and needs.',
        fees: 140,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'therapist7',
        name: 'Debbie Hong',
        image: therapist7,
        speciality: 'Language Therapy',
        degree: 'M.S., CCC-SLP Reg. CASLPO',
        experience: '4 Years',
        about: 'Debbie is genuinely passionate about creating a supportive and engaging environment for each child. She works closely with families to develop individualized therapy plans that are tailored to each child’s unique strengths and needs, using evidence-based practices. ',
        fees: 155,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'therapist8',
        name: 'Noah Walker',
        image: therapist8,
        speciality: 'Language Therapy',
        degree: 'M.S., CCC-SLP Reg. CASLPO',
        experience: '3 Years',
        about: 'Noah has experience working with children with a wide range of abilities, providing family-centered care in the areas of articulation, developmental language, pre-linguistic communication, and early intervention for feeding and swallowing. He is also passionate about dysphagia, aphasia, and cognitive communication, having worked with the adult population in acute care and rehabilitation settings. ',
        fees: 155,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'therapist9',
        name: 'Alexander Green',
        image: therapist9,
        speciality: 'ABA Therapy',
        degree: 'BCBA',
        experience: '1 Years',
        about: 'Alexander utilizes a compassionate care approach, working alongside clinicians and families to ensure quality supports and best outcomes for the children and youth we serve. He has a strong passion for teaching and sharing knowledge on neurodiversity and neuro-affirming care. He is a firm believer in meeting the children where they are at and working collaboratively with families and other teams to help children reach their full potential.',
        fees: 85,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'therapist10',
        name: 'Ella Moore',
        image: therapist10,
        speciality: 'Occupational Therapy',
        degree: 'OT Reg.(Ont.), MScOT',
        experience: '2 Years',
        about: 'Ella understands children from all aspects of their development, and encourages growth through gentle guidance. She believes that therapy should focus on a child’s strengths, while building upon their areas of need.',
        fees: 120,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'therapist11',
        name: 'Evelyn Thomas',
        image: therapist11,
        speciality: 'Psychological Therapy',
        degree: 'RP(Qualifying)',
        experience: '4 Years',
        about: 'Evelyn likes to take an integrative approach to therapy and often uses Cognitive-Behavioural Therapy, Mindfulness, Dialectical Behavioural Therapy and Solution-Focused Therapy. Her goal for all her clients is for them to feel supported, safe and respected.',
        fees: 180,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'therapist12',
        name: 'Liam Carter',
        image: therapist12,
        speciality: 'Music Therapy',
        degree: 'MA, MTA, RP (Qualifying)',
        experience: '4 Years',
        about: 'Liam emphasizes a community oriented approach to music therapy and hopes for clients to find a sense of belonging. He has experience working with people within various settings such as disability, long-term care, adult mental health, dementia care, palliative care and Veterans care. ',
        fees: 95,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'therapist13',
        name: 'Mia Davis',
        image: therapist13,
        speciality: 'ABA Therapy',
        degree: 'BCBA',
        experience: '4 Years',
        about: 'Mia has worked with children and youth diagnosed with autism and behavioural disorders for many years. Mia has worked in clinical and management roles in both the public and private sector providing direct service, clinical supervision, staff training, assessment, consultation, and project management. Kelli is passionate about bettering the lives of the families she supports and is committed to ensuring the delivery of a standard of care that she would want for her own children.',
        fees: 85,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]