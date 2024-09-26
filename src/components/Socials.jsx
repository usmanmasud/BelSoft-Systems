import { FaInstagram, FaDribbble, FaBehance } from 'react-icons/fa';

export default function Socials() {
    return <div className="flex space-x-6 mb-8">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-4xl text-[rgba(0,181,116,1)] hover:text-gray-800" />
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
            <FaDribbble className="text-4xl text-[rgba(0,181,116,1)] hover:text-gray-800" />
        </a>
        <a href="https://behance.net" target="_blank" rel="noopener noreferrer">
            <FaBehance className="text-4xl text-[rgba(0,181,116,1)] hover:text-gray-800" />
        </a>
    </div>
}