// import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal bg-[#101727] text-white p-10">
                <aside>
                    <a href="#"><h2 className="text-2xl font-bold">DigiTool</h2></a>
                    <p>
                        Premium digital tools for creators, <br></br>professionals, and businesses. Work smarter <br></br>with our suite of powerful tools.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title capitalize">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </nav>
                <nav>
                    <h6 className="footer-title capitalize">Company</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </nav>
                <nav>
                    <h6 className="footer-title capitalize">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title capitalize">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a href="#">
                            <div className="flex justify-center items-center w-6 h-6 rounded-3xl bg-white text-black">
                                <AiFillInstagram />
                            </div>
                        </a>
                        <a href="#">
                            <div className="flex justify-center items-center w-6 h-6 rounded-3xl bg-white text-black">
                                <FaFacebookSquare />
                            </div>
                        </a>
                        <a href="#">
                            <div className="flex justify-center items-center w-6 h-6 rounded-3xl bg-white text-black">
                                <FaXTwitter />
                            </div>
                        </a>
                    </div>
                </nav>

            </footer>
            <footer className="footer sm:footer-horizontal bg-[#101727] text-white items-center p-10">
                
                <aside className="grid-flow-col items-center">
                    <p>© {new Date().getFullYear()} Digitools - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a className="link link-hover">Privacy Policy </a>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Cookies</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;