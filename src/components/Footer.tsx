import { Phone, Mail, MapPin, Globe, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-secondary text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 border-b border-gray-700 pb-12">
                    {/* Company Info */}
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="text-2xl font-bold text-white mb-6 block">
                            GEFI Power
                        </Link>
                        <p className="text-gray-400 mb-6">
                            Green Energy For Sustainable Future. Partnering for a cleaner tomorrow.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="#about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#model" className="text-gray-400 hover:text-primary transition-colors">Cooperation Model</Link></li>
                            <li><Link href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 text-primary mr-3 mt-1" />
                                <span className="text-gray-400">Hanoi, Vietnam</span>
                            </div>
                            <div className="flex items-center">
                                <Phone className="w-5 h-5 text-primary mr-3" />
                                <span className="text-gray-400">0983084804</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="w-5 h-5 text-primary mr-3" />
                                <span className="text-gray-400">info@gefipower.com</span>
                            </div>
                            <div className="flex items-center">
                                <Globe className="w-5 h-5 text-primary mr-3" />
                                <Link href="https://gefipower.com" className="text-gray-400 hover:text-white transition-colors">
                                    gefipower.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} GEFI Power. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
