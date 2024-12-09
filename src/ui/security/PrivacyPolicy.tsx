import React from 'react';
import Navbar from '../general/Navbar';
import Footer from '../general/Footer';

const Privacy: React.FC = () => {
    return (
        <>
            < Navbar />
            <div className="max-w-5xl mx-auto p-6 bg-transparent font-inter text-gray-800 mt-24">
                <h1 className="text-5xl font-semibold  text-center mb-6">Privacy Policy</h1>

                {/* <p className="text-gray-600"><strong>Effective Date: 14|11|2024</strong></p> */}

                <section>
                    <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
                    <p className='text-lg mb-3'>Goldior Luxury values the privacy of our customers and visitors. This Privacy Policy outlines the types of personal information we collect, and how we use, disclose, and safeguard your information when you visit our website (Website URL). By accessing or using the website, you agree to the terms of this Privacy Policy.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>

                    <h3 className="text-xl font-semibold mt-2">a) Personal Information</h3>
                    <p className='text-lg'>When you visit or interact with our Site, we may collect personal information that you voluntarily provide, including but not limited to:</p>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2 mt-2">
                        <li>Name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Shipping and billing address</li>
                        <li>Payment information</li>
                        <li>Purchase history</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4">b) Automatically Collected Information</h3>
                    <p className='text-lg'>We may also collect certain information automatically when you visit our Site, including:</p>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2 mt-2">
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Device information</li>
                        <li>Pages viewed and the order of those pages</li>
                        <li>Time spent on the Site</li>
                        <li>Referring website</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-4">c) Cookies and Tracking Technologies</h3>
                    <p className='text-lg'>We use cookies and similar tracking technologies to enhance your experience on our Site. Cookies help us track usage patterns, remember preferences, and provide personalized content. You can choose to disable cookies through your browser settings, but this may affect your experience on our Site.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">3. How We Use Your Information</h2>
                    <p className='text-lg'>We use the information we collect for various purposes, including:</p>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2 mt-2">
                        <li>Processing and fulfilling orders</li>
                        <li>Communicating with you about your orders, updates, and promotions</li>
                        <li>Improving our products, services, and website functionality</li>
                        <li>Analyzing usage patterns and customer behavior to enhance the user experience</li>
                        <li>Sending marketing communications, if you have opted in</li>
                        <li>Complying with legal obligations and preventing fraud</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">4. How We Share Your Information</h2>
                    <p className='text-lg'>We do not sell or rent your personal information to third parties. However, we may share your information with:</p>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2 mt-2">
                        <li><strong>Service providers:</strong> Third-party companies that assist us with payment processing, order fulfillment, and marketing.</li>
                        <li><strong>Business transfers:</strong> If our company is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                        <li><strong>Legal requirements:</strong> We may disclose your information if required to comply with laws, regulations, or legal proceedings.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">5. Data Security</h2>
                    <p className='text-lg'>We take reasonable precautions to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">6. Your Rights</h2>
                    <p className='text-lg'>You have the right to:</p>
                    <ul className="list-disc list-inside text-lg pl-4 space-y-2 mt-2">
                        <li>Access, correct, or update your personal information.</li>
                        <li>Request the deletion of your personal information.</li>
                        <li>Opt out of receiving marketing communications.</li>
                        <li>Restrict the processing of your personal information in certain circumstances.</li>
                    </ul>
                    <p className='text-lg'>To exercise any of these rights, please contact us at <strong><a href="mailto:info@goldiorluxury.com" className="text-blue-500 hover:underline">info@goldiorluxury.com</a></strong>.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">7. Third-Party Links</h2>
                    <p className='text-lg'>Our Site may contain links to third-party websites that are not operated by us. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">8. Age Privacy</h2>
                    <p className='text-lg'>Our Site is not intended for individuals under the age of 16, and we do not knowingly collect personal information from minors. If we discover that a minor has provided us with personal information, we will take steps to delete that information.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">9. Changes to This Privacy Policy</h2>
                    <p className='text-lg'>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with the effective date. Your continued use of our Site after any changes signifies your acceptance of the revised Privacy Policy.</p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 mt-6">10. Contact Us</h2>
                    <p className='text-lg'>For questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
                    <ul className="list-none text-lg space-y-2 mt-2">
                        <li><strong>Email:</strong> [Your email address]</li>
                        <li><strong>Phone:</strong> [Your phone number]</li>
                        <li><strong>Address:</strong> [Your physical address]</li>
                    </ul>
                </section>
            </div>
            <Footer />
        </>

    );
};

export default Privacy;
