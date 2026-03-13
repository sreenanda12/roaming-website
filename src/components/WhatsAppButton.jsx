import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
    const phoneNumber = "919876543210"; // Updated phone number placeholder
    const message = encodeURIComponent("Hello! I'm interested in booking a trip with Roaming Direction.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <a 
            href={whatsappUrl}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
        >
            <div className="whatsapp-tooltip">Chat with us!</div>
            <MessageCircle size={30} fill="currentColor" />
            <span className="whatsapp-pulse"></span>
        </a>
    );
}
